import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import *as actionCreators from '../store/actionCreators'
import StartBasic from '../img/me.jpg'
import EndBasic from '../img/arrival.jpg'
import './Add.scss'

const Add = function(props){

    const [cource, setCource] = useState([])

    useEffect(() => {

        const config = {
            headers: {
                auth: props.secret_token
            }
        }

        axios.get("/cource", config).then(function(response){
            setCource(response.data.cource)
        })
    }, [])


    const clickHandler = function(){
        const body = {
            total_name : props.totalName
        }

        const config = {
            headers: {
                auth: props.secret_token
            }
        }

        console.log(config)

        axios.post("/update_totalname", body, config).then(function(response){
            console.log(response.data)
            if(response.data.isSuccess === true){
              alert("total name 추가 되었습니다.") 
              props.history.push("/landing")
            }
        })
    }

    const onTotalNameChangeHandler = function(e){
        props.updateTotalName(e.currentTarget.value)
    }

    return(
       <div className="add_background">
           {cource.map(function(cources){
               return(
               <div className="start_url_main"><img src={cources.start_url?cources.start_url:StartBasic}/></div>
               )
           })}
           <div className="add_set_ctrl">
               <div className="add_set">
                   <div className="total_input">
                    <div className="total_nickname_text">
                     <div className="total_text">Total</div>
                     <div className="nickname_text">Nickname</div>
                    </div>
                     <input className="total_nickname" onChange={onTotalNameChangeHandler} value={props.totalName}/>
                   </div>
                   <div className="ok_btn" onClick={clickHandler}><div>OK</div></div>
               </div>
           </div>
           {cource.map(function(cources){
               return(
               <div className="start_url_main"><img src={cources.end_url?cources.end_url:EndBasic}/></div>
               )
           })}
       </div>
    )
}

const ConnectedAdd = connect(function(state){
    return{
        start_url: state.start_url,
        end_url: state.end_url,
        totalName: state.totalName,

        secret_token : state.secret_token
    }
},function(dispatch){
    return{
        updateTotalName : function(totalName){
            dispatch(actionCreators.update_totalName(totalName))
        },
    }
})(Add)

export default ConnectedAdd
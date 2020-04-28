import React, {useState, useEffect} from 'react'
import '../page/MainPage.css'
import Choice from '../img/화살표.png'
import Search from '../img/돋보기.png'
import axios from 'axios'
import {connect} from 'react-redux'
import *as actionCreators from '../store/actionCreators'
import '../page/App.css'
import Start from '../img/me.jpg'
import End from '../img/arrival.jpg'
import {Link} from 'react-router-dom'


const Main = function(props){
    const [file, setFile] = useState(false)
    const [cource, setCource] = useState([])

    useEffect(function(){

    const config = {
            headers: {
                auth: props.secret_token
            }
    }

      axios.get("/cource", config).then(function(response){
         
              setCource(response.data.cource)
      })
    }, [])

    const addClickHandler = function(){
        console.log("클릭!")
        const body = {
            start_address : props.address
        }
        
        const config = {
            headers: {
                auth: props.secret_token
            }
        }

        axios.post("/insert_address", body, config).then(function(response){
            console.log(response.data.start)
            if(response.data.isSuccess === true){
                alert("주소가 추가 되었습니다.")
            }
        })            
    }

    const updataAddressHandler = function(){

        const body = {
            start_address : props.address
        }

        const config = {
            headers: {
                auth: props.secret_token
            }
        }

        axios.post("/update_address", body, config).then(function(response){
            console.log(response.data)
            if(response.data.isSuccess === true){
                alert("주소가 업데이트 되었습니다.")
            }
        }) 

    }   

    const updataAddressHandler2 = function(){

        const body = {
            end_address : props.addressEnd
        }

        const config = {
            headers: {
                auth: props.secret_token
            }
        }

        axios.post("/update_address2", body, config).then(function(response){
            console.log(response.data)
            if(response.data.isSuccess === true){
                alert("주소가 추가 되었습니다.")
            }
        }) 

    }  

    const updateHandler = function(){
     
            const body = { 
                start_name : props.startName,
            }

            const config = {
                headers: {
                    auth: props.secret_token
                }
            }

            axios.post("update_startname", body, config).then(function(response){
                console.log(response.data)
                console.log(body)
                if(response.data.isSuccess === true){
                    alert("nickname 추가 되었습니다.")
                }
            })            
    }

    const addClickHandler2 = function(){
     
            const body = { 
                end_address : props.addressEnd,
            }

            const config = {
                headers: {
                    auth: props.secret_token
                }
            }

            axios.post("/update_address2", body, config).then(function(response){
                console.log(response.data)
                if(response.data.isSuccess === true){
                    alert("주소가 업데이트 되었습니다.")
                }
            })            
    }

    const updateHandler2 = function(){
     
        const body = { 
            // buildname : props.buildname,
            end_name : props.endName,
        }

        const config = {
            headers: {
                auth: props.secret_token
            }
        }

        axios.post("/update_endname", body, config).then(function(response){
            console.log(response.data)
            if(response.data.isSuccess === true){
                alert("nickname 추가 되었습니다.")
            }
        })            
    }

    const clickHandler = () => {
        const form = new FormData()
        form.append("myFile", file)

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                auth: props.secret_token
            }
        }
        
      
        axios.post("/upload_point", form, config).then(function(response){
            console.log(response.data)
            if(response.data.isSuccess === true){                
                props.updateStartUrl(response.data.start_url)
                alert("프로필 사진 업데이트 완료!")
            }
        })
    }

    const clickHandler2 = () => {
        const form = new FormData()
        form.append("myFile", file)

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                auth: props.secret_token
            }
        }
        
      
        axios.post("/upload_point2", form, config).then(function(response){
            console.log(response.data)
            if(response.data.isSuccess === true){                
                props.updateEndUrl(response.data.end_url)
                alert("프로필 사진 업데이트 완료!")
            }
        })
    }


    const onAddressChangeHandler = function(e){
        props.updateAddress(e.currentTarget.value)
    }

    const onAddressChangeHandler1 = function(e){
        props.updateAddress(e.currentTarget.value)
    }

    const onAddressChangeHandler2 = function(e){
        props.updateAddressEnd(e.currentTarget.value)
    }

    const onAddressChangeHandler3 = function(e){
        props.updateAddressEnd(e.currentTarget.value)
    }


    const inputFileChangeHandler = (e) => {
        console.log("file : ", e.currentTarget.files[0])
        setFile(e.currentTarget.files[0])
    }

    const inputFileChangeHandler2 = (e) => {
        console.log("file : ", e.currentTarget.files[0])
        setFile(e.currentTarget.files[0])
    }

    const onStartNameChangeHandler = function(e){
        props.updateStartName(e.currentTarget.value)
    }

    const onEndNameChangeHandler = function(e){
        props.updateEndName(e.currentTarget.value)
    }

    return(
    <div className="posts">
       <div className="control">

           {/* start */}
           <div className="start_control">
               <div className="start_input">
                   <div className="start_address">
                       <input className="start_placeholder" placeholder="START*" onChange={onAddressChangeHandler}/>
                       <div className="search"><img src={Search} onClick={addClickHandler}/></div>
                   </div>
               </div>
               <div className="start_memory">
                        <div>
                          <div className="start_memory_option">
                              <input className="start_wr" onChange={onAddressChangeHandler1} value={props.address}/>
                              <div className="start_option_btn" onClick={updataAddressHandler}>변경</div>
                          </div>
                        </div>
               </div>
           </div>

           {/* end */}
           <div className="end_control">
               <div className="end_input">
                   <div className="end_address">
                       <input className="start_placeholder" placeholder="ARRIVAL*" onChange={onAddressChangeHandler2}/>
                       <div className="search"><img src={Search} onClick={addClickHandler2}/></div>
                   </div>
               </div>
               <div className="end_memory">
                    <div>
                        <div className="start_memory_option">
                              <input className="start_wr" onChange={onAddressChangeHandler3} value={props.addressEnd}/>
                              <div className="start_option_btn" onClick={updataAddressHandler2}>변경</div>
                          </div>
                        </div>
                    </div>
           </div>
       </div>
       <div className="post">
           <div className="point">
               <div className="start_point">
               {cource.map(function(cources){
                   return(
                   <div>
                   <div className="start_url_position">
                   <img className="start_url" src={cources.start_url === null ? Start : cources.start_url}/>
                   </div>
                   <div className="start_url_ctrl">
                   <input type='file' onChange={inputFileChangeHandler}/>
                   <div><div className="start_url_change" onClick={clickHandler}>사진변경</div></div>
                   </div>

                   <div className="start_name">
                   <div className="nickname">nickname</div>
                   {cources.start_name === null?
                      <input className="nickname_input" onChange={onStartNameChangeHandler} value={props.startName}/>
                      :
                      <div className="nickname_output">{cources.start_name}</div>
                    }
                   </div>
                   
                   <div className="start_name">
                   <div className="nickname">address</div>
                   <div className="address_input">{cources.start_address ? cources.start_address:"(비워있음)"}</div>
                   </div>

                   {/* props */}
                   {/* <div className="address_input">{props.address ? props.address:"(비워있음)"}</div> */}
                   <div className="start_add"><div className="start_url_change" onClick={updateHandler}>추가</div></div>
                   </div>
                   )
                   
                   })}


               
               </div>
               <div className="select_img"><img src={Choice}/></div>
               <div className="end_point">
               
               {cource.map(function(cources){
                   return(
                   <div>
               <div className="end_url_position">
                   <img className="start_url" src={cources.end_url === null ? End : cources.end_url}/>
                </div>
                   <div className="start_url_ctrl">
                   <input type='file' onChange={inputFileChangeHandler2}/>
                   <div><div className="end_url_change" onClick={clickHandler2}>사진변경</div></div>
                   </div>

                   <div className="start_name">
                   <div className="nickname">nickname</div>
                   {cources.end_name === null?
                      <input className="nickname_input" value={props.endName} onChange={onEndNameChangeHandler}/>
                      :
                      <div className="nickname_output">{cources.end_name}</div>
                    }
                   
                   </div>

                   <div className="start_name">
                   <div className="nickname">address</div>
               
                   <div className="address_input">{cources.end_address ? cources.end_address:"(비워있음)"}</div>
                   </div>
                   <div className="start_add"><div className="end_url_change" onClick={updateHandler2}>추가</div></div>
                   </div>)
                   })}
               </div>

           </div>
            <div className="point_send"><div onClick={function(){props.history.push("/add")}}>Send</div></div>
           {/* <div className="point_send"><div onClick={sendClickHandler}>Send</div></div> */}
       </div>
    </div>               
    )
}


const ConnectedMain = connect(function(state){
    return{
        //start
        address: state.address,
        start_url: state.start_url,
        startName: state.startName,
        //end
        addressEnd: state.addressEnd,
        end_url: state.end_url,
        endName: state.endName,
        secret_token : state.secret_token,

    }},function(dispatch){
        return{
            updateAddress : function(address){
                dispatch(actionCreators.update_address(address))
            },
            updateStartUrl : function(startUrl){
                dispatch(actionCreators.update_startUrl(startUrl))
            },
            updateStartName : function(startName){
                dispatch(actionCreators.update_startName(startName))
            },
            updateAddressEnd : function(addressEnd){
                dispatch(actionCreators.update_addressEnd(addressEnd))
            },
            updateEndUrl : function(endUrl){
                dispatch(actionCreators.update_endUrl(endUrl))
            },
            updateEndName : function(endName){
                dispatch(actionCreators.update_endName(endName))
            },
        }
    })(Main)


export default ConnectedMain
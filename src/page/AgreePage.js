import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import *as actionCreators from '../store/actionCreators'
import './AgreePage.scss'

const Agree = function(props){
    
    const [isChecked, setIsChecked] =useState(false)

    const addClickHandler = function(){

        const body = { 
            user_id : props.id,
            user_pw : props.pw,
            number : props.number,
            name : props.name,
            nickName : props.nickName
        }

        axios.post("/addUser", body).then(function(response){
            console.log(response.data)
            if(response.data.isSuccess===true){
                props.history.push("/move")
            }
            else{
                props.history.push("/agree")
                return alert("아이디 중복확인 바랍니다.")
            }
        })
    }

    const checkHandler = function(){
       
       const body = {
        user_id:props.id
       }

       axios.post("/checkUser", body).then(function(response){
           console.log(response.data)
           if(response.data.isSuccess===true){
               
                  setIsChecked(!isChecked)
                  return alert("사용 가능한 아이디입니다.")
               
           }
           else{
              return alert("이미 존재하는 아이디입니다.")
           }
       })
    }

    const idInputHandler = function(e){
        props.updateId(e.currentTarget.value)
    }

    const pwInputHandler = function(e){
        props.updatePw(e.currentTarget.value)
    }

    const nameInputHandler = function(e){
        props.updateName(e.currentTarget.value)
    }

    const birthInputHandler = function(e){
        props.updateBirth(e.currentTarget.value)
    }

    const numberInputHandler = function(e){
        props.updateNumber(e.currentTarget.value)
    }

    const nickNameInputHandler = function(e){
        props.updateNickName(e.currentTarget.value)
    }


    return(
        <div className="Input">
        <div className="Agree">
            <h1 className="agree_header">My Way</h1>
            <div className="agree_input">
            <div className="id_ctrl">
              <div className="id_text">ID</div>
              <div className="double" onClick={checkHandler}>중복확인</div>          
            </div>
          
            <div><input value={props.id} onChange={idInputHandler} className="agree_input_text"/></div>
            <div className="item3">PW</div>
            <div><input value={props.pw} onChange={pwInputHandler} type="password" className="agree_input_text"/></div>
            <div className="item3">NAME</div>
            <div><input value={props.name} onChange={nameInputHandler} className="agree_input_text"/></div>
            <div className="item3">BIRTH</div>
            <div><input value={props.birth} onChange={birthInputHandler} className="agree_input_text"/></div>
            <div className="item3">NUMBER</div>
            <div className="item4"><input value={props.number} onChange={numberInputHandler} className="agree_input_text"/></div>
            <div className="item3">NICKNAME</div>
            <div className="item4"><input value={props.nickName} onChange={nickNameInputHandler} className="agree_input_text"/></div>
            </div>
            <div onClick={addClickHandler} className="agree_login">Login</div>

        </div>
        </div>
    )
}

const ConnectedAgree = connect(function(state){
    return{
       id:state.id,
       pw:state.pw,
       name:state.name,
       birth:state.birth,
       number:state.number,
       nickName:state.nickName,
       done:state.done
    }},function(dispatch){
        return{
            updateId : function(id){
                dispatch(actionCreators.update_id(id))
            },
            updatePw : function(pw){
                dispatch(actionCreators.update_pw(pw))
            },
            updateName : function(name){
                dispatch(actionCreators.update_name(name))
            },
            updateBirth : function(birth){
                dispatch(actionCreators.update_birth(birth))
            },
            updateNumber : function(number){
                dispatch(actionCreators.update_number(number))
            },
            updateNickName : function(nickName){
                dispatch(actionCreators.update_nickName(nickName))
            }
        }
    })(Agree)

export default ConnectedAgree
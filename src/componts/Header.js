import React, { useState } from 'react'
import '../componts/Header.css'
import Ham from '../img/ham.png'
import Change from '../img/change.png'
import Time2 from '../page/Time2'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import *as actionCreators from '../store/actionCreators'

const Header = function(props){

  const [isOpend, setIsOpend] = useState(true)

  const clickHandler = function(){
    setIsOpend(!isOpend)
  }

  const logout = function(){
  localStorage.clear()
  props.logout()
  console.log(localStorage)
  }


    return(
        <div className="header_posts">

            <div className="header_menu_ctrl">
              <img src={Ham} className="header_menu" onClick={clickHandler}/>
              {isOpend&&
              <div className="header_main_menu">
                <div className="icon">
                  <img src={Change}/>
                  <Link to="main"><div className="change_text">변경</div></Link>
                </div>
              </div>}
            </div>

            <div className="header_day_total">
              <div className="header_day_text">
                <div>Today :</div>
                <div className="header_day_detail"><Time2/></div>
              </div>
            </div>

          <div className="nickname_logout">
              <div className="user_nickname_ctrl">
              <Link to="/profile"><div className="user_nickname">{props.nickName?props.nickName:"User"}</div></Link>
              </div>
            <div className="logout_btn_ctrl">
            {props.isLogin===false?<Link to="/login"><div className="logout_btn">Login</div></Link>
            :<div onClick={logout} className="logout_btn">Logout</div>}
            </div>
          </div>  

        </div>
    )
}

const connectedHeader = connect(function(state){
  return{
      isLogin: state.isLogin,
      nickName: state.nickName,
  }
}, function(dispatch){
  return {
      logout : () => { dispatch(actionCreators.logout()) }
  }
})(Header)


export default connectedHeader
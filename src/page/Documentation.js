import React, {useState} from 'react'
import './Documentation.scss'
import Build from '../img/build.png'

const Documentation = function(props){

    const [isOpend, setIsOpend] = useState(false)

    const openClickHandler = function(){
        setIsOpend(!isOpend)
    }

  
    return(
        <div className="document_posts">
          <div className="document_background">
              <img src={Build}/>
              <div className="document_main_text">My May</div>
              <div className="document_start_text" onClick={openClickHandler}>Start</div>
              {isOpend&&
                <div className="document_select_posts">
                <div className="document_select_text" onClick={function(){props.history.push("/history")}}>Manual</div>
                <div className="document_select_text" onClick={function(){props.history.push("/login")}}>Login</div>
                <a href="https://kauth.kakao.com/oauth/authorize?client_id=e94722859a13a96095d4b975965b3a3f&redirect_uri=http://localhost:3000/kakaoLogin&response_type=code"><div className="document_select_text">Kakao Login</div></a>
                <div className="document_select_text" onClick={function(){props.history.push("/agree")}}>회원가입</div>
                </div>}

          </div>
        </div>
    )
}

export default Documentation
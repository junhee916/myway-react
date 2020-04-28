import React, {useState, useEffect} from 'react'
import './LandingPage.scss'
import Header from '../componts/Header'
import axios from 'axios'
import Home from '../img/home.png'
import Choice from '../img/choice.png'
import Subway from '../img/전철.png'
import Work from '../img/회사.png'
import Time from '../page/Time'
import {connect} from 'react-redux'
import { addMinutes } from 'date-fns';
import *as actionCreators from '../store/actionCreators'

const LandingPage =function(props){

    const [cource, setCource] = useState([])
    const [isOpend, setIsOpend] = useState(false)
    const [isOpend2, setIsOpend2] = useState(false)
   
    // first
    const [hour, setHour] = useState(null)
    const [min, setMin] = useState(null)
    const [second, setSecond] = useState(null)

    const [defaultHour, setDefaultHour] = useState(null)
    const [defaultMin, setDefaultMin] = useState(null)
    
    // last
    const [hour2, setHour2] = useState(null)
    const [min2, setMin2] = useState(null)
    const [second2, setSecond2] = useState(null)

    const [defaultHour2, setDefaultHour2] = useState(null)
    const [defaultMin2, setDefaultMin2] = useState(null)

  // first
    const onHourChange = (e) => {
      setHour(Number(e.currentTarget.value))
      setDefaultHour(Number(e.currentTarget.value))
  }

  const onMinChange = (e) => {
      setMin(Number(e.currentTarget.value))
      setDefaultMin(Number(e.currentTarget.value))
  }
  
  // last
  const onHourChange2 = (e) => {
    setHour2(Number(e.currentTarget.value))
    setDefaultHour2(Number(e.currentTarget.value))
}

const onMinChange2 = (e) => {
    setMin2(Number(e.currentTarget.value))
    setDefaultMin2(Number(e.currentTarget.value))
}

  useEffect(() => {
    console.log(1)
      if(hour2 !== null && min2 !== null) {
          setInterval(() => {
              const second2 = new Date().getSeconds()
              setSecond2(second2)
              if(second2 === 0) {
                  console.log(min2, min2+1)
                  setMin2(min2 + 1)
              }
          }, 1000)
      }
  }, [hour2, min2])


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

    const openClickHandler = function(){
        setIsOpend(!isOpend)
    }

    const openClickHandler2 = function(){
      setIsOpend2(!isOpend2)
  }

    const onTotalNameReverseChangeHandler = function(e){
      props.updateTotalNameReverse(e.currentTarget.value)
    }

    const totalNameReverseHandler = function(){
      const body = {
        total_name_R : props.totalNameReverse
       }

       const config = {
        headers: {
            auth: props.secret_token
        }
    }

       axios.post("/update_totalnameReverse", body, config).then(function(response){
        console.log(response.data)
        if(response.data.isSuccess === true){
          alert("RevarseName이 등록되었습니다.")
        }
    }) 
    }

    
    return(
        <div className="landing_posts">
            <Header/>
          <div className="landing_contents_posts">
            <div className="landing_contents_zero"></div>
            <div className="landing_contents_main">
                <div className="landing_start">
                    <div className="landing_start_data">
                    {cource.map(function(cources){
                      return(
                        <div>
                          <div className="start_total_ctrl">
                             <div className="start_total_text" onClick={openClickHandler}>{cources.total_name===null?"출근":cources.total_name}</div>
                           {isOpend&&<div className="start_station">
                              <div className="start_img_ctrl">
                                
                                <div>
                                  <img src={Home} className="start_img"/>
                                  <div className="start_detail_time">
                                  {defaultHour && defaultMin 
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 0).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 0).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                                  </div>
                                </div>
                                
                                <div><img src={Choice} className="start_img"/></div>

                                <div>
                                  <img src={Subway} className="start_subway_img"/>
                                  <div className="start_subway_time">
                                  {defaultHour && defaultMin 
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 15).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 15).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                                  </div>
                                </div>

                                <div><img src={Choice} className="start_img"/></div>

                                <div>
                                  <img src={Work} className="start_img"/>
                                  <div className="start_detail_time">
                                  {defaultHour && defaultMin 
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 70).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 70).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                                  </div>
                                </div>    

                              </div>  
                               
                              <div className="start_timmer">
                               <div className="start_timmer_text">
                                  <div>출발</div>
                                  <div>({cources.start_name})</div>
                               </div>

                               <div className="hour_min_second_ctrl">
                               <select value={hour} onChange={onHourChange} className="hour_text">
                                  <option value=''>00</option>                
                                  <option value={1}>01</option>
                                  <option value={2}>02</option>
                                  <option value={3}>03</option>
                                  <option value={4}>04</option>
                                  <option value={5}>05</option>
                                  <option value={6}>06</option>
                                  <option value={7}>07</option>
                                  <option value={8}>08</option>
                                  <option value={9}>09</option>
                                  <option value={10}>10</option>
                                  <option value={11}>11</option>
                                  <option value={12}>12</option>
                               </select>     
                               <div>:</div>
                               <select value={min} onChange={onMinChange} className="hour_text">
                                  <option value=''>00</option>                
                                  <option value={1}>01</option>
                                  <option value={2}>02</option>
                                  <option value={3}>03</option>
                                  <option value={4}>04</option>
                                  <option value={5}>05</option>
                                  <option value={6}>06</option>
                                  <option value={7}>07</option>
                                  <option value={8}>08</option>
                                  <option value={9}>09</option>
                                  <option value={10}>10</option>
                                  <option value={11}>11</option>
                                  <option value={12}>12</option>
                                  <option value={13}>13</option>
                                  <option value={14}>14</option>
                                  <option value={15}>15</option>
                                  <option value={16}>16</option>
                                  <option value={17}>17</option>
                                  <option value={18}>18</option>
                                  <option value={19}>19</option>
                                  <option value={20}>20</option>
                                  <option value={21}>21</option>
                                  <option value={22}>22</option>
                                  <option value={23}>23</option>
                                  <option value={24}>24</option>
                                  <option value={25}>25</option>
                                  <option value={26}>26</option>
                                  <option value={27}>27</option>
                                  <option value={28}>28</option>
                                  <option value={29}>29</option>
                                  <option value={30}>30</option>
                                  <option value={31}>31</option>
                                  <option value={32}>32</option>
                                  <option value={33}>33</option>
                                  <option value={34}>34</option>
                                  <option value={35}>35</option>
                                  <option value={36}>36</option>
                                  <option value={37}>37</option>
                                  <option value={38}>38</option>
                                  <option value={39}>39</option>
                                  <option value={40}>40</option>
                                  <option value={41}>41</option>
                                  <option value={42}>42</option>
                                  <option value={43}>43</option>
                                  <option value={44}>44</option>
                                  <option value={45}>45</option>
                                  <option value={46}>46</option>
                                  <option value={47}>47</option>
                                  <option value={48}>48</option>
                                  <option value={49}>49</option>
                                  <option value={50}>50</option>
                                  <option value={51}>51</option>
                                  <option value={52}>52</option>
                                  <option value={53}>53</option>
                                  <option value={54}>54</option>
                                  <option value={55}>55</option>
                                  <option value={56}>56</option>
                                  <option value={57}>57</option>
                                  <option value={58}>58</option>
                                  <option value={59}>59</option>

                                </select>
                                <span>:{second ? second : "00"}</span>       
                               </div>
                              </div>

                              <div className="start_timmer">
                               <div className="start_timmer_text">
                                  <div>도착</div>
                                  <div>({cources.end_name})</div>
                               </div>

                               <div>
                               {defaultHour && defaultMin 
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 70).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 70).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                               </div>
                              </div>
                            </div>}
                          </div>
                        </div>
                             )
                      })}
                    </div>
                </div>
                <div className="landing_arrival">
                    <div className="landing_start_data">
                    {cource.map(function(cources){
                      return(
                        <div>
                          <div className="start_total_ctrl">
                            <div className="start_total_text" onClick={openClickHandler2}>
                          
                              {cources.total_name_R===null?<div className="reverse_ctrl"><input onChange={onTotalNameReverseChangeHandler} value={props.totalNameReverse}/><div onClick={totalNameReverseHandler} className="reverse_add_btn">Add</div></div>:cources.total_name_R}</div>
                            {/* <div className="reverse_ctrl">
                              <input onChange={onTotalNameReverseChangeHandler} value={props.totalNameReverse}/>
                              <div onClick={totalNameReverseHandler} className="reverse_add_btn">Add</div>
                              </div>
                            </div> */}
                           {isOpend2&&<div className="start_station">
                              <div className="start_img_ctrl">

                              <div>
                                  <img src={Work} className="start_img"/>
                                  <div className="start_detail_time">
                                  {defaultHour2 && defaultMin2
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 0).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 0).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                                  </div>
                                </div>    
                                
                                <div><img src={Choice} className="start_img"/></div>

                                <div>
                                  <img src={Subway} className="start_subway_img"/>
                                  <div className="start_subway_time">
                                  {defaultHour2 && defaultMin2
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 55).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 55).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                                  </div>
                                </div>

                                <div><img src={Choice} className="start_img"/></div>

                                <div>
                                  <img src={Home} className="start_img"/>
                                  <div className="start_detail_time">
                                  {defaultHour2 && defaultMin2
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 70).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 70).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                                  </div>
                                </div>

                              </div>  
                               
                              <div className="start_timmer">
                               <div className="start_timmer_text">
                                  <div>출발</div>
                                  <div>({cources.end_name})</div>
                               </div>

                               <div className="hour_min_second_ctrl">
                               <select value={hour2} onChange={onHourChange2} className="hour_text">
                                  <option value=''>00</option>                
                                  <option value={1}>01</option>
                                  <option value={2}>02</option>
                                  <option value={3}>03</option>
                                  <option value={4}>04</option>
                                  <option value={5}>05</option>
                                  <option value={6}>06</option>
                                  <option value={7}>07</option>
                                  <option value={8}>08</option>
                                  <option value={9}>09</option>
                                  <option value={10}>10</option>
                                  <option value={11}>11</option>
                                  <option value={12}>12</option>
                               </select>     
                               <div>:</div>
                               <select value={min2} onChange={onMinChange2} className="hour_text">
                                  <option value=''>00</option>                
                                  <option value={1}>01</option>
                                  <option value={2}>02</option>
                                  <option value={3}>03</option>
                                  <option value={4}>04</option>
                                  <option value={5}>05</option>
                                  <option value={6}>06</option>
                                  <option value={7}>07</option>
                                  <option value={8}>08</option>
                                  <option value={9}>09</option>
                                  <option value={10}>10</option>
                                  <option value={11}>11</option>
                                  <option value={12}>12</option>
                                  <option value={13}>13</option>
                                  <option value={14}>14</option>
                                  <option value={15}>15</option>
                                  <option value={16}>16</option>
                                  <option value={17}>17</option>
                                  <option value={18}>18</option>
                                  <option value={19}>19</option>
                                  <option value={20}>20</option>
                                  <option value={21}>21</option>
                                  <option value={22}>22</option>
                                  <option value={23}>23</option>
                                  <option value={24}>24</option>
                                  <option value={25}>25</option>
                                  <option value={26}>26</option>
                                  <option value={27}>27</option>
                                  <option value={28}>28</option>
                                  <option value={29}>29</option>
                                  <option value={30}>30</option>
                                  <option value={31}>31</option>
                                  <option value={32}>32</option>
                                  <option value={33}>33</option>
                                  <option value={34}>34</option>
                                  <option value={35}>35</option>
                                  <option value={36}>36</option>
                                  <option value={37}>37</option>
                                  <option value={38}>38</option>
                                  <option value={39}>39</option>
                                  <option value={40}>40</option>
                                  <option value={41}>41</option>
                                  <option value={42}>42</option>
                                  <option value={43}>43</option>
                                  <option value={44}>44</option>
                                  <option value={45}>45</option>
                                  <option value={46}>46</option>
                                  <option value={47}>47</option>
                                  <option value={48}>48</option>
                                  <option value={49}>49</option>
                                  <option value={50}>50</option>
                                  <option value={51}>51</option>
                                  <option value={52}>52</option>
                                  <option value={53}>53</option>
                                  <option value={54}>54</option>
                                  <option value={55}>55</option>
                                  <option value={56}>56</option>
                                  <option value={57}>57</option>
                                  <option value={58}>58</option>
                                  <option value={59}>59</option>

                                </select>
                                <span>:{second2 ? second2 : "00"}</span>       
                               </div>
                              </div>

                              <div className="start_timmer">
                               <div className="start_timmer_text">
                                  <div>도착</div>
                                  <div>({cources.start_name})</div>
                               </div>

                               <div>
                                {defaultHour2 && defaultMin2
                                ? <div>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 70).getHours()}시</span>
                                  <span>{addMinutes(new Date(2014, 6, 10, defaultHour2, defaultMin2), 70).getMinutes()}분</span>
                                  </div>
                                  : "00:00:00"}
                               </div>
                              </div>
                            </div>}
                          </div>
                        </div>
                             )
                      })}
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

const ConnectedLandingPage = connect(function(state){
  return{
      totalNameReverse : state.totalNameReverse,
      secret_token : state.secret_token

  }},function(dispatch){
      return{
          updateTotalNameReverse : function(totalNameReverse){
              dispatch(actionCreators.update_totalNameReverse(totalNameReverse))
          },
      }
  })(LandingPage)

export default ConnectedLandingPage
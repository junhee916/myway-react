import React, { useState, useEffect } from 'react'
import { addMinutes } from 'date-fns';
import "./Test.scss";

const Test = () => {
    const [hour, setHour] = useState(null)
    const [min, setMin] = useState(null)
    const [second, setSecond] = useState(null)

    const [defaultHour, setDefaultHour] = useState(null)
    const [defaultMin, setDefaultMin] = useState(null)

    const onHourChange = (e) => {
        setHour(Number(e.currentTarget.value))
        setDefaultHour(Number(e.currentTarget.value))
    }

    const onMinChange = (e) => {
        setMin(Number(e.currentTarget.value))
        setDefaultMin(Number(e.currentTarget.value))
    }

    useEffect(() => {
        if(hour !== null && min !== null) {
            setInterval(() => {
                const second = new Date().getSeconds()
                setSecond(second)
                if(second === 0) {
                    console.log(min, min+1)
                    setMin(min + 1)
                }
            }, 1000)
        }
    }, [hour, min])

    return (
        <div>     
            <select value={hour} onChange={onHourChange}>
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
            <select value={min} onChange={onMinChange}>
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
            <span>{second ? second : "00"}</span>      

            <div>
                도착시간
                <div className="a">
                    {defaultHour && defaultMin 
                        ? <div className="b">
                            <span className="c">{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 40).getHours()}시</span>
                            <span>{addMinutes(new Date(2014, 6, 10, defaultHour, defaultMin), 70).getMinutes()}분</span>
                        </div>
                        : "선택안됨...."}
                </div>
            </div>      
        </div>
    )
}

export default Test
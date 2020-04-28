import React, { useState } from 'react';

const SelectPage = () => {
    const [startHour, setStartHour] = useState(new Date().getHours())
    const onSelectChanage = (e) => {
        setStartHour(e.currentTarget.value)
    }
    console.log(startHour)
    return (
        <div>
            <h1>select page sample</h1>
            <select onChange={onSelectChanage} defaultValue={startHour}>
                <option value={1}>1시</option>
                <option value={2}>2시</option>
                <option value={3}>3시</option>
                <option value={4}>4시</option>
                <option value={21}>21시</option>
                <option value={22}>22시입니다..</option>
            </select>   
            <div>도착시간 : {Number(startHour) + 1}</div>         
        </div>
    )
}

export default SelectPage;
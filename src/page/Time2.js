import React, {Component} from 'react'
import Clock from 'react-live-clock'

class LiveClockTest2 extends Component {
    render() {
        return(
            <div>
                <Clock format={'YYYY.MM.DD'} ticking={true} timezone={'US/Pacific'}/>
            </div>
        )
    }
}

export default LiveClockTest2
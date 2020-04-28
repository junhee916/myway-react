import React, {Component} from 'react'
import Clock from 'react-live-clock'

class LiveClockTest extends Component {
    render() {
        return(
            <div>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'}/>
            </div>
        )
    }
}


export default LiveClockTest
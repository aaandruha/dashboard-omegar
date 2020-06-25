import React from 'react'
import Buttonsbar from './buttonbar/buttonbar'
import Timebarheader from './timebarheader/timebarheader'
import Timeline from './timeline/timeline'

const Content = (props) => {
    return (
        <div>
            <Buttonsbar />
            <Timebarheader />
            <Timeline />
        </div>
        )
}

export default Content;
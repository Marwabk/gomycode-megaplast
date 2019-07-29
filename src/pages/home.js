import React, { Component } from 'react'

import Slider from '../components/Slider/Slider'
import NewFeed from '../components/NewFeed/newfeed';

export default class Home extends Component {
    render() {
        return (
            <div>
                Home
                <Slider />
                <NewFeed />
            </div>
        )
    }
}

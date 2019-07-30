import React, { Component } from 'react'

import Slider from '../components/Slider/Slider'
import NewFeed from '../components/NewFeed/newfeed';
import CardExample from '../components/newproducts/newproducts'

export default class Home extends Component {
    render() {
        return (
            <div>
               
                <Slider />
                <NewFeed />
                <CardExample />
            </div>
        )
    }
}

import React, { Component } from 'react'

import MainSlider from '../components/Slider/MainSlider'
import NewFeed from '../components/NewFeed/newfeed';
import MultipleItems from '../components/newproducts/sliderProduct'
import {arr} from '../helpers'

//  let arr = [articlesDeCuisine,articlesDeJardin,salonDeThe]
export default class Home extends Component {
    render() {
       
        return (
            <div>
               
                <MainSlider />
                <NewFeed />
                {arr.map(el=><MultipleItems articles={el.articles.slice(0,6)} title={el.titre} path={el.path}/>)}                
            </div>
        )
    }
}

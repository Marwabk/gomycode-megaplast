import React, { Component } from 'react'

import MainSlider from '../components/Slider/MainSlider'
import NewFeed from '../components/NewFeed/newfeed';
import NewProducts from '../components/newproducts/newproducts'
import MultipleItems from '../components/newproducts/sliderProduct'
import {articlesDeCuisine,articlesDeJardin,salonDeThe} from '../helpers'
 let arr = [articlesDeCuisine,articlesDeJardin,salonDeThe]
export default class Home extends Component {
    render() {
        return (
            <div>
               
                <MainSlider />
                <NewFeed />
                <MultipleItems articles={articlesDeCuisine} title="Articles de Cuisine" path="/cuisine"/>
                <MultipleItems articles={articlesDeJardin} title="Articles de Jardin" path="/jardin"/>
                <MultipleItems articles={salonDeThe} title="Salon de Thé" path="/salon"/>
                {/* {arr.map(el=><MultipleItems articles={el} title="Articles de Cuisine" path="/cuisine"/>)}                 */}
            </div>
        )
    }
}

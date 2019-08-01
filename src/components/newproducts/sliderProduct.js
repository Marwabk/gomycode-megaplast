import React, { Component } from "react";
import Slider from "react-slick";
import ItemCard from '../ItemCard'
import './SliderProducts.css'
import { Router,Link } from "@reach/router";

export default class MultipleItems extends Component {
    constructor(props){
        super(props)
        
    }
   
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
    const {articles, title, path}=this.props

    return (
      <div className='slider-products'>
        <Link to={path} className="new-article"> {title} </Link>
        {articles.length===6?<Slider {...settings}>
         {articles.map(el=><ItemCard el={el} />) }
         
        </Slider>:articles.map(el=><ItemCard el={el} />) }
      </div>
    );
  }
}
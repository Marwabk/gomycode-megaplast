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
    
    const articles=this.props.articles.slice(0,6)
    const titre=this.props.title
    const path=this.props.path
    return (
      <div className='slider-products'>
        <Link to={path} className="new-article"> {titre} </Link>
        <Slider {...settings}>
         {articles.map(el=><Link to ='/description'><ItemCard tit={el.title} img={el.imgUrl} price={el.price} /></Link>) }
         
        </Slider>
      </div>
    );
  }
}
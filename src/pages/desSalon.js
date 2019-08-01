import React, { Component } from 'react'
import {Link,Router} from '@reach/router'
import ProductDetail from '../components/description/ProductDetail'
import {salonDeThe} from '../helpers'

export default function DescriptionSalon (props) {
   const article=salonDeThe.filter(el=>el.ref===props.refs)
        return (<div>
            
            {article.map(el=><ProductDetail tit={el.title} img={el.imgUrl} price={el.price} refs={el.ref}/>)}
            </div>)
    
}

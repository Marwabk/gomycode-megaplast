import React, { Component } from 'react'
import {Link,Router} from '@reach/router'
import ProductDetail from '../components/description/ProductDetail'
import {articlesDeJardin} from '../helpers'

export default function DescriptionJardin (props) {
   const article=articlesDeJardin.filter(el=>el.ref===props.refs)
        return (<div>
            
            {article.map(el=><ProductDetail tit={el.title} img={el.imgUrl} price={el.price} refs={el.ref}/>)}
            </div>)
    
}

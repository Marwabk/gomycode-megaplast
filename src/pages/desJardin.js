import React, { Component } from 'react'
import {Link,Router} from '@reach/router'
import ProductDetail from '../components/description/ProductDetail'
import { articlesDeCuisine, articlesDeJardin, salonDeThe ,arr} from '../helpers'

export default function DescriptionJardin (props) {
//    const article=articlesDeJardin.filter(el=>el.ref===props.refs)
        return (<div>
            
            {/* {article.map(el=><ProductDetail el = {el} refs={el.ref}/>)} */}
         <ProductDetail el = {props.path} article={props.article}/>

            </div>)
    
}

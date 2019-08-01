import React from 'react'
import {Link,Router} from '@reach/router'
import ProductDetail from '../components/description/ProductDetail'
import {articlesDeCuisine} from '../helpers'

export default function DescriptionCuisine (props) {
   const article=articlesDeCuisine.filter(el=>el.ref===props.refs)
        return (<div>
            
            {article.map(el=><ProductDetail el = {el} refs={el.ref}/>)}
            </div>)
    
}

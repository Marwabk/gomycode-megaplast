import React from 'react'

import ProductDetail from '../components/description/ProductDetail'


export default function Description (props) {

        return (<div>
            
            
         <ProductDetail el = {props.path} article={props.article}/>

            </div>)
    
}

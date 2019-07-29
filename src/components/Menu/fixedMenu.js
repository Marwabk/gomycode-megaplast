import React from 'react'
import './Menu.css'
import Navbar from '../Navbar/navbar'
const Menu =(props)=>{
    const fonts=props.menu.fonts
    const imgUrl=props.menu.imgUrl
    const navBar=props.navBar
return <div className="fixed-menu">
  <Navbar navBar={navBar}/>
     {fonts.map(el=>
      <div className="fonts">
         <div className="comment">{el.title}</div>
         <i className={el.class}><div className="qty">{el.qty}</div></i>
       </div> )}
     {imgUrl.map(el=>
        <img className={el.class} src={el.url}/>)}
</div>
}

export default Menu


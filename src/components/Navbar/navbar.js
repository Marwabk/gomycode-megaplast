import React from 'react';
import './Navbar.css'

const Navbar=(props)=>{
    const navBar=props.navBar
  return <div className='nav-bar'>
      <img className="logo" src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/67404251_654119968331769_1807425944437129216_n.png?_nc_cat=103&_nc_oc=AQksTkT5BERJCrcz27UtF9bV_tzVpfDUXhsSg4o_QhdE7mSTt5MmyhHVpcwCSSulpHY&_nc_ht=scontent.ftun10-1.fna&oh=48ae1ff86fda62b3f1d69101aec1c9bf&oe=5DECEA4E&dl=1" />
      <ul>
  {navBar.map((el,i)=><li key={i}>
                   <a href="#"><i className={el.class}></i>{el.title}</a>
                   
        {el.subMenu && (
                   <ul >{el.subMenu.map(element => <li className="sub-menu"><a href="#" >{element}</a></li>)}</ul>
               )}
           
     </li>)} 
     </ul>
     <div className="Search-bar">
     <input type="text" placeholder="Search..." className="search"></input>
     <button type="submit" className="submit-button" ><i className="fas fa-search"></i></button>
     </div> 
  </div>
}


export default Navbar
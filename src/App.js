import React from 'react';
import './App.css';
import Menu from './fixedMenu';
import Slider from './Slider'

const menu={fonts:[{title:"sign in",class:"fas fa-sign-in-alt"},
{title:"sign up",class:"fas fa-user-plus"},
{title:"shopping bag",class:"fas fa-shopping-cart",qty:'0'}],
imgUrl:[{url:"https://assets.asosservices.com/storesa/images/flags/tn.png",class:"flag one"},
{url:"https://assets.asosservices.com/storesa/images/flags/fr.png",class:"flag"}]}
const navBar=[{title:"Acceuil",class:"fas fa-home"},
             {title:"Présentation"},
             {title:"Nos Produits",subMenu:["Articles de cuisine",
                                            "Articles de jardin",
                                            "Salons de thé"]},
             {title:"Contact"}]

function App() {
  return (
    <div className="App">
   <Menu menu={menu} navBar={navBar} />
   <Slider />
    </div>
  );
}

export default App;

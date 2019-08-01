import React from 'react';
import { Router } from "@reach/router";
import { Provider } from "react-redux"

import Home from '../pages/home'
import NavbarPage from '../components/navbarPage/navbarPage'
import SingIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Checkout from '../components/shoppingCard/Checkout'
import DescriptionJardin from '../pages/desJardin'
import MultipleItems from '../components/newproducts/sliderProduct'
import { articlesDeCuisine, articlesDeJardin, salonDeThe ,arr,tousLesArticles} from '../helpers'
import ContactPage from '../pages/ContactPage'
import store from '../store'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <NavbarPage />
        <Router>
          <Home path="/" />
          <SingIn path="/signIn" />
          <SignUp path='/register' />
          <Checkout path='/checkout' />
          {arr.map(el=><MultipleItems articles={el.articles}  path={el.path}/>)}  
          {articlesDeCuisine.map(el => <DescriptionJardin path={el.link} article={el} />)}
          {articlesDeJardin.map(el =>  <DescriptionJardin path={el.link} article={el} />)}
          {salonDeThe.map(el => <DescriptionJardin path={el.link} article={el} />)}
          <ContactPage path="/contact" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

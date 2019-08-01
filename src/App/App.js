import React from 'react';
import { Router } from "@reach/router";
import {Provider} from "react-redux"
import {createStore} from "redux"

import cartReducer from '../reducers/CartReducer';
// import Menu from '../components/Menu/fixedMenu';
// import {menu,navBar} from '../helpers'
import Home from '../pages/home'
import CatCuisine from '../pages/CatCuisine';
import CatJardin from '../pages/CatJardin';
import CatSalon from '../pages/CatSalon';
import NavbarPage from '../components/navbarPage/navbarPage'
import SingIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Checkout from '../components/shoppingCard/Checkout'
import DescriptionCuisine from '../pages/desCuisine'
import DescriptionJardin from '../pages/desJardin'
import DescriptionSalon from '../pages/desSalon'
import {articlesDeCuisine,articlesDeJardin,salonDeThe} from '../helpers'
import ContactPage from '../pages/ContactPage'


function App() {
  const store = createStore(cartReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  return (
    <Provider store={store}>
    <div className="App">
   {/* <Menu menu={menu} navBar={navBar} /> */}
   <NavbarPage />
   <Router>
      <Home path="/" />
      <SingIn path="/signIn" />
      <SignUp path='/register' />
      <Checkout path='/checkout' />
      <CatCuisine path="/cuisine" />
      <CatJardin path="/jardin" />
      <CatSalon path="/salon" />
      {articlesDeCuisine.map(el=><DescriptionCuisine path={el.link} refs={el.ref}/>)}
      {articlesDeJardin.map(el=><DescriptionJardin path={el.link} refs={el.ref}/>)}
      {salonDeThe.map(el=><DescriptionSalon path={el.link} refs={el.ref}/>)}
      <ContactPage path="/contact"/>
    </Router>
    </div>
  </Provider>
  );
}

export default App;

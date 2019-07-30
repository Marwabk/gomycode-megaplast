import React from 'react';
import { Router } from "@reach/router";
import {Provider} from "react-redux"
import {createStore} from "redux"

import cartReducer from '../reducers/CartReducer';
import Menu from '../components/Menu/fixedMenu';
import {menu,navBar} from '../helpers'
import Blog from '../pages/blog'
import Home from '../pages/home'
import CatCuisine from '../pages/CatCuisine';
import CatJardin from '../pages/CatJardin';
import CatSalon from '../pages/CatSalon';



function App() {
  const store = createStore(cartReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  return (
    <Provider store={store}>
    <div className="App">
   <Menu menu={menu} navBar={navBar} />
   <Router>
      <Home path="/" />
      <Blog path="/blog" />
      <CatCuisine path="/cuisine" />
    <CatJardin path="/jardin" />
    <CatSalon path="/salon" />
    </Router>
    </div>
  </Provider>
  );
}

export default App;

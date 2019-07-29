import React from 'react';
import { Router } from "@reach/router";

import Menu from '../components/Menu/fixedMenu';
import {menu,navBar} from '../helpers'
import Blog from '../pages/blog'
import Home from '../pages/home'



function App() {
  return (
    <div className="App">
   <Menu menu={menu} navBar={navBar} />
   <Router>
      <Home path="/" />
      <Blog path="/blog" />
    </Router>

    </div>
  );
}

export default App;

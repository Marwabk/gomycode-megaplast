import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Router,Link } from "@reach/router";
import './navbarPage.css'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
      <Link to="/" ><img src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67871313_348666312676814_2469226490026262528_n.png?_nc_cat=100&_nc_oc=AQmD3WqMtMvi3PfzM_YzzK_ojn7rMyceCV4JgwOF4oSXpImBKfos-dxldVps6gOThyY&_nc_ht=scontent.ftun1-1.fna&oh=b8bbd0d39d8d547e14fe19e70a9861c9&oe=5DEA211F" alt="" style={{width:100,height:50}}/></Link>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <Link to="/" className="navbar-item">Home</Link>
          </MDBNavItem>
          <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline navbar-item">Catégorie</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" >
              <Link to="/cuisine" className="navbar-item"><MDBDropdownItem >Article Cuisine</MDBDropdownItem></Link>
              <Link to="/jardin" className="navbar-item"><MDBDropdownItem >Article Jardin</MDBDropdownItem></Link>
              <Link to="/salon" className="navbar-item"><MDBDropdownItem >Salon de thé</MDBDropdownItem></Link>
              </MDBDropdownMenu>
            </MDBDropdown>
          <MDBNavItem>
            <Link to="/contact" className="navbar-item">Contact</Link>
          </MDBNavItem>
          <MDBNavItem>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link className="waves-effect waves-light" to="/checkout">
              <MDBIcon style={{fontSize:25}} fas icon="shopping-cart" />
            </Link>
          </MDBNavItem>
          <MDBNavItem>
          <Link className="waves-effect waves-light" style={{fontSize:20}} to="/signIn">
              <MDBIcon fas icon="sign-out-alt" />
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;
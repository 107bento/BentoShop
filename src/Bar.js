import React, { Component } from "react";
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from "reactstrap";
import {
  LinkContainer,
} from "react-router-bootstrap";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <Navbar className="navbar-dark bg-dark" expand="md">
        <div className="container">
          <NavbarBrand href="/" className="mr-auto">BENTO Shop </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="ml-auto">
            <LinkContainer exact to="/"><NavItem><NavLink onClick={this.toggleNavbar} >Today</NavLink></NavItem></LinkContainer>
            <LinkContainer to="/orders"><NavItem><NavLink onClick={this.toggleNavbar} >Orders</NavLink></NavItem></LinkContainer>
            <LinkContainer to="/menu"><NavItem><NavLink onClick={this.toggleNavbar} >Menu</NavLink></NavItem></LinkContainer>
            <LinkContainer to="/profile"><NavItem><NavLink onClick={this.toggleNavbar} >Profile</NavLink></NavItem></LinkContainer>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
 
export default Bar;

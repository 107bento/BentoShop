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
            <LinkContainer exact to="/"><NavItem><NavLink>Today</NavLink></NavItem></LinkContainer>
            <LinkContainer to="/orders"><NavItem><NavLink>Orders</NavLink></NavItem></LinkContainer>
            <LinkContainer to="/profile"><NavItem><NavLink>Profile</NavLink></NavItem></LinkContainer>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
 
export default Bar;
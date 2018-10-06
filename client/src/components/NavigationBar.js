import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

class NavigationBar extends Component {
state = {
  isOpen: false,
};


  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="dark" expand="md">
          <NavLink to="/" className="navbar-brand text-light">
            Contact Management
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/add" className="nav-link text-light">
                    Add
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/update" className="nav-link text-light">
                    Update
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/delete" className="nav-link text-light">
                    Delete
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;

import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
        <Navbar color="dark" expand="md" className="text-light">
          <NavbarBrand>
            Contact Management
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  Add
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  Update
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
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

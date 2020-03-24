import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Seedly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Ask Community</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contents</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Events</NavLink>
            </NavItem>
          </Nav>
          <Button outline color="primary">Join</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
import React, { useState } from "react";
import Link from "next/link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" dark>
        <NavbarBrand href="/"><img className="img-fluid" src="/penny1.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/poems/">
                <a className="nav-link">Poems</a>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/sysRoot/">
                My GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link href="/categories"><a>All Categories</a></Link></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

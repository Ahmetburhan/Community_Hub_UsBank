import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/react-fontawesome";

import "./navbar.css";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav color="dark" tabs>
          <NavItem>
            <NavLink active>
              <Link to="/">Email</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/sms">Sms</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/push">Push Notification</Link>
            </NavLink>
          </NavItem>

          <Dropdown
            style={{ fontWeight: "bold", float: "right" }}
            nav
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle nav>
              <FontAwesomeIcon icon={faCoffee} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Create a New</DropdownItem>
              <DropdownItem divider />

              <DropdownItem>Push Notification</DropdownItem>
              <DropdownItem disabled>SMS</DropdownItem>
              <DropdownItem disabled>E-Mail</DropdownItem>
              <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        
      </div>
    );
  }
}

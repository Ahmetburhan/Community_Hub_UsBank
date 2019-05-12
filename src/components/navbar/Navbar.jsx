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
        <Nav tabs>
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
              <Link to="/">Push Notification</Link>
            </NavLink>
          </NavItem>

          {/* <Dropdown style={{"fontWeight":"bold"}}nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </Nav>
      </div>
    );
  }
}

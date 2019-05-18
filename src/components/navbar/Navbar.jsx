import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  NavbarBrand
} from "reactstrap";

import HubLogo from "../../assets/images/the_hub.png";
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
        <Nav color="dark" className="ulStyle" tabs>
          <NavbarBrand
            style={{
              textTransform: "uppercase",
              paddingLeft: "1rem",
              fontSize: "1rem"
            }}
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="121"
              viewBox="0 0 453.66 113.459"
            >
              <path
                d="M0 0l.075 88.081 74.602 25.378 74.603-25.378V0z"
                fill="#797c7d"
              />
              <path
                d="M74.56 85.309H51.752v-7.882h-.238c-4.419 6.217-10.745 9.436-20.18 9.436-11.104 0-21.254-6.805-21.254-21.016V23.338h23.643v32.476c0 7.167.836 12.181 7.764 12.181 4.057 0 9.43-2.033 9.43-11.942V23.338H74.56zM118.631 41.366c-.124-2.027-1.192-3.578-2.748-4.66-1.433-1.192-3.342-1.786-5.255-1.786-3.345 0-7.167.718-7.167 4.775 0 1.789 1.436 2.624 2.748 3.222 3.94 1.677 12.896 2.151 20.781 4.778 7.876 2.513 14.805 7.164 14.805 17.315 0 17.197-16.479 21.852-31.523 21.852-14.57 0-30.572-5.852-30.928-21.852h22.567c.118 2.151 1.077 3.94 2.866 5.496 1.194 1.071 3.463 1.789 6.331 1.789 3.104 0 7.997-1.195 7.997-4.775 0-3.586-2.027-4.657-13.013-6.57-18.03-3.101-25.315-8.833-25.315-19.465 0-15.638 16.838-19.701 29.254-19.701 13.378 0 29.495 3.704 30.09 19.583h-21.49z"
                fill="#fff"
              />
              <g fill="#797c7d">
                <path d="M157.685.05h23.643v30.09h.238c3.586-5.255 9.912-8.356 16.956-8.356 20.778 0 26.391 17.671 26.391 32.24 0 15.52-8.479 32.838-26.035 32.838-11.58 0-15.161-4.419-18.147-8.362h-.238v6.808h-22.808zm33.197 38.931c-8.479 0-10.389 7.997-10.389 15.285 0 7.405 1.91 15.402 10.389 15.402s10.389-7.997 10.389-15.402c0-7.288-1.91-15.285-10.389-15.285M290.831 71.459c0 4.657.241 9.915 2.871 13.852h-24.126c-.594-1.668-.95-4.181-.836-5.849h-.235c-5.022 5.729-12.301 7.4-19.945 7.4-11.942 0-21.849-5.731-21.849-18.748 0-19.58 22.923-18.865 34.985-21.134 3.225-.597 6.447-1.551 6.447-5.496 0-4.178-3.943-5.729-7.759-5.729-7.288 0-8.718 3.698-8.838 6.326h-21.975c.721-17.432 17.197-20.298 31.887-20.298 29.613 0 29.372 12.298 29.372 24.241v25.435zm-22.687-13.97c-2.866 1.433-6.088 2.268-9.309 2.983-5.255 1.197-8.006 2.507-8.006 6.688 0 2.866 3.107 5.731 7.405 5.731 5.375 0 9.551-3.225 9.909-9.674v-5.728zM299.304 23.336h22.808v7.882h.235c4.422-6.211 10.745-9.436 20.177-9.436 11.107 0 21.263 6.805 21.263 21.016v42.509h-23.649V52.832c0-7.167-.833-12.183-7.753-12.183-4.069 0-9.441 2.033-9.441 11.942v32.717h-23.64zM372.15.051h23.64V41.25l15.05-17.915h26.747l-22.09 23.405 25.556 38.569h-28.427l-12.655-22.446-4.181 4.534v17.912h-23.64zM451.554 76.87c.899.902 1.344 1.99 1.344 3.262 0 1.281-.445 2.378-1.344 3.285-.89.902-1.981 1.355-3.259 1.355s-2.366-.454-3.256-1.355c-.893-.907-1.332-2.004-1.332-3.285 0-1.272.439-2.36 1.335-3.262.902-.902 1.987-1.355 3.253-1.355 1.275 0 2.363.454 3.259 1.355m.534-.517c-1.048-1.037-2.309-1.559-3.793-1.559-1.473 0-2.725.523-3.77 1.559-1.045 1.048-1.565 2.306-1.565 3.779 0 1.487.517 2.754 1.551 3.799 1.039 1.051 2.306 1.574 3.785 1.574 1.484 0 2.745-.523 3.793-1.574 1.045-1.048 1.571-2.314 1.571-3.799-.002-1.476-.527-2.733-1.572-3.779m-2.998 3.532c-.218.083-.546.132-.985.132h-.93V77.89h.882c.571 0 .991.069 1.252.215.259.146.388.434.388.859-.001.453-.205.76-.607.921m-2.952 3.173h1.036v-2.32h.818c.543 0 .933.063 1.151.19.368.221.551.669.551 1.347v.471l.023.184c.006.029.012.049.014.069l.012.06h.973l-.037-.072a1.052 1.052 0 0 1-.052-.31 7.447 7.447 0 0 1-.014-.436v-.431c0-.296-.109-.6-.324-.913-.213-.307-.549-.5-1.011-.571.368-.06.652-.155.856-.284.385-.247.571-.637.571-1.16 0-.741-.298-1.238-.907-1.487-.339-.141-.873-.212-1.605-.212h-2.056v5.875z" />
              </g>
            </svg>
            <hr width="1" class="elements__Border-sc-10vz6ag-0 hfaVTK" />
            <img
              height="31px"
              class=""
              style={{ marginLeft: "5px" }}
              src={HubLogo}
            />
          </NavbarBrand>

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

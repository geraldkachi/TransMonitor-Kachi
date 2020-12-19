import React, { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  //   NavItem,
  //   NavLink,
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem,
  NavbarText,
  Form,
  Input,
} from "reactstrap";
import face from "../images/face.svg";
import bell from "../images/bell.svg";
import search from "../images/search.svg";
import { Link } from "react-router-dom";

const TransNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Fragment>
      <Navbar color="light" light expand="lg" className="bg-white shadow-sm">
        <NavbarBrand href="/" style={{ color: "#1875F0", fontSize: "24px", fontWeight: 900, paddingLeft:"35px" }} className="mr-5">
          TransMonitor
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
            <Form>
                <div className="position-relative">
                    <img src={search} alt="search" className="position-absolute d-none d-sm-block" style={{paddingTop:"14px", paddingLeft:'40px' , zIndex:1}}/>
                    <Input type="search" className="w-75 pl-3  ml-md-5 border-0" width="25%" name="search" id="search" placeholder="Search..."/>
                </div>
            </Form> 
          </Nav>
          {/* <NavLink href="/components/">Components</NavLink> */}

          <img src="" alt="" />

          <div className="mx-3">
            <NavbarText>
              <Link to='/TransForm' style={{textDecoration:'none', color:'#647787'}}> Support</Link>
            </NavbarText>
          </div>
          <div className="mx-3">
            <NavbarText>
               <Link to='/TransForm' style={{textDecoration:'none', color:'#647787'}}>FAQs</Link>
            </NavbarText>
          </div>
          <div className="mx-3">
            <img src={bell} alt="" />
          </div>

          <div className="d-flex float-right">
            <div className="mx-3">
              <div
                className="text-right"
                style={{ fontSize: "10px", color: "#647787" }}
              >
                Hello
              </div>
              <div
                className="text-right"
                style={{ fontSize: "14px", color: "#647787" }}
              >
                Oluwaleke Ojo
              </div>
            </div>
            <div className="">
              <img src={face} alt="" />
            </div>
          </div>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

// TransNavbar.propTypes = {
//     light: PropTypes.bool,
//     dark: PropTypes.bool,
//     fixed: PropTypes.string,
//     color: PropTypes.string,
//     role: PropTypes.string,
//     expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
//   }
//   NavbarBrand.propTypes = {
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
//   }

//   NavbarText.propTypes = {
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
//   }

export default TransNavbar;

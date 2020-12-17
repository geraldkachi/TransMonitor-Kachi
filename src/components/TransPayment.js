import React, { useState } from 'react'
import {Row, Col, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import img from "../images/search.svg"
import vShape from "../images/vShape.svg"



const TransPayment = () => {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <>
         <Col className="mx-0 px-2 my-2">   
                <h4 style={{fontWeight:"32px",fontSize:"36px", color:"#262626", }} className="display-4">Payments</h4>
        </Col>
        <Row className="mx-0 my-3 my-2">
            <Col className="mx-0 px-2 my-2">
                <div className="d-flex justify-content-between">
                    <div className="mr-md-5 position-relative">
                        showing <span style={{color:"#1875F0"}}>20  </span>  
                        <span> <img src={vShape} className="position-absolute px-3"  style={{color:"blue", zIndex:1}} alt=""/></span>
                        {""} {" "}   out of 500 payments
                    </div>
                    <div className="mr-md-5">
                    </div>
                </div>
            </Col>
           
            <Col sm="2" className="mx-0 px-0 my-2">
                <div className="mr-5">
                    <img src={img} style={{paddingTop:"15px"}} className="position-absolute" alt=""/>
                    <Input style={{ backgroundColor:"#f7f8fa"}} type="text" className="w-100 border-left-0 border-right-0 border-top-0 border-bottom-1 pl-4" placeholder="Search Payments" />
                </div>
            </Col>
            <Col sm="2" className="mx-0 px-0 my-2">
               <span>Show      {""}</span>
            <ButtonDropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
                <Input type="text" className="mx-auto" placeholder="All" caret onClick={toggle} style={{borderColor:"none",boxShadow:'none'}}  />
                <DropdownToggle className="bg-white border-left-0 border" style={{borderColor:"none", boxShadow:'none'}} caret color="" />
                <DropdownMenu>
                    <DropdownItem header>All</DropdownItem>
                    <DropdownItem disabled>Reconcilled</DropdownItem>
                    <DropdownItem>Un-reconcilled</DropdownItem>
                    {/* <DropdownItem divider /> */}
                    <DropdownItem>Settled</DropdownItem>
                    <DropdownItem>Unsettled</DropdownItem>
                </DropdownMenu>
                </ButtonDropdown>
            </Col>
        </Row>
        </>
    )
}

export default TransPayment

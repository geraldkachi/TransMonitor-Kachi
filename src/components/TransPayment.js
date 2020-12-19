import React, { useState } from 'react'
import {  Row, Col, Input } from "reactstrap"
import img from "../images/search.svg"
import vShape from "../images/vShape.svg"
import "../App.css"


const TransPayment = () => {

    const [dropdownOpen, setOpen] = useState(false)
    const [backdrop, setBackdrop] = useState(true);

    const toggle = () => setOpen(!dropdownOpen)
    const changeBackdrop = e => {
        let value = e.target.value;
        if (value !== 'static') {
          value = JSON.parse(value);
        }
        setBackdrop(value);
      }

    return (
        <>
         <Col  className="mx-0 px-2 my-2">
            <h4 style={{fontWeight:"32px",fontSize:"36px", color:"#262626"}} className="display-4">Payments</h4>
        </Col>
        <Row className="mx-0 my-3">
            <Col className="mx-0 px-2 my-2">
                <div className="d-flex justify-content-between">
                    <div className="mr-md-5 position-relative">
                        <div style={{fontSize:"13px"}}>showing <span className="mx-2" style={{color:"#1875F0"}}>20</span>
                        <span> <img src={vShape} className="position-absolute px-3"  style={{color:"blue",zIndex:1}} alt=""/>
                        {""} {" "}   out of 500 payments
                        </span>
                        </div>
                    </div>
                    <div className="mr-md-5">
                        {""}
                    </div>
                </div>
            </Col>
           
            <Col sm="" className="mx-0 px-2 my-2">
                <div className="">
                    <img src={img} style={{paddingTop:"15px"}} className="position-absolute" alt=""/>
                    <Input style={{ backgroundColor:"#f7f8fa"}} type="text" className="border-left-0 border-right-0 border-top-0 border-bottom-1 rounded-0 pl-4" placeholder="Search Payments" />
                </div>
            </Col>
            <Col sm="" className="mx-0 px-2 my-2">
               <div className="d-flex ml-md-5">
               <span className="pt-2">Show  &nbsp;</span>
               {" "}
                    <span>
                        <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop} className="inline-block" placeholder="All" caret onClick={toggle} style={{borderColor:"none",boxShadow:'none'}}>
                        <option className="" value="true">All</option>
                        <option className="" value="false">Reconcilled</option>
                        <option className="" value="false">Un-reconcille</option>
                        <option className="" value="static">Settled</option>
                        <option className="" value="static">Unsettled</option>
                    </Input>
                    </span>
               </div>
            </Col>
        </Row>
        </>
    )
}

export default TransPayment
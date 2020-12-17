import React from "react";
import { Col, Row } from "reactstrap";
import vw from "../images/vw.svg";
import tri from "../images/vShape.svg";
import Ellipse from "../images/Ellipse.svg";

const TransTableBody = () => {
  return (
    <>
      <Row className="mx-0 px-3 py-3 bg-white">
        <Col md="4" className="mx-0 px-0 py-2">
          <img src={vw} alt="" />
          <span className="pl-4">Apple Mac Book 15” 250 SSD 12GB</span>
        </Col>
        <Col md="2" className="mx-0 px-0 py-2">
          <p>$73430</p>
        </Col>
        <Col md="2" className="mx-0 px-0 py-2">
          <p>1234567890</p>
        </Col>
        <Col md="1" className="mx-0 px-0 py-2">
          <p>12:30</p>
        </Col>
        <Col md="2" className="mx-0 px-0 py-2">
          <div className="border border-1 rounded-pill py-2 pl-3 ">
            <img src={Ellipse} alt=""/>
            <span style={{color:'#27AE60', paddingLeft:"10px"}}>Reconcilled</span>
          </div>
        </Col>
        <Col md="1" className="mx-0 px-0 py-2">
          <img src={tri} alt=""/>
        </Col>
      </Row>
    </>
  );
};

export default TransTableBody;

import React from "react";
import { Col, Row } from "reactstrap";
import vw from "../images/vw.svg";
import tri from "../images/Object.svg";
import greyBall from "../images/greyBall.svg";

const TransGreyTable = () => {
  return (
    <>
      <Row className="mx-0 py-3 px-3 align-content-center bg-white px-1 border-top border-bottom">
        <Col md="4" className="py-1 mx-0 px-0">
          <img src={vw} alt="" />
          <span className="pl-2" style={{fontSize:"14px", color:"#414042"}}>Apple Mac Book 15” 250 SSD 12GB</span>
        </Col>
        <Col md="2" className="py-1 mx-0 px-0 pt-2" >
          <div style={{fontSize:"14px", color:"#7F8FA4"}}>$73430</div>
        </Col>
        <Col md="2" className="py-1 mx-0 px-0 pt-2" >
          <div style={{fontSize:"14px", color:"#7F8FA4"}}>1234567890</div>
        </Col>
        <Col md="1" className="py-1 mx-0 px-0 pt-2" >
          <div style={{fontSize:"14px", color:"#7F8FA4"}} className="mr-3">12:30</div>
        </Col>
          <div className="justify-content-between d-flex">
          <Col md="2" className="py-1 mx-0 px-0" >
            <div className=" dotborder rounded-pill p-2 mr-5">
              <img src={greyBall} alt="" />
              <span  style={{ color: "#7F8FA4", paddingLeft: "10px", fontSize:"12px" }}>
                Reconcilled
              </span>
            </div>
          </Col>
          <div md="1" className="py-1 mx-0 px-0 tableborder ">
            <img src={tri} alt="" className="float-right" />
          </div>
          </div>
      </Row>
    </>
  );
};

export default TransGreyTable;

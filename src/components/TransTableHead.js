import React from "react";
import { Col, Row } from "reactstrap";

const TransTableHead = () => {
  return (
    <>
      <Row className="mx-0 px-2 py-1" style={{ backgroundColor: "#eaeef0" }}>
        <Col md="4" className="mx-0 py-2 px-1">
          <div style={{color:"#7F8FA4", fontSize:'14px'}}>Item Type</div>
        </Col>
        <Col md="2" className="mx-0 py-2 px-1">
          <div style={{color:"#7F8FA4", fontSize:'14px'}}>Price</div>
        </Col>
        <Col md="2" className="mx-0 py-2 px-1">
          <div style={{color:"#7F8FA4", fontSize:'14px'}}>Transaction No</div>
        </Col>
        <Col md="1" className="mx-0 py-2 px-1">
          <div style={{color:"#7F8FA4", fontSize:'14px'}}>Time</div>
        </Col>
        <Col md="3" className="mx-0 py-2 px-1">
          <div style={{color:"#7F8FA4", fontSize:'14px'}}>Status</div>
        </Col>
      </Row>
    </>
  );
};

export default TransTableHead;

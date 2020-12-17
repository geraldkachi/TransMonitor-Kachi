import React from 'react'
import {
    Card, 
    // CardImg, 
    // CardTitle, 
    // CardBody,
    CardText,
    CardSubtitle, Col,Row
  } from 'reactstrap';
  import img1 from "../images/smallchart.svg"

const TransCard = () => {
    return (
        <Row className="mx-0">
        <Col sm="3" className="mx-0 px-2">
            <Card className="border-0 my-2 mx-0">
                <div className="d-flex justify-content-between" style={{padding:"20px"}}>
                    <div>
                        <CardSubtitle className="text-muted" style={{fontSize:"12px"}}>Daily Transaction Volume</CardSubtitle>
                        <CardText>2,342</CardText>
                    </div>
                    <div><img src={img1} alt=""/></div>
                </div>
            </Card>
        </Col>
        <Col sm="3" className="mx-0 px-2">
            <Card className="border-0 my-2 mx-0">
                <div className="d-flex justify-content-between" style={{padding:"20px"}}>
                    <div>
                        <CardSubtitle className="text-muted" style={{fontSize:"12px"}}>Daily Transaction Volume</CardSubtitle>
                        <CardText>₦4,000,000</CardText>
                    </div>
                    <div><img src={img1} alt=""/></div>
                </div>
            </Card>
        </Col>
        <Col sm="3" className="mx-0 px-2">
            <Card className="border-0 my-2 mx-0">
                <div className="d-flex justify-content-between" style={{padding:"20px"}}>
                    <div>
                        <CardSubtitle className="text-muted" style={{fontSize:"12px"}}>Daily Transaction Volume</CardSubtitle>
                        <CardText>452,000</CardText>
                    </div>
                    <div><img src={img1} alt=""/></div>
                </div>
            </Card>
        </Col>
        <Col sm="3" className="mx-0 px-2">
            <Card className="border-0 my-2 mx-0">
                <div className="d-flex justify-content-between" style={{padding:"20px"}}>
                    <div>
                        <CardSubtitle className="text-muted" style={{fontSize:"12px"}}>Daily Transaction Volume</CardSubtitle>
                        <CardText>₦4,000,000</CardText>
                    </div>
                    <div><img src={img1} alt=""/></div>
                </div>
            </Card>
        </Col>
      </Row>
    )
}

export default TransCard

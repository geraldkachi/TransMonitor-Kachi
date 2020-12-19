import React from 'react'
import {
    Card, 
    Col,Row,
    Input
  } from 'reactstrap';
  import img1 from "../images/grapgh.svg"
  import LeftButton from "../images/LeftButton.svg"
  import RightButton from "../images/RightButton.svg"
  import vShape from "../images/vShape.svg"
  import '../App.css'

  

const TransGraph = () => {
    // 8WcWCnnng   )C1016y0
    return (
        <Row className="mx-0">
            <Col sm="8" className="px-0">
                <div className="my-1 mx-1 bg-white">
                    <div className="">
                        <div className="d-flex justify-content-around">
                            <div className="my-3" style={{fontWeight:"bolder"}}>Today: 5, Aug 2018</div>
                            <div className="d-flex justify-content-between">

                                <span className="my-3 position-relative">
                                     <img src={vShape} style={{paddingTop:"18px", paddingLeft:"145px"}} className="position-absolute shape" alt=""/>   
                                    <Input type="search" className="ml-md-5" placeholder=" 1 Jan - 1 Jun " style={{width:"110px"}} />
                                </span>

                                <div className="my-3">
                                    <span className="mx-2">
                                        <img src={LeftButton} alt=""/>
                                        {" "}
                                        {" "}
                                        <img src={RightButton} alt=""/>
                                    </span>
                                    <span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around" style={{fontSize:"14px", fontWeight:"bold"}}>
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                    </div>
                    <div>
                        <img src={img1} alt="" className="w-100" />
                    </div>
                </div>
            </Col>
            <Col sm="4" className="px-0">
                <Card className="border-0 my-1 p-0">
                    <div style={{padding:"20px"}}>
                        <div style={{fontFamily: "Segoe UI",fontSize: "14px", fontWeight: "bold"}}>Order</div>
                    <div className="progress mr-3 my-1" style={{height:"4px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>      
                        <div className="py-1" style={{color:"#262626",fontFamily: "Segoe UI",fontSize: "14px"}}>Pending Orders: <span className="text-warning">20</span></div>
                        <div className="py-1" style={{color:"#262626",fontFamily: "Segoe UI",fontSize: "14px"}}>Reconcilled Orders: <span className="text-warning">80</span></div>
                        <div className="py-1" style={{color:"#262626",fontFamily: "Segoe UI",fontSize: "14px"}}>Total Orders: <span className="text-primary">100</span></div>
                    </div>
                </Card>
                <Card className="border-0">
                    <div style={{padding:"20px"}}>
                    <div style={{fontFamily: "Segoe UI",fontSize: "14px", fontWeight: "bold"}}>Payments</div>
                    <div className="progress mr-3 my-1" style={{height:"4px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    <div>
                        <div className="py-1" style={{color:"#262626",fontFamily: "Segoe UI",fontSize: "14px"}}>Un-reconcilled Payments: <span className="text-warning"> 20</span></div>
                        <div className="py-1" style={{color:"#262626",fontFamily: "Segoe UI",fontSize: "14px"}}>Reconcilled Payments: <span className="text-warning"> 80</span></div>
                        <div className="py-1" style={{color:"#262626",fontFamily: "Segoe UI",fontSize: "14px"}}>Total Payments: <span className="text-primary"> 100</span></div>
                    </div>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default TransGraph

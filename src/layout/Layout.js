import React, { Fragment } from "react";
import { Row, Col, } from "reactstrap";
import TransCard from "../components/TransCard";
import TransGraph from "../components/TransGraph";
import TransNavbar from "../components/TransNavbar";
import TransPayment from "../components/TransPayment";
import TransSidebar from "../components/TransSidebar";
import TransTable from "../components/TransTable";
import TransPagination from '../components/TransPagination'
import '../App.css'



const Layout = () => {
  return (
    <Fragment>
          <TransNavbar />
          <Row className="mx-0 lost justify-content-center" style={{ backgroundColor: "#f7f8fa" }}>
                <Col className="mx-0 px-0 side bg-white d-none d-md-block" md="2" style={{ backgroundColor: "" }}>
                  <TransSidebar className="position-fixed" />
                </Col>
                <Col className="mx-0 px-1" md="10" style={{ backgroundColor: "#f7f8fa" }}>
                  <TransCard />
                  <TransGraph />
                  <TransPayment />  
                  <TransTable />
                  <TransPagination />
                </Col>
          </Row>
    </Fragment>
  )
};

export default Layout;

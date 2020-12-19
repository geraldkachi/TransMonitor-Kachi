import React, { Fragment } from "react";
// import { Row, Col, } from "reactstrap";
import TransCard from "../components/TransCard";
import TransGraph from "../components/TransGraph";
import TransNavbar from "../components/TransNavbar";
import TransPayment from "../components/TransPayment";
import TransSidebar from "../components/TransSidebar";
import TransTable from "../components/TransTable";
import TransPagination from "../components/TransPagination";
import "../App.css";

const Layout = () => {
  return (
    <Fragment>
      <TransNavbar />
      <div className="d-flex  mx-0 lost" style={{ backgroundColor: "#f7f8fa" }}>
        <div className="mx-0 bg-white px-0 lost side d-none  d-md-block sidebar flex-end">
          <TransSidebar className="position-fixed" />
        </div>
        <div
          className="mx-0 px-2 flex-fill" style={{ backgroundColor: "#f7f8fa" }}>
          <TransCard />
          <TransGraph />
          <TransPayment />
          <TransTable />
          <TransPagination />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;

import React from "react";
import MetaTags from "react-meta-tags";
import ReactApexChart from "react-apexcharts";
//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import { WidgetsData } from "../../common/data/dashboard";
import GkTables from "../Tables/GkTables";
import Timeproduction from "../Tables/TimeproductionTables";

import { Card, CardBody, Col, Container, Row } from "reactstrap";
// import CountUp from "react-countup";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs breadcrumbItem="Главная" />
          <Row>
            {/* {(WidgetsData || []).map((widget, key) => (
              <Col xl={3} md={6} key={key}>
                <Card className="card-h-100">
                  <CardBody>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <span className="text-muted mb-3 lh-1 d-block text-truncate">
                          {widget.title}
                        </span>
                        <h4 className="mb-3">
                          {widget.isDoller === true ? "$" : ""}
                          <span className="counter-value">
                            <CountUp
                              start={0}
                              end={widget.price}
                              duration={12}
                            />
                            {widget.postFix}
                          </span>
                        </h4>
                      </Col>
                      <Col xs={6}></Col>
                    </Row>
                    <div className="text-nowrap">
                      <span
                        className={
                          "badge badge-soft-" +
                          widget.statusColor +
                          " text-" +
                          widget.statusColor
                        }
                      >
                        {widget.rank}
                      </span>
                      <span className="ms-1 text-muted font-size-13">
                        Since last week
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))} */}
          </Row>
          <Row>
            <Col className="col-12">
              <GkTables />
              {/* <Timeproduction/> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

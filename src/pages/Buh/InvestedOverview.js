import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardBody, Row } from "reactstrap";
import ApexRadial from './ApexRadial';
 
 
 
const InvestedOverview = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card className="card-h-100">
                    <CardBody>
                        <div className="d-flex flex-wrap align-items-center mb-4">
                            <h5 className="card-title me-2">ТЦСО Коломенское</h5>
                            <div className="ms-auto">
                                <select className="form-select form-select-sm">
                                    <option defaultValue="MAY">May</option>
                                    <option value="AP">April</option>
                                    <option value="MA">March</option>
                                    <option value="FE">February</option>
                                    <option value="JA">January</option>
                                    <option value="DE">December</option>
                                </select>
                            </div>
                        </div>

                        <Row className="align-items-center">
                            <div className="col-sm">
                                <div id="invested-overview" className="apex-charts">
                                    <ApexRadial />
                                </div>
                            </div>
                            <div className="col-sm align-self-center">
                                <div className="mt-4 mt-sm-0">
                                    <p className="mb-1">Поступление д/с за период, в том числе по контрагенту </p>
                                    <h4>49950 руб</h4>

                                    <p className="text-muted mb-4"> + 0.0012.23 ( 0.2 % ) <i className="mdi mdi-arrow-up ms-1 text-success"></i></p>
                                    <p className="mb-1">Расход д/с за период, в том числе по контрагенту </p>
                                    <h4>55764 руб</h4>

                                    <p className="text-muted mb-4"> + 0.0012.23 ( 0.2 % ) <i className="mdi mdi-arrow-up ms-1 text-success"></i></p>

                                  

                                    {/* <div className="mt-2">
                                        <Link to="/email-inbox" className="btn btn-primary btn-sm">View more <i className="mdi mdi-arrow-right ms-1"></i></Link>
                                    </div> */}
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default InvestedOverview;
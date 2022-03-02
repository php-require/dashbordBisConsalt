import React, { useState, useEffect } from "react"
import { Row, Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap"
import MetaTags from 'react-meta-tags'

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//i18n
import { withTranslation } from "react-i18next";
import InvestedOverview from '../Buh/InvestedOverview';
import axios from "axios"
import { del, get, post, put } from "../../components/helpers/api_helper"
import * as url from "../../components/helpers/url_helper"
import {EMPLOYEES_BUH} from '../../helpers/api-1c/api_url'
import Salary from '../Bis/salary'
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

 
const DatatableTables = (props) => {
  const [funds, setFunds] = useState(
    [
      {
      LinkKontragent: "b3e61c08-8050-11e8-94c8-c86000da8ad0",
      DescriptionKontragent: "ТЦСО Коломенское",
      Funds: 49950
      }
      ]
  )
  const[state, setState ] = useState(  {
    allUsers: [
      {
      Link: "dc840db1-8265-11e2-826b-001d604afb60",
      Description: "Иванов Иван Иванович 1"
      },
      {
      Link: "99ac1156-3f87-11e2-8207-001d604afb60",
      Description: "Иванов Иван Иванович 2"
      },
      {
      Link: "f6dfc575-2a86-11e7-87d2-001d604afb60",
      Description: "Иванов Иван Иванович 3"
      },
      {
      Link: "e4c24243-b323-11e3-b3ce-001d604afb60",
      Description: "Иванов Иван Иванович 4"
      },
      {
      Link: "033f8ba6-8628-11e2-8270-001d604afb60",
      Description: "Иванов Иван Иванович 5"
      },
      {
      Link: "8f7e651f-5bcb-11eb-bc00-a6adf2cce348",
      Description: "Иванов Иван Иванович 6"
      },
      {
      Link: "cc3c38c6-247e-11e9-b458-c86000da8ad0",
      Description: "Иванов Иван Иванович 7"
      },
      {
      Link: "cef099d4-4748-11ea-aa04-a6adf2cce348",
      Description: "Иванов Иван Иванович 8"
      },
      {
      Link: "fce56857-8759-11e4-b487-001d604afb60",
      Description: "Иванов Иван Иванович 9"
      },
      {
      Link: "f7b88bf7-5d3d-11ea-bcdd-a6adf2cce348",
      Description: "Иванов Иван Иванович 10"
      },
      {
      Link: "0089ee79-5bdf-11eb-bc00-a6adf2cce348",
      Description: "Иванов Иван Иванович 11"
      },
      {
      Link: "542feebc-5dca-11e8-9aec-c86000da8ad0",
      Description: "Иванов Иван Иванович 12"
      },
      {
      Link: "fb90bab3-de76-11e8-b107-c86000da8ad0",
      Description: "Иванов Иван Иванович 13"
      },
      {
      Link: "6140d2ec-4eb5-11e4-b450-001d604afb60",
      Description: "Иванов Иван Иванович 14"
      },
      {
      Link: "61305090-4690-11eb-9132-a6adf2cce348",
      Description: "Иванов Иван Иванович 15"
      },
      {
      Link: "033f8bbd-8628-11e2-8270-001d604afb60",
      Description: "Иванов Иван Иванович 16"
      },
      {
      Link: "d336fb4b-b5ae-11e4-b4ad-001d604afb60",
      Description: "Иванов Иван Иванович 17"
      },
      {
      Link: "3cd058f6-c0bf-11e4-b4b7-001d604afb60",
      Description: "Иванов Иван Иванович 18"
      },
      {
      Link: "c1746d61-8f2f-11e4-b48d-001d604afb60",
      Description: "Иванов Иван Иванович 19"
      },
      {
      Link: "04d608bf-ab87-11e4-b4a4-001d604afb60",
      Description: "Иванов Иван Иванович 20"
      },
      {
      Link: "11c77063-2494-11e9-b458-c86000da8ad0",
      Description: "Иванов Иван Иванович 21"
      },
      {
      Link: "dc840db7-8265-11e2-826b-001d604afb60",
      Description: "Иванов Иван Иванович 22"
      },
      {
      Link: "b4883f5c-3876-11eb-9132-a6adf2cce348",
      Description: "Иванов Иван Иванович 23"
      },
      {
      Link: "e73613ab-21df-11e8-8d5d-001d604afb60",
      Description: "Иванов Иван Иванович 24"
      },
      {
      Link: "621a7463-de67-11e7-8dbe-001d604afb60",
      Description: "Иванов Иван Иванович 25"
      },
      {
      Link: "3cdc282d-6541-11e2-8240-001d604afb60",
      Description: "Иванов Иван Иванович 26"
      },
      {
      Link: "b867e0b8-5b4e-11e4-b45c-001d604afb60",
      Description: "Иванов Иван Иванович 27"
      },
      {
      Link: "3405c821-5bea-11eb-bc00-a6adf2cce348",
      Description: "Иванов Иван Иванович 28"
      },
      {
      Link: "449ca160-df3a-11e7-8772-e069958955e0",
      Description: "Иванов Иван Иванович 29"
      },
      {
      Link: "6aec5144-d35a-11e7-af27-001d604afb60",
      Description: "Иванов Иван Иванович 30"
      },
      {
      Link: "dc840dba-8265-11e2-826b-001d604afb60",
      Description: "Иванов Иван Иванович 31"
      },
      {
      Link: "d78b205b-5cf8-11e8-9aec-c86000da8ad0",
      Description: "Иванов Иван Иванович 32"
      },
      {
      Link: "13f216c9-e182-11e7-bbd4-001d604afb60",
      Description: "Иванов Иван Иванович 33"
      },
      {
      Link: "dc840dbd-8265-11e2-826b-001d604afb60",
      Description: "Иванов Иван Иванович 34"
      },
      {
      Link: "0dcd68b9-5e43-11e2-8232-001d604afb60",
      Description: "Иванов Иван Иванович 35"
      },
      {
      Link: "6aec5141-d35a-11e7-af27-001d604afb60",
      Description: "Иванов Иван Иванович 36"
      },
      {
      Link: "449ca15e-df3a-11e7-8772-e069958955e0",
      Description: "Иванов Иван Иванович 37"
      },
      {
      Link: "d36915a1-1a2b-11e9-b107-c86000da8ad0",
      Description: "Иванов Иван Иванович 38"
      },
      {
      Link: "3c78d9e0-6484-11e2-823f-001d604afb60",
      Description: "Иванов Иван Иванович 39"
      },
      {
      Link: "86ba8778-1a65-11ea-96c5-c86000da8ad0",
      Description: "Иванов Иван Иванович 40"
      },
      {
      Link: "e4f3df28-6312-11ec-bf01-92a1b6b7c052",
      Description: "Иванов Иван Иванович 41"
      },
      {
      Link: "74cbed3e-e948-11e6-b05a-001d604afb60",
      Description: "Иванов Иван Иванович 42"
      },
      {
      Link: "4d200332-ed05-11ea-a843-a6adf2cce348",
      Description: "Иванов Иван Иванович 43"
      },
      {
      Link: "4e569732-b1ab-11e8-b204-c86000da8ad0",
      Description: "Иванов Иван Иванович 44"
      },
      {
      Link: "449ca162-df3a-11e7-8772-e069958955e0",
      Description: "Иванов Иван Иванович 45"
      },
      {
      Link: "13f216cc-e182-11e7-bbd4-001d604afb60",
      Description: "Иванов Иван Иванович 46"
      },
      {
      Link: "d860571b-1a4f-11e9-b107-c86000da8ad0",
      Description: "Иванов Иван Иванович 47"
      },
      {
      Link: "5d72e83f-646c-11eb-beef-be03d93bf243",
      Description: "Иванов Иван Иванович 48"
      },
      {
      Link: "d46f4775-4502-11eb-9132-a6adf2cce348",
      Description: "Иванов Иван Иванович 49"
      },
      {
      Link: "6cf35f20-de8f-11e8-b107-c86000da8ad0",
      Description: "Иванов Иван Иванович 50"
      },
      {
      Link: "e5e0fe22-5c74-11ea-bcdd-a6adf2cce348",
      Description: "Иванов Иван Иванович 51"
      },
      {
      Link: "e8e48b17-6618-11eb-beef-be03d93bf243",
      Description: "Иванов Иван Иванович 52"
      },
      {
      Link: "3692e60d-6f86-11eb-bef0-be03d93bf243",
      Description: "Иванов Иван Иванович 53"
      },
      {
      Link: "74297880-2a45-11eb-9132-a6adf2cce348",
      Description: "Иванов Иван Иванович 54"
      },
      {
      Link: "5bd2fb6f-a99b-11eb-bef4-be03d93bf243",
      Description: "Иванов Иван Иванович 55"
      },
      {
      Link: "f3f593db-69e9-11eb-beef-be03d93bf243",
      Description: "Иванов Иван Иванович 56"
      },
      {
      Link: "25910d41-c863-11eb-bef6-be03d93bf243",
      Description: "Иванов Иван Иванович 57"
      },
      {
      Link: "1ac81966-6480-11eb-beef-be03d93bf243",
      Description: "Иванов Иван Иванович 58"
      },
      {
      Link: "4730ad34-eb85-11ea-a843-a6adf2cce348",
      Description: "Иванов Иван Иванович 59"
      },
      {
      Link: "2a9efe83-d806-11eb-bef6-be03d93bf243",
      Description: "Иванов Иван Иванович 60"
      },
      {
      Link: "4f372d67-d997-11eb-bef6-92a1b6b7c052",
      Description: "Иванов Иван Иванович 61"
      },
      {
      Link: "870bb200-d9ab-11eb-bef6-92a1b6b7c052",
      Description: "Иванов Иван Иванович 62"
      },
      {
      Link: "08cda18b-de5d-11eb-bef6-92a1b6b7c052",
      Description: "Иванов Иван Иванович 63"
      },
      {
      Link: "a335115f-6174-11eb-bc00-a6adf2cce348",
      Description: "Иванов Иван Иванович 64"
      },
      {
      Link: "b238ad5d-e611-11eb-bef6-92a1b6b7c052",
      Description: "Иванов Иван Иванович 65"
      },
      {
      Link: "7f37f4ec-6176-11ec-bf01-92a1b6b7c052",
      Description: "Иванов Иван Иванович 66"
      },
      {
      Link: "f570e903-630c-11ec-bf01-92a1b6b7c052",
      Description: "Иванов Иван Иванович 67"
      },
      {
      Link: "f5f8570b-dd6e-11eb-bef6-92a1b6b7c052",
      Description: "Иванов Иван Иванович 68"
      },
      {
      Link: "7a01f3a7-e570-11e7-b414-001d604afb60",
      Description: "Иванов Иван Иванович 69"
      },
      {
      Link: "33c7dff2-ed07-11ea-a843-a6adf2cce348",
      Description: "Иванов Иван Иванович 70"
      },
      {
      Link: "981c60e9-24fa-11ec-befa-be03d93bf243",
      Description: "Иванов Иван Иванович 71"
      },
      {
      Link: "6872a6eb-2ff4-11ec-befa-be03d93bf243",
      Description: "Иванов Иван Иванович 72"
      },
      {
      Link: "d5d2eb6b-6496-11eb-beef-be03d93bf243",
      Description: "Иванов Иван Иванович 73"
      },
      {
      Link: "0b847315-4ea1-11ec-befe-be03d93bf243",
      Description: "Иванов Иван Иванович 74"
      },
      {
      Link: "4c30bddb-fe73-11eb-bef7-be03d93bf243",
      Description: "Иванов Иван Иванович 75"
      },
      {
      Link: "bc81e495-03f3-11ec-bef8-be03d93bf243",
      Description: "Иванов Иван Иванович 76"
      },
      {
      Link: "dab0722d-1b82-11ec-bef9-be03d93bf243",
      Description: "Иванов Иван Иванович 77"
      },
      {
      Link: "33b83537-72d9-11ec-bf07-be03d93bf243",
      Description: "Иванов Иван Иванович 78"
      },
      {
      Link: "551d6e4d-b6ef-11eb-bef5-be03d93bf243",
      Description: "Иванов Иван Иванович 79"
      },
      {
      Link: "59bcb8b8-fcb0-11ea-a843-a6adf2cce348",
      Description: "Иванов Иван Иванович 80"
      },
      {
      Link: "2d9668ec-38b2-11ec-befb-be03d93bf243",
      Description: "Иванов Иван Иванович 81"
      },
      {
      Link: "09d26c54-5596-11eb-bc00-a6adf2cce348",
      Description: "Иванов Иван Иванович 83"
      },
      {
      Link: "033f8b9f-8628-11e2-8270-001d604afb60",
      Description: "Иванов Иван Иванович 84"
      },
      {
      Link: "4020a771-d9a8-11eb-bef6-92a1b6b7c052",
      Description: "Иванов Иван Иванович 85"
      }
      ]
    
  }
  
     
    )
  const [loaded, setLoaded] = useState(false)

 

//   useEffect(() => {
//     if (loaded) return ;
//    const url = 'http://webservis:Qp34_er!@192.168.2.57:8090/buhzupcopy/hs/ExchangeSite/V1/employees'
//    get(url, {crossdomain: true }) 
//     .then(response => {
//       console.log(response )
//        setState({
//         products: response.data.data 
//       })
//     })
   
//     setLoaded(true)
// }, [loaded])
 

  const columns = [  {
    dataField: 'Description',
    text: 'Description',
    sort: true
  }];

 
 
 
  const defaultSorted = [{
    dataField: 'link',
    order: 'desk'
  }];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: state.allUsers.length, // replace later with size(customers),
    custom: true,
  }

  // Select All Button operation
  const selectRow = {
    mode: 'checkbox'
  }

  const { SearchBar } = Search;

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Data Tables | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Юр лица" breadcrumbItem="Бухинфосервис" />

          <Row>
          <Col className="col-12">
          <Card>
          <CardHeader>
                  <CardTitle className="h4">Поступление</CardTitle>
                    <p className="card-title-desc">
                    Поступление д/с за период, в том числе по контрагенту 
                    </p>
                </CardHeader>
                <CardBody>
                  <InvestedOverview />
                </CardBody>
          </Card> 
           
          </Col>
          
            <Col className="col-12">
              <Card>
                <CardHeader>
                  <CardTitle className="h4">{props.t("Employee selection")}</CardTitle>
                    <p className="card-title-desc">
                      Описание раздела..
                      
                    </p>
                </CardHeader>
                <CardBody>
                

                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField='link'
                    columns={ columns}
                    data={state.allUsers}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField='link'
                        columns={columns}
                        data={state.allUsers}
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>

                            <Row className="mb-2">
                              <Col md="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar
                                      {...toolkitProps.searchProps}
                                    />
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    keyField={"id"}
                                    responsive
                                    bordered={false}
                                    striped={false}
                                    defaultSorted={defaultSorted}
                                    selectRow={selectRow}
                                    classes={
                                      "table align-middle table-nowrap"
                                    }
                                    headerWrapperClasses={"thead-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                  />

                                </div>
                              </Col>
                            </Row>

                            <Row className="align-items-md-center mt-30">
                              <Col className="inner-custom-pagination d-flex">
                                <div className="d-inline">
                                  <SizePerPageDropdownStandalone
                                    {...paginationProps}
                                  />
                                </div>
                                <div className="text-md-right ms-auto">
                                  <PaginationListStandalone
                                    {...paginationProps}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </React.Fragment>
                        )
                        }
                      </ToolkitProvider>
                    )
                    }</PaginationProvider>

                </CardBody>
              </Card>
            </Col>
            <Salary/>
          </Row>
        </div>
      </div>
     
    </React.Fragment>
  )
}
export default withTranslation()(DatatableTables);
 

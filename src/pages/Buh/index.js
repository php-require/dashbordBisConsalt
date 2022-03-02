import React, { useState, useEffect } from "react"
import { Row, Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap"
import MetaTags from 'react-meta-tags'
import InvestedOverview from '../Buh/InvestedOverview';
// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//i18n
import { withTranslation } from "react-i18next";

import axios from "axios"
import { del, get, post, put } from "../../components/helpers/api_helper"
import * as url from "../../components/helpers/url_helper"
import {EMPLOYEES_BUH} from '../../helpers/api-1c/api_url'

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

// fake data https://reqres.in/api/users/2

//const buUser  =  post(EMPLOYEES_BUH )

 
const DatatableTables = (props) => {
  const[state, setState ] = useState(  {
    allUsers: [
      {
      Link: "ea984a80-3723-11e8-82a3-001d604afb60",
      Description: "453b9676f68f449e96271c3f38ffe525"
      },
      {
      Link: "8c0f0eff-20eb-11e7-9107-001d604afb60",
      Description: "b383cc6822f3478c9b3fdc70a2c53fcd"
      },
      {
      Link: "3c6c3b4e-1dad-11eb-9132-a6adf2cce348",
      Description: "2d02ce87ca534d44baa942347fafec59"
      },
      {
      Link: "52126e95-4a7c-11eb-9132-a6adf2cce348",
      Description: "cb56ac50454143bcadd406683e106124"
      },
      {
      Link: "42fa021f-4a8b-11eb-9132-a6adf2cce348",
      Description: "1423459332704fc29858fb90756633fc"
      },
      {
      Link: "87326ba8-4a95-11eb-9132-a6adf2cce348",
      Description: "dc33f354aa2d48d0892ad129b52584b4"
      },
      {
      Link: "c8c01293-4a99-11eb-9132-a6adf2cce348",
      Description: "7cec2a5546d548cf8254b0b606645b8f"
      },
      {
      Link: "b776fc44-c5b0-11ea-9430-a6adf2cce348",
      Description: "a1270356d3ae4b9995ff61b1d98b2cc0"
      },
      {
      Link: "ee43bcfe-dbb8-11ea-9430-a6adf2cce348",
      Description: "cb2397f364d542709534e9d2069551f9"
      },
      {
      Link: "689977ee-dbbe-11ea-9430-a6adf2cce348",
      Description: "3805b160622d466d8152209973ecc284"
      },
      {
      Link: "2d924320-e776-11ea-9430-a6adf2cce348",
      Description: "a13d4e917f7447a2acf210b2991df4cc"
      },
      {
      Link: "40c33448-6a37-11e8-94c8-c86000da8ad0",
      Description: "09ae9ec204ff4e52a902c30e974c4bd6"
      },
      {
      Link: "ffc8bfb8-6fb6-11e8-94c8-c86000da8ad0",
      Description: "e7c59a6b9ee44da8a5bb724b24bf2de9"
      },
      {
      Link: "3f6af10b-7463-11e8-94c8-c86000da8ad0",
      Description: "75ceeac78f2940cd88cdf3ab088d4620"
      },
      {
      Link: "11a57c48-8039-11e8-94c8-c86000da8ad0",
      Description: "023202e9f2be46c2bad875b88f75f999"
      },
      {
      Link: "9c87a3e3-abe7-11e6-9849-001d604afb60",
      Description: "4fef2909cdd74ad6a8c9f1328fce5c2e"
      },
      {
      Link: "a4f3489c-c2cb-11e6-9860-001d604afb60",
      Description: "8c49ca29a9c0485c9b966f759e6ab2f4"
      },
      {
      Link: "29dffb26-5779-11e8-9aec-c86000da8ad0",
      Description: "d9ca71eca01b48c281cdafce3d58df66"
      },
      {
      Link: "bea6d561-5828-11e8-9aec-c86000da8ad0",
      Description: "b84fa9d40a8e466dba74c0e2bd2601c8"
      },
      {
      Link: "de328f61-582c-11e8-9aec-c86000da8ad0",
      Description: "e7bf9d77dda54449a497182fdbb323fd"
      },
      {
      Link: "e4c87e4b-59db-11e8-9aec-c86000da8ad0",
      Description: "379bd74509ac4cb4838549080e490e99"
      },
      {
      Link: "51ba7bf3-5cd8-11e8-9aec-c86000da8ad0",
      Description: "c9f38c2109d14a73be9bdd997b03e031"
      },
      {
      Link: "587c8e33-63e1-11e8-9aec-c86000da8ad0",
      Description: "1dff0b3791054fc5aa9890eb5939cef1"
      },
      {
      Link: "2686c5cd-63f8-11e8-9aec-c86000da8ad0",
      Description: "35538b6436cd492cac1661ee21fb64c7"
      },
      {
      Link: "1253ccd7-dc33-11e8-9b46-c86000da8ad0",
      Description: "42274836b2ad448da9ca775a2689c3c9"
      },
      {
      Link: "a3387bdf-1171-11e8-9cc0-001d604afb60",
      Description: "ab4c97cd88a14576836b47d6043e91ce"
      },
      {
      Link: "22e28409-8c6a-11e6-9dbe-001d604afb60",
      Description: "f1a6f6a3e3ce41b4be50e1d524d95ec7"
      },
      {
      Link: "a9b1d7a0-1bb3-11e8-a1ab-001d604afb60",
      Description: "e53afa6e2a7b47eebcbf4593d20dc771"
      },
      {
      Link: "69f1981f-9f24-11ea-a349-a6adf2cce348",
      Description: "929c0bfd166d4a36af7d121a9234a89a"
      },
      {
      Link: "085da750-4821-11ea-aa04-a6adf2cce348",
      Description: "4908353821e44bee9798de9fb59bd286"
      },
      {
      Link: "073964e9-16e7-11e8-ad3c-001d604afb60",
      Description: "1960f1688e364276a24f9f9247af940e"
      },
      {
      Link: "31344785-4878-11e8-adc4-38d5477ce652",
      Description: "a5d7cad7994849b88277075f76eddfc2"
      },
      {
      Link: "ca54d7cf-4151-11e8-ae3d-38d5477ce652",
      Description: "7d17049c31e240a6ad91e22bc48b218d"
      },
      {
      Link: "ca54d7db-4151-11e8-ae3d-38d5477ce652",
      Description: "374b0fa6265140628387f7f210bbde75"
      },
      {
      Link: "cebe67e2-2e72-11e8-b028-001d604afb60",
      Description: "05511a1d47924addb4fb6da3a50c93c9"
      },
      {
      Link: "8af70f6a-e33f-11e8-b107-c86000da8ad0",
      Description: "536f831463a44253bb488ab98b640e7c"
      },
      {
      Link: "0e2d275b-fd24-11e8-b107-c86000da8ad0",
      Description: "434ee501785146cf92809817740596bb"
      },
      {
      Link: "4d3a51a2-e814-11e8-b107-c86000da8ad0",
      Description: "b588485e730340a89eb2730a9cb5a5ec"
      },
      {
      Link: "c0c631cc-f3de-11e8-b107-c86000da8ad0",
      Description: "e25336fe8cd34fa78689e45519bf3fe3"
      },
      {
      Link: "4ff02a79-14dc-11e9-b107-c86000da8ad0",
      Description: "c083ce1505594b67b77eb3eb3caac07c"
      },
      {
      Link: "072d9c66-17da-11e9-b107-c86000da8ad0",
      Description: "db5fc9fef74b497581f85902734e4c2e"
      },
      {
      Link: "046516d2-17dc-11e9-b107-c86000da8ad0",
      Description: "503ce71d0d8f4bd193e0cb707c5733e5"
      },
      {
      Link: "3bc5a786-a60c-11e8-b204-c86000da8ad0",
      Description: "8eaa380620e145bf98b7918f5dbcb2d9"
      },
      {
      Link: "42b6ed59-a9eb-11e8-b204-c86000da8ad0",
      Description: "e74a404791844f83bde2fcefdf696515"
      },
      {
      Link: "443d5687-b0ee-11e8-b204-c86000da8ad0",
      Description: "ea1f785516fe4fd38dfb9ffee115c998"
      },
      {
      Link: "3a21e62c-bfde-11e8-b204-c86000da8ad0",
      Description: "c1a5f27bf05144f380f1512a7d4ac8f6"
      },
      {
      Link: "93dee90f-c7dc-11e8-b204-c86000da8ad0",
      Description: "e0686e40cc11415cb6fbf23ad2755cd0"
      },
      {
      Link: "b403ca43-cba7-11e8-b204-c86000da8ad0",
      Description: "8322a63bd0524f3495483ed71d1080b8"
      },
      {
      Link: "35d63501-d12a-11e8-b204-c86000da8ad0",
      Description: "60a796b8dfda46129052eca8c9b8b228"
      },
      {
      Link: "d5da993c-d2ad-11e8-b204-c86000da8ad0",
      Description: "bdd26f32e4dd4f37a54e00320faf9da5"
      },
      {
      Link: "5cf8d6ff-46fb-11e9-b314-c86000da8ad0",
      Description: "f0ae8becca5d4d5daeffa58928a0e902"
      },
      {
      Link: "f8db56af-8e78-11e9-b314-c86000da8ad0",
      Description: "4c78529da0264d3e92e12e455141cdec"
      },
      {
      Link: "8daeebdf-bf48-11e9-b314-c86000da8ad0",
      Description: "43b5da630f7340aba3719d3c30aa59c0"
      },
      {
      Link: "aaf07e58-a770-11e7-b3a3-001d604afb60",
      Description: "797b69284ffc47a7b76e1e5b543ae53d"
      },
      {
      Link: "b24ed3b2-30da-11e8-b44b-001d604afb60",
      Description: "319b9c54533b4cc9bf57de03fbde54bd"
      },
      {
      Link: "0b780cbb-7f2b-11e6-b687-e06995896219",
      Description: "5b2dc354de9f47919dc41c0779df6119"
      },
      {
      Link: "0b780cbe-7f2b-11e6-b687-e06995896219",
      Description: "8121aeb0d69d4e3b949d91f823594a35"
      },
      {
      Link: "0b780cbf-7f2b-11e6-b687-e06995896219",
      Description: "fc01af49377d4a5ab18555b4b34501c8"
      },
      {
      Link: "0b780cc1-7f2b-11e6-b687-e06995896219",
      Description: "988476d80ca44b96ac304465319e81b0"
      },
      {
      Link: "0b780cc2-7f2b-11e6-b687-e06995896219",
      Description: "93738e6f13cd48149c791fcda7263ec0"
      },
      {
      Link: "1219436d-7f2b-11e6-b687-e06995896219",
      Description: "6fae2878a05746a9adbd98e20c9176c0"
      },
      {
      Link: "1219436f-7f2b-11e6-b687-e06995896219",
      Description: "322fd27e586541f6807a6c84a853be5c"
      },
      {
      Link: "12194370-7f2b-11e6-b687-e06995896219",
      Description: "afc39a4fd0b14c4c84d186be45ca4852"
      },
      {
      Link: "12194372-7f2b-11e6-b687-e06995896219",
      Description: "c7811a355c004cde86ca5ee0ec49f2af"
      },
      {
      Link: "12194373-7f2b-11e6-b687-e06995896219",
      Description: "938052dc0bd445c1895993908dfed36e"
      },
      {
      Link: "12194374-7f2b-11e6-b687-e06995896219",
      Description: "943390aae06c461aa0ea93b84f02e0ce"
      },
      {
      Link: "12194375-7f2b-11e6-b687-e06995896219",
      Description: "e9071b0ed42247679ad960410959271b"
      },
      {
      Link: "12194377-7f2b-11e6-b687-e06995896219",
      Description: "43fa7a102d214a35b139f14e123cd9f6"
      },
      {
      Link: "12194378-7f2b-11e6-b687-e06995896219",
      Description: "e926d42ef1214f2abc2207b73c6f063c"
      },
      {
      Link: "12194379-7f2b-11e6-b687-e06995896219",
      Description: "2cacb215cfa4428ca2b566f3333c83e2"
      },
      {
      Link: "1219437a-7f2b-11e6-b687-e06995896219",
      Description: "c32028e0016040e38e4b47547075ec78"
      },
      {
      Link: "1219437c-7f2b-11e6-b687-e06995896219",
      Description: "1a78067942784a2f897f89232cd195e6"
      },
      {
      Link: "1219437f-7f2b-11e6-b687-e06995896219",
      Description: "93b960f074ff473b8de2fcaf41cb4286"
      },
      {
      Link: "b578ee18-7f2b-11e6-b687-e06995896219",
      Description: "71ad7fc059e94cc59236265081b9020c"
      },
      {
      Link: "ea984a7a-3723-11e8-82a3-001d604afb60",
      Description: "60402c454d814762b4666485756247a4"
      },
      {
      Link: "2320612b-d587-11ea-9430-a6adf2cce348",
      Description: "27dd2000eca5427da6219e32aefcc953"
      },
      {
      Link: "c6eaecd1-7304-11e8-94c8-c86000da8ad0",
      Description: "d8230715d0fd4ddd9958fb7d9c850a6f"
      },
      {
      Link: "934bf943-893f-11ea-a348-a6adf2cce348",
      Description: "d0f53fe9a646451ca9a3d26a99aa2c52"
      },
      {
      Link: "855c077f-e667-11e8-b107-c86000da8ad0",
      Description: "d32a306eea854e758ff0608e067677b9"
      },
      {
      Link: "4ecdb75a-17d7-11e9-b107-c86000da8ad0",
      Description: "0ce256c4de2f4f3fb022639576f7f9c4"
      },
      {
      Link: "15a312fc-60f1-11e9-b314-c86000da8ad0",
      Description: "2666dac0ca6f456799e5d50bc1f7d525"
      },
      {
      Link: "1219437b-7f2b-11e6-b687-e06995896219",
      Description: "7df7ab98654f475697ee7eed328b921d"
      },
      {
      Link: "1219437e-7f2b-11e6-b687-e06995896219",
      Description: "9da562f88a4749009ed9b73185a20e26"
      },
      {
      Link: "12194381-7f2b-11e6-b687-e06995896219",
      Description: "2e21ae00bc4e4028957b4c62f850fad9"
      },
      {
      Link: "12194383-7f2b-11e6-b687-e06995896219",
      Description: "64674a7edfc440eba491df283aad9391"
      },
      {
      Link: "12194385-7f2b-11e6-b687-e06995896219",
      Description: "bb9cb3d62e644e03bce88b2845bb2363"
      },
      {
      Link: "12194386-7f2b-11e6-b687-e06995896219",
      Description: "eae5a1e7c7174ce6891cc18505e6d833"
      },
      {
      Link: "12194388-7f2b-11e6-b687-e06995896219",
      Description: "c8174de0630b4edc96173858b0ea80e8"
      },
      {
      Link: "12194389-7f2b-11e6-b687-e06995896219",
      Description: "46a4de5a13f746bb9a35588a926111d3"
      },
      {
      Link: "1219438b-7f2b-11e6-b687-e06995896219",
      Description: "e95165ab12ea48b3adc91390bdc54c9f"
      },
      {
      Link: "1219438c-7f2b-11e6-b687-e06995896219",
      Description: "5255c5119eac4e0da18f74237133e1b6"
      },
      {
      Link: "12194393-7f2b-11e6-b687-e06995896219",
      Description: "beb905ed1eaf4810a8627fe406fd2e5f"
      },
      {
      Link: "12194394-7f2b-11e6-b687-e06995896219",
      Description: "7989de2a772a45808c968104a4f9b4f5"
      },
      {
      Link: "12194395-7f2b-11e6-b687-e06995896219",
      Description: "2aac2233ddfe484ebedd2d8029e3f902"
      },
      {
      Link: "23818f91-7f2b-11e6-b687-e06995896219",
      Description: "c062acdafcab4a62b620a373b5369db9"
      },
      {
      Link: "23818f9d-7f2b-11e6-b687-e06995896219",
      Description: "a01b9cf70fcf4e3fa8862117aab4da3e"
      },
      {
      Link: "23818fa7-7f2b-11e6-b687-e06995896219",
      Description: "72d7286cbb2b42d7b78ca51b44833673"
      },
      {
      Link: "23818fa8-7f2b-11e6-b687-e06995896219",
      Description: "6e3ac03c7a1d482a9525b7d8ab24b1d7"
      },
      {
      Link: "2d4a7d73-7f2b-11e6-b687-e06995896219",
      Description: "58600a05ebd842a395cbe38cd540cb20"
      },
      {
      Link: "2d4a7d74-7f2b-11e6-b687-e06995896219",
      Description: "a237c226d2564877a13340ed1e55ca8f"
      },
      {
      Link: "2d4a7d85-7f2b-11e6-b687-e06995896219",
      Description: "d8b5cbbac79b4e1da916a8a78b3fe654"
      },
      {
      Link: "72f56265-7f2b-11e6-b687-e06995896219",
      Description: "5aaadb79b491437d9428cd45cec68269"
      },
      {
      Link: "69613b74-9934-11e7-ba42-001d604afb60",
      Description: "6e76be913ac046e4a07d9c7fbe88f252"
      },
      {
      Link: "f64c8763-5eed-11eb-bc00-a6adf2cce348",
      Description: "cb3ec117600f4e8f9c55cd6c4d55e6d6"
      },
      {
      Link: "97e73490-a19f-11ea-bd83-a6adf2cce348",
      Description: "f1b1f3ed9a1947daa981f63cf58ea0ed"
      },
      {
      Link: "e5a60d66-9b6d-11eb-bef4-be03d93bf243",
      Description: "1ca6e2e8a8914fe6bb171b218813b84e"
      },
      {
      Link: "336ed67a-46c6-11ec-befe-be03d93bf243",
      Description: "23bc30857164447fb35cf14c1f16cf90"
      },
      {
      Link: "40d7c714-50fa-11ec-befe-be03d93bf243",
      Description: "37d790ca6b1a4c618fc0bf7c9cf73585"
      },
      {
      Link: "dab95bde-5429-11ec-beff-be03d93bf243",
      Description: "34231159239b456b96f940771d3672bc"
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
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}
export default withTranslation()(DatatableTables);
 

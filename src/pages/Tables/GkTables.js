import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import { Row, Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import GkChoicesInput from "../Forms/GkChoicesInput";
// datatable related plugins
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

//i18n
import { withTranslation } from "react-i18next";

import "./datatables.scss";

const GkTables = (props) => {
  const csvRef = firebase.firestore().collection("csv");
  const [selectedOptions, setselectedOptions] = useState(null);
  const [refresh, setRefresh] = useState(true);
   // Table Data
  const [tempHeaderData, setTempHeaderData] = useState([]);
  const [columns, setColumns] = useState([
    {
      dataField: "1",
      text: "Загрузка",
      sort: true,
    },
  ]);
  const [bodyData, setbodyData] = useState( []);

  // select view option
  const optionMulti = tempHeaderData.map(function (elem) {
    return { label: elem.text, value: elem.text, id: elem.dataField };
  });

  function handleSelectOptions(selectedOptions) {
 
    // get new header from hendel selectedOptions
    let newHeader = selectedOptions.map((sel) => ({
      
      text: sel.label,
      dataField: sel.id,
      sort: true,
    }));
    if (selectedOptions.length !== 0) {
      setColumns(newHeader);
    } else {
      // if delete last option? return default header
      setColumns(tempHeaderData);
    }

    setselectedOptions(selectedOptions);
  }

  function clearString(string) {
    return string.replace(/[']+/g, '')
  }

  function convertDate(date) {
    let dateArray = date.split(".");
    let dateString = dateArray[1] + '.' + dateArray[0] + '.' + dateArray[2];
    return Date.parse(dateString);
  }

  useEffect(() => {
    if (refresh) {
      csvRef.get().then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          // id: doc.id, // add table id
          ...doc.data(),
        }));
      
    
        let header = [];
        let column = [];

        data[0][0].forEach((element, i) => {
          //console.log(element)
          header.push({
            dataField: String(i) ,
            text: element,
            sort: true,
            sortFunc: (a, b, order) => {
              console.log(i)
              let aDate = convertDate(a)
              let bDate = convertDate(b)
              if (order === "asc") {
                return aDate - bDate;
              } else if (order === "desc") {
                return bDate - aDate;
              }
            }
          });
        });
        
  
    
        setColumns(header);
        setTempHeaderData(header);
        // remove header
        delete data[0][0];
        delete data[1];

        


        for (let key in data) {
          let subObj = data[key];
        
          for (let subKey in subObj) {
        
            column[subKey] = Object.assign({ id: subKey }, {}, subObj[subKey]); // array to 0bj 
            //console.log(column[subKey] )
          }
        }
       
         column.splice(0, 1);
 
        setbodyData([...column]);
      });
      setRefresh(false);
    }
  }, [refresh]);

 

  const defaultSorted = [
    {
      dataField: "id",
      order: 'desc',
       
    },
  ];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: bodyData.length, // replace later with size(customers),
    custom: true,
  };

  // Select All Button operation
  const selectRow = {
    mode: "checkbox",
  };

  const { SearchBar } = Search;
 
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h4">ГК</CardTitle>
        <p className="card-title-desc">csv</p>
      </CardHeader>

      <CardBody>
        <PaginationProvider
          pagination={paginationFactory(pageOptions)}
          keyField="id"
          columns={columns}
          data={bodyData}
        >
          {({ paginationProps, paginationTableProps }) => (
            <ToolkitProvider
              keyField="id"
              columns={columns}
              data={bodyData}
              search
            >
              {(toolkitProps) => (
                <React.Fragment>
                  <Row className="mb-2">
                    <Col md="2">
                      <div className="search-box me-2 mb-2 d-inline-block">
                        <div className="position-relative">
                          <SearchBar
                            {...toolkitProps.searchProps}
                            placeholder="Поиск"
                          />
                          <i className="bx bx-search-alt search-icon" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <GkChoicesInput
                        optionMulti={optionMulti}
                        selectedOptions={selectedOptions}
                        handleSelectOptions={handleSelectOptions}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xl="12">
                      <div className="table-responsive">
                        <BootstrapTable
                          keyField={"id"}
                          responsive
                          bordered={false}
                          striped={true}
                          defaultSorted={defaultSorted}
                          selectRow={selectRow}
                          classes={"table align-middle table-nowrap"}
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
                        <SizePerPageDropdownStandalone {...paginationProps} />
                      </div>
                      <div className="text-md-right ms-auto">
                        <PaginationListStandalone {...paginationProps} />
                      </div>
                    </Col>
                  </Row>
                </React.Fragment>
              )}
            </ToolkitProvider>
          )}
        </PaginationProvider>
      </CardBody>
    </Card>
  );
};
export default withTranslation()(GkTables);

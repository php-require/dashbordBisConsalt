import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import Papa from 'papaparse'
import firebase from 'firebase/app'
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap"
import Dropzone from "react-dropzone"

// add Firestore
//import  addCsvToFirestore   from "../../helpers/firestore_helper"

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { Link } from "react-router-dom"

const FormUpload = () => {
  const [selectedFiles, setselectedFiles] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [show, setShow] = useState(false)

  const addCsvToFirestore = (file) => {
   
    const db = firebase.firestore();
   let csv = Papa.parse(file[0], {
      quotes: false, //or array of booleans
	     quoteChar: '"',
       escapeChar: "'",
      //header: false,
      complete: function(results) {
        const tStemp = new Date().getTime()
        const  res = {
          ...results.data,
        }   
    
        db.collection("csv").doc('gk').set(res).then(() => {
        console.log('Successfully set');
        setDisabled(false)
        setShow(true)
        });
       }     
    });
  }

  function handleAcceptedFiles(files) {
    setShow(false)
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }
  
  async function handleSendFiles() {
     
     setDisabled(true)
     addCsvToFirestore(selectedFiles)  
 
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form File Upload | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Загрузка" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle>Загрузка ГК</CardTitle>
                  <CardSubtitle className="mb-3">
                    {" "}
                    Доступен формат CSV
                  </CardSubtitle>
                  <Form>
                    <Dropzone accept={'.csv','.CSV'} maxFiles={1}

                      onDrop={acceptedFiles => {
                        handleAcceptedFiles(acceptedFiles)
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone">
                          <div
                            className="dz-message needsclick mt-2"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="mb-3">
                              <i className="display-4 text-muted bx bxs-cloud-upload" />
                            </div>
                            <h4>Загрузка ГК</h4>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    {show? '': <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                             
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        )
                      })}
                    </div>}
                
                  </Form>

                  <div className="text-center mt-4">
                    <button onClick={handleSendFiles } 
                      type="button"
                      className="btn btn-primary"
                      disabled={disabled} 
                    >
                     {disabled? 'загрузка..' : 'Отправить'} 
                    </button>
                  </div>
                  <div className="text-center pt-4">{show? 'Файл успешно загружен':''}</div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormUpload

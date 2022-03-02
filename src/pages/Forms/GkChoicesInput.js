import React, { useState } from 'react';
import Select from "react-select"
import makeAnimated from "react-select/animated"
import { Row } from "reactstrap"
import "@vtaits/react-color-picker/dist/index.css"
 

const GkChoicesInput = ({optionMulti, selectedOptions, handleSelectOptions}) => {
 
  const animatedComponents = makeAnimated()
 
  return (
  
        <Row>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <Select
                onChange={handleSelectOptions}
                placeholder={<div>Показать колонки</div>}
               // defaultValue={ optionMulti[0] }
                value={selectedOptions}
                isMulti={true}
                options={optionMulti}
                classNamePrefix="select2-selection"
                closeMenuOnSelect={false}
                components={animatedComponents}
              />
            </div>
          </div>
        </Row>
    
  );
}

export default GkChoicesInput;
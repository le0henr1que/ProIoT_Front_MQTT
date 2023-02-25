import React from 'react'
import Home from '../pages/Home';
import FormGroup from '../pages/FormGroup';

import { BrowserRouter, Route, RouteProps, Routes} from 'react-router-dom';
import { FormControl } from '@material-ui/core';

const Rout: React.FunctionComponent<RouteProps> = (props) =>{
    return (
        <BrowserRouter>

            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/form-group/:id" element={<FormGroup/>} /> 
              <Route  path="/form-group" element={<FormGroup/>} /> 
            </Routes>

      </BrowserRouter>
    )
}

export default Rout
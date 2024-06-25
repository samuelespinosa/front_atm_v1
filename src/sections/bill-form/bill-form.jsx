import React, {useState,useEffect} from 'react';
import { TextField, Button, Container, Stack,Input, 
  Box, FormControl, OutlinedInput, outlinedInputClasses, InputLabel} from '@mui/material';
import { Link } from "react-router-dom";
export default function ProcessForm () {
return (
                        
<form action="/api/bills/" method="POST" enctype="multipart/form-data" className="form-horizontal" novalidate="">
<fieldset className="d-flex w-100 flex-column ">
<input type="hidden" name="csrfmiddlewaretoken" value="rFIsjQ5JxTjbGs1dGqKy38eFKoDNTvNAt7PBnaQGg1KI0EX51l5aTTGNt2wFc2qO"/>
<div>
    <label className="control-label">
      Monto 
    </label>
  <div>
    <input name="amount" className="form-control" type="text" value=""/>
  </div>
</div>
  <div>
    <label className="control-label">
      Estado 
    </label>
  <div>
    <select className="form-control" name="state">
        <option value="paid">Paid</option>
        <option value="partially_paid">Partially_paid</option>
        <option value="not_paid">Not paid</option>
    </select>
  </div>
  </div>
  <div>
    <label className="control-label ">
      Proceso 
    </label>
  <div>
    <select className="form-control" name="process">
          <option value="1">Process object (1)</option>
    </select>
  </div>
</div>

<div >
  <button className="btn btn-primary mt-3 w-100 ">Crear</button>
</div>
</fieldset>
</form>
)
}
 

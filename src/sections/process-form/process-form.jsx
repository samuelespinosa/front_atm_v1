import React, {useState,useEffect} from 'react';
import { TextField, Button, Container, Stack,Input, 
  Box, FormControl, OutlinedInput, outlinedInputClasses, InputLabel} from '@mui/material';
import { Link } from "react-router-dom";
export default function ProcessForm () {
return (
<form action="/api/processes/" method="POST" enctype="multipart/form-data" class="w-80 m-25 form-horizontal" novalidate=""> 
  <input type="hidden" name="csrfmiddlewaretoken" value="BrUMBK4vrjouYBOA6arLrxdl7lAbFKe4DT1VF4PsarP1iNKsr5MnhiFtQZt3YhRi"/>
  <div class="form-group ">
    <label class="control-label ">
     Nombre del proceso 
    </label>
     <div>
        <input name="name" class="form-control" type="text" value=""/>
      </div>
  </div>
  <div class="form-group ">
    <label class="control-label ">
    Persona a cargo  
    </label>
  <div >
    <input name="person_in_charge" class="form-control" type="text" value="" />
  </div>
</div>


<div class="form-group d-flex">
    
  <div class="col-xs-6 flex-fill">
  <label class="control-label ">
     Fecha  Inicio 
    </label>
    <input name="date_start" class="form-control" type="datetime-local" value=""/>
  </div>
  <div class="col-xs-6 flex-fill">
    <label class="control-label ">
      Fecha Fin 
    </label>
    <input name="date_out" class="form-control" type="datetime-local" value=""/>
  </div>
</div>

<div class="form-group d-flex flex-row ">
  <div class="col-xs-6 flex-fill">
    <label class="control-label">
       Cliente 
      </label>
      <select class="form-control" name="customer">
              <option value="1">Customer object (1)</option>
      </select>
    </div>

    <div class="col-xs-6 flex-fill">
      <label class="control-label ">
       Desarrollador 
      </label>
      <select multiple="" class="form-control" name="developer">
            <option value="1">Employee object (1)</option>
      </select>
    </div>
  </div>

  <div class="form-group">
    <label class=" control-label ">
     Estado 
    </label>
  <div class="">
    <select class="form-control" name="status">
        <option value="planning">Planeando</option>
        <option value="developing">Desarrollando</option>
        <option value="maintaining">En Soporte</option>
        <option value="finished">Finalizado</option>
        <option value="abandoned">Abandonado</option>
    </select>
  </div>
</div>


<div class=" col-xs-12 form-actions">
<button class="mt-3 w-100 btn btn-primary js-tooltip" title="">Crear</button>
</div>
</form>
)
}
 

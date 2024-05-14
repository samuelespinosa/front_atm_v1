import React, {useState,useEffect} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
 
 
export default function ProcessForm () {
    useEffect(()=> console.log('his'), []);
    const [name, setName] = useState('')
    const [personInCharge, setPersonInCharge] = useState('')
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [status, setStatus] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(name, personInCharge, dateStart, dateEnd, status); 
    }
 
    return (
        <>
            <form onSubmit={handleSubmit} /*action={<Link to="/login" />}*/ >
              <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Nombre"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />

              <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Persona a cargo"
                    onChange={e => setPersonInCharge(e.target.value)}
                    value={personInCharge}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        label="Fecha de Inicio"
                        onChange={e => setDateStart(e.target.value)}
                        value={dateStart}
                        fullWidth
                        required
                    />
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        label="Fecha Fin"
                        onChange={e => setDateEnd(e.target.value)}
                        value={dateEnd}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Estado"
                    onChange={e => setStatus(e.target.value)}
                    value={status}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
     
        </>
    )
}
 

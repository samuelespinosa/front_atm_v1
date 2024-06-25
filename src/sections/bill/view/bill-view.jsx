import { useState } from 'react';
//
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//
import Iconify from 'src/components/iconify';
import {useRouter} from 'src/routes/hooks/use-router';
//
// ----------------------------------------------------------------------

export default function BillPage() {
  const router = useRouter();
  //   <Container>
  //         <Button 
  //           onClick={router.push('nuevo')} 
  //           variant="contained" color="inherit" 
  //           startIcon={<Iconify icon="eva:plus-fill" />}
  //         >
  //         Nueva Factura 
  //       </Button>
  //     </Stack>
  //   </Container>
  return (
    <Container> 
      
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Facturas</Typography>
            <Button 
              onClick={router.push('nuevo')} 
              variant="contained"
              color="inherit" 
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Nueva Factura
            </Button> 
      </Stack> 
    </Container>
  )
}

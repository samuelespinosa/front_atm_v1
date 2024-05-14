import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';
import { fDate} from 'src/utils/format-time';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function ShopProductCard({ process}) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(process.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {process.state}
    </Label>
  );

  const renderDevelopers=(
    process.developer.map((developer)=>(
      <Typography key={developer.id} sx={{display:"block"}}variant="subtitle3">
        {`Desarrollador: ${developer.name}`}
      </Typography>
    )
  ));
  
  const renderGeneric=(title,field)=> (
    <Typography sx={{display:"block"}}variant="subtitle3">
      {`${title} : ${field}`}
    </Typography>
  );

  const renderCustomer=(
    <Typography sx={{display:"block"}}variant="subtitle3">
      {`Cliente: ${process.customer.name}`}
    </Typography>
  );
  const renderFactura=(
    <Typography sx={{display:"block"}}variant="subtitle3">
      {`Precio: ${fCurrency(process.bill.amount)}`}
    </Typography>
  );

  
  return (
    <Card> 
      <Box >
        {process.state && renderStatus}
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
         {process.name} 
        </Link>
        
        <Box direction="column">
            {renderGeneric("Fecha de entrada",fDate(process.date_in))} 
            {process.date_start && renderGeneric("Fecha de inicio",fDate(process.date_start))} 
            {process.date_out && renderGeneric("Fecha de salida",fDate(process.date_out))} 
            {renderCustomer} 
            {renderDevelopers} 
            {renderFactura} 
        </Box>
      </Stack>
      </Box>
    </Card>
  );
}

ShopProductCard.propTypes = {
  process: PropTypes.object,
  /* clickHanddler: PropTypes.func, */
};

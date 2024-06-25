import { useState, useEffect } from 'react';
import {useRouter} from 'src/routes/hooks/use-router';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import Button from '@mui/material/Button';

import useData from 'src/utils/data_service';

import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';

// ----------------------------------------------------------------------

export default function ProcessView() {
 const [processes,setProcesses]=useState(null); 
 const {fetchDataAthenticated}=useData(); 
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchDataAthenticated('processes/');
        console.log(response); 
        setProcesses(response); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataFromAPI();
  }, []); 
  
  const [openFilter, setOpenFilter] = useState(false);
  const router= useRouter();
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        
        <Typography variant="h4">Processos</Typography>
        <Button onClick={()=>router.push('nuevo')} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Nuevo proceso 
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {!!processes && processes.map((process) => (
          <Grid key={process.id} xs={12} sm={6} md={4}>
            <ProductCard process={process} />
          </Grid>
        ))}
        {!processes && (<Box>No hay processos vigentes</Box>)}
      </Grid>

    </Container>
  );
}

import {
    Grid,
  } from '@mui/material';
  import ReportsTable from './ReportsTable';
  import MainCard from 'components/MainCard';
  import { useState } from 'react';
  
  
  
  // avatar style
  
  
  
  const ReportPage

   = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };
  
    return (
        <>
   


      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
  
   
        <Grid item xs={12} md={12} lg={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
           
            <ReportsTable />
          </MainCard>
        </Grid>
       
  
      </Grid>
        
        </>
   
    );
  };
  
  export default ReportPage

  ;
  
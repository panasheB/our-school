import {
    Grid,
  } from '@mui/material';
  import FinanceReporting from './FinanceReporting';

  import MainCard from 'components/MainCard';
  import { Button } from 'antd';
  import { useState } from 'react';
  
  
  
  // avatar style
  
  
  
  const FinancePage = () => {

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
            <div style ={{margin:"10px"}}>
            <Button type="primary">Generate Report</Button>
            </div>

            


            <FinanceReporting />
          </MainCard>
        </Grid>
       
  
      </Grid>
        
        </>
   
    );
  };
  
  export default FinancePage;
  
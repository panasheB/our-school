import {
    Grid,
  } from '@mui/material';
  import CalaTable from './CalaTable';

  import MainCard from 'components/MainCard';
  import { Button, Drawer, Space } from 'antd';
  import { useState } from 'react';
import AssignMarks from './AssignMarks';
  
  
  
  // avatar style
  
  
  
  const CalaPage = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };
  
    return (
        <>
              <Drawer
        title="Add Grade"
        width={1200}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button >Cancel</Button>
            <Button type="primary" >
              OK
            </Button>
          </Space>
        }
      >
        <AssignMarks  />
        

      </Drawer>


      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
  
   
        <Grid item xs={12} md={12} lg={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <div style ={{margin:"10px"}}>

            <Button type="primary" ghost onClick={() => showDrawer()}>
                Capture Marks
              </Button>
            </div>
            <CalaTable />
          </MainCard>
        </Grid>
       
  
      </Grid>
        
        </>
   
    );
  };
  
  export default CalaPage;
  
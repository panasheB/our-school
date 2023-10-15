import {
    Grid,
  } from '@mui/material';
  import TeachersTable from './TeachersTable';

  import MainCard from 'components/MainCard';
  import { Button, Drawer, Space } from 'antd';
  import { useState } from 'react';
import AddTeacher from './AddTeacher';
  
  
  
  // avatar style
  
  
  
  const TeachersPage = () => {

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
        title="Add Teacher"
        width={500}
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
        <AddTeacher  />
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
                New Teacher
              </Button>
            </div>
            <TeachersTable />
          </MainCard>
        </Grid>
       
  
      </Grid>
        
        </>
   
    );
  };
  
  export default TeachersPage;
  
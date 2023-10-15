import { Table, Input, Row, Col, } from 'antd';
import { Box, TableContainer } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Drawer, Space, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { BsTrashFill } from 'react-icons/bs';
import DeleteGrade from './DeleteGrade';
import EditGrade from './EditGrade';
import { SearchOutlined } from "@ant-design/icons";
// third-party

export default function GradesTable() {
  const [items, setItems] = useState([
    {
      code: "1",
      gradeName: "Grade 1",
      gradeTeacher: "Panashe Budzinike",
    }
  ]);
  useEffect(() => {
    axios
      .get('path')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [itemDetails, setItemDetails] = useState(null);
  console.log(itemDetails);
  const [open, setOpen] = useState(false);
  const showDrawer = (record) => {
    setOpen(true);
    setItemDetails(record);
  };

  const onClose = () => {
    setOpen(false);
  };

  //stock
  const [itemDetails1, setItemDetails1] = useState(null);
  const [open1, setOpen1] = useState(false);
  const showDrawer1 = (record) => {
    setOpen1(true);
    setItemDetails1(record);
  };

  const onClose1 = () => {
    setOpen1(false);
  };



  const itemColumn = [
    {
      title: 'SN',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Grade Name',
      dataIndex: 'gradeName',
      key: 'gradeName'
    },

    {
      title: 'Grade Teacher',
      dataIndex: 'gradeTeacher',
      key: 'gradeTeacher'
    },
 
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <Space size="middle">
            <Tooltip title="Delete Grade" color="grey">
              <BsTrashFill size={12} color="red" style={{ cursor: 'pointer' }} onClick={() => showDrawer(record)} />
            </Tooltip>
          </Space>

          <Tooltip title="Edit Grade" color="grey">
            <EditOutlined style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showDrawer1(record)} />
          </Tooltip>
        </div>
      )
    }
  ];


  const [current, setCurrent] = useState(items);
  const [itemCode, setItemCodeInput] = useState("");
  const [gradeName, setGradeNameInput] = useState("");


  function handleNameSearch(e) {
    setGradeNameInput("");
    setItemCodeInput(e.target.value);
    setCurrent(
      items?.filter((item) =>
        item?.["itemCOde"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleSearchGradeName(e) {
    setItemCodeInput("");
    setGradeNameInput(e.target.value);
    setCurrent(
      items?.filter((item) =>
        item?.["gradeName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (


    

<Box>

   
 

      <Drawer
        title="Delete Grade"
        width={600}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button>Cancel</Button>
            <Button type="primary">OK</Button>
          </Space>
        }
      >
        <DeleteGrade itemDetails={itemDetails} />
      </Drawer>

      <Drawer
        title="Edit Grade"
        width={600}
        onClose={onClose1}
        open={open1}
        extra={
          <Space>
            <Button>Cancel</Button>
            <Button type="primary">OK</Button>
          </Space>
        }
      >
        <EditGrade itemDetails={itemDetails1} />
      </Drawer>


      <div style={{ marginBottom: "30px",marginLeft:"10px"}}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by grades"
              value={itemCode}
              onChange={handleNameSearch}
            />
          </Col>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by grade name"
              value={gradeName}
              onChange={handleSearchGradeName}
            />
          </Col>
        </Row>
      </div>

      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          columns={itemColumn}
          dataSource={current}
          size="small"
          pagination={{
            pageSize: 10
          }}
        />


      </TableContainer>

  </Box>
   
  );
}

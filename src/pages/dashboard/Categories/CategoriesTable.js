import { Table, Input, Row, Col, } from 'antd';
import { Box, TableContainer } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Drawer, Space, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { BsTrashFill } from 'react-icons/bs';
import DeleteCategory from './DeleteCategory';

import EditCategory from './EditCategory';
import { SearchOutlined } from "@ant-design/icons";

// third-party

export default function CategoriesTable() {
  const [items, setItems] = useState([]);
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




  const costs = [
    {
      code: "1",
      categoryName: "Mike Doe",
      costCategory: "Cost Category",
      costDescription: "Cost Description",

    },]

 
  const itemColumn = [
    {
      title: 'SN',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Name',
      dataIndex: 'categoryName',
      key: 'categoryName'
    },


    {
      title: 'Category',
      dataIndex: 'costCategory',
      key: 'costCategory'
    },


    {
      title: 'Description',
      dataIndex: 'costDescription',
      key: 'costDescription'
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <Space size="middle">
            <Tooltip title="Delete Category" color="grey">
              <BsTrashFill size={12} color="red" style={{ cursor: 'pointer' }} onClick={() => showDrawer(record)} />
            </Tooltip>
          </Space>

          <Tooltip title="Edit Category" color="grey">
            <EditOutlined style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showDrawer1(record)} />
          </Tooltip>
        </div>
      )
    }
  ];


  const [current, setCurrent] = useState(costs);
  const [itemCode, setItemCodeInput] = useState("");
  const [itemName, setItemNameInput] = useState("");
  function handleNameSearch(e) {
    setItemNameInput("");
    setItemCodeInput(e.target.value);
    setCurrent(
      costs?.filter((item) =>
        item?.["costCategory"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleItemNameSearch(e) {
    setItemCodeInput("");
    setItemNameInput(e.target.value);
    setCurrent(
      costs?.filter((item) =>
        item?.["categoryName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (


    

<Box>

   
 


      <Drawer
        title="Delete Category"
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
        <DeleteCategory itemDetails={itemDetails} />
      </Drawer>

      <Drawer
        title="Edit Category"
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
        <EditCategory itemDetails={itemDetails1} />
      </Drawer>


      <div style={{ marginBottom: "30px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by  category"
              value={itemCode}
              onChange={handleNameSearch}
            />
          </Col>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by category name"
              value={itemName}
              onChange={handleItemNameSearch}
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

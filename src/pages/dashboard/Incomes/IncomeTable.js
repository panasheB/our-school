import { Table, Input, Row, Col, } from 'antd';
import { Box, TableContainer } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Drawer, Space, Tooltip } from 'antd';
import {EditOutlined } from '@ant-design/icons';
import { BsTrashFill } from 'react-icons/bs';
import DeleteIncome from './DeleteIncome';
import PushIncome from './PushIncome';
import EditIncome from './EditIncome';

import { SearchOutlined ,DollarOutlined} from "@ant-design/icons";

// third-party

export default function IncomeTable() {
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


  //push 
  const [itemDetails2, setItemDetails2] = useState(null);
  const [open2, setOpen2] = useState(false);
  const showDrawer2 = (record) => {
    setOpen2(true);
    setItemDetails2(record);
  };

  const onClose2 = () => {
    setOpen2(false);
  };




  const incomes = [
    {
      code: "1",
      incomeName: "Centre Fee",
      incomeAmount: "15.00",
      incomeDescription: "Exam Centre Fee",
      incomeCurrency: "USD",

    },]

 
  const itemColumn = [
    {
      title: 'SN',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Name',
      dataIndex: 'incomeName',
      key: 'incomeName'
    },


    {
      title: 'Amount',
      dataIndex: 'incomeAmount',
      key: 'incomeAmount'
    },

    {
      title: 'Description',
      dataIndex: 'incomeDescription',
      key: 'incomeDescription'
    },

    {
      title: 'Currency',
      dataIndex: 'incomeCurrency',
      key: 'incomeCurrency'
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <Space size="middle">
            <Tooltip title="Delete Income" color="grey">
              <BsTrashFill size={12} color="red" style={{ cursor: 'pointer' }} onClick={() => showDrawer(record)} />
            </Tooltip>
          </Space>

          <Tooltip title="Edit Income" color="grey">
            <EditOutlined style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showDrawer1(record)} />
          </Tooltip>

          <Tooltip title="Push Income" color="grey">
            <DollarOutlined style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showDrawer2(record)} />
          </Tooltip>
        </div>
      )
    }
  ];


  const [current, setCurrent] = useState(incomes);
  const [itemCode, setItemCodeInput] = useState("");
  const [itemName, setItemNameInput] = useState("");
  function handleNameSearch(e) {
    setItemNameInput("");
    setItemCodeInput(e.target.value);
    setCurrent(
      incomes?.filter((item) =>
        item?.["incomeCurrency"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleItemNameSearch(e) {
    setItemCodeInput("");
    setItemNameInput(e.target.value);
    setCurrent(
      incomes?.filter((item) =>
        item?.["incomeName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (


    

<Box>

<Drawer
        title="Push Income"
        width={600}
        onClose={onClose2}
        open={open2}
        extra={
          <Space>
            <Button>Cancel</Button>
            <Button type="primary">OK</Button>
          </Space>
        }
      >
        <PushIncome itemDetails={itemDetails2} />
      </Drawer>

   
 


      <Drawer
        title="Delete Income"
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
        <DeleteIncome itemDetails={itemDetails} />
      </Drawer>

      <Drawer
        title="Edit Income"
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
        <EditIncome itemDetails={itemDetails1} />
      </Drawer>


      <div style={{ marginBottom: "30px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by  currency"
              value={itemCode}
              onChange={handleNameSearch}
            />
          </Col>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by income name"
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

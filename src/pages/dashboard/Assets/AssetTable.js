import { Table, Input, Row, Col, } from 'antd';
import { Box, TableContainer } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Drawer, Space, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { BsTrashFill } from 'react-icons/bs';
import DeleteAsset from './DeleteAsset';
import EditCost from './EditAsset';
import { SearchOutlined } from "@ant-design/icons";

// third-party

export default function AssetTable() {
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


  //payment

  const [itemDetails2, setItemDetails2] = useState(null);
  const [open2, setOpen2] = useState(false);
  const showDrawer2 = (record) => {
    setOpen2(true);
    setItemDetails2(record);
  };

  const onClose2 = () => {
    setOpen2(false);
  };


  const assets = [
    {
      assetNumber: 'AS1001',
      description: 'Laptop',
      serialNumber: 'SN12345',
      location: 'Office A',
      cost: '1200',
      depreciationMethod: 'Straight-line',
      depreciationRate: '10%',
      owner: 'John Doe',
      supplier: 'Tech Inc',
    },
    {
      assetNumber: 'AS1002',
      description: 'Printer',
      serialNumber: 'SN54321',
      location: 'Office B',
      cost: '600',
      depreciationMethod: 'Double Declining',
      depreciationRate: '15%',
      owner: 'Jane Smith',
      supplier: 'Printers R Us',
    },
    // Add more objects with property values
  ];
  

 
  const itemColumn = [
    {
      title: 'Asset Number',
      dataIndex: 'assetNumber',
      key: 'assetNumber'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },

    {
      title: 'Serial Number',
      dataIndex: 'serialNumber',
      key: 'serialNumber'
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location'
    },


    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost'
    },
    {
      title: 'Depreciation Method',
      dataIndex: 'depreciationMethod',
      key: 'depreciationMethod'
    },

    {
      title: 'Depreciation Rate',
      dataIndex: 'depreciationRate',
      key: 'depreciationRate'
    },
    {
      title: 'Onwer',
      dataIndex: 'owner',
      key: 'owner'
    },
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      key: 'supplier'
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <Space size="middle">
            <Tooltip title="Delete Asset" color="grey">
              <BsTrashFill size={12} color="red" style={{ cursor: 'pointer' }} onClick={() => showDrawer(record)} />
            </Tooltip>
          </Space>

          <Tooltip title="Edit Asset" color="grey">
            <EditOutlined style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showDrawer1(record)} />
          </Tooltip>

   
        </div>
      )
    }
  ];


  const [current, setCurrent] = useState(assets);
  const [itemCode, setItemCodeInput] = useState("");
  const [itemName, setItemNameInput] = useState("");
  function handleNameSearch(e) {
    setItemNameInput("");
    setItemCodeInput(e.target.value);
    setCurrent(
      assets?.filter((item) =>
        item?.["assetNumber"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleSerialNumber(e) {
    setItemCodeInput("");
    setItemNameInput(e.target.value);
    setCurrent(
      assets?.filter((item) =>
        item?.["serialNumber"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (


    

<Box>

   
 


      <Drawer
        title="Delete Asset"
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
        <DeleteAsset itemDetails={itemDetails} />
      </Drawer>

      <Drawer
        title="Edit Cost"
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
        <EditCost itemDetails={itemDetails1} />
      </Drawer>


      <div style={{ marginBottom: "30px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by asset number"
              value={itemCode}
              onChange={handleNameSearch}
            />
          </Col>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by serial number"
              value={itemName}
              onChange={handleSerialNumber}
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

import { Table, Input, Row, Col, } from 'antd';
import { Box, TableContainer } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DownloadOutlined } from '@ant-design/icons';
import { SearchOutlined } from "@ant-design/icons";


// third-party

export default function ReportsTable() {
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

  const records = [
    {
      code: "1",
      recordName: "Finance Report",
      documentPath: "/path/to/your/document.pdf",

    },]

 
  const itemColumn = [
    {
      title: 'SN',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Record Name',
      dataIndex: 'recordName',
      key: 'recordName'
    },

    {
      title: 'Downlod',
      key: 'action',
      render: (record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
        <a
          href={record.documentPath} 
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <DownloadOutlined style={{ color: 'blue', cursor: 'pointer', fontSize: '25px' }} />
        </a>
      </div>
      )
    }
  ];


  const [current, setCurrent] = useState(records);
  const [itemName, setItemNameInput] = useState("");

  function handleItemNameSearch(e) {
    setItemNameInput(e.target.value);
    setCurrent(
      records?.filter((item) =>
        item?.["recordName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (


    

<Box>

   
 



   


      <div style={{ marginBottom: "30px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by record name"
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

import { Table } from "antd";
import { Box, TableContainer } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, Space, Drawer, Col, Row, Tooltip } from "antd";
import Pay from "./Pay";
// import avatar1 from 'assets/images/users/watermark.jpeg';
import { SearchOutlined ,PoundOutlined} from "@ant-design/icons";

// third-party

export default function PaySlipsTable() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("path")
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

  const paySLips = [
    {
      code:"1",
      slipId: "PSL0098",
      staffSurname: "John",
      staffName: "Doe",
      salary: "$300.00",
      modeOFPayment: "Cash",
      month: "September",
      bonuses: "$00.00",
      deductions:"$00.00",
      processingDate:"25th Sep 2023",
      personnel:"Taonga Mafura",
      status:"Pending",
    },
  ];

  const itemColumn = [
    {
      title: "SN",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Payslip Number",
      dataIndex: "slipId",
      key: "slipId",
    },

    {
      title: "Staff Name",
      dataIndex: "staffName",
      key: "staffName",
    },

    {
      title: "Staff Surname",
      dataIndex: "staffSurname",
      key: "staffSurname",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },

    {
      title: "Mode of payment",
      dataIndex: "modeOFPayment",
      key: "modeOFPayment",
    },

    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Bonuses",
      dataIndex: "bonuses",
      key: "bonuses",
    },
    {
      title: "Deductions",
      dataIndex: "deductions",
      key: "deductions",
    },

    {
      title: "Processing Date",
      dataIndex: "processingDate",
      key: "processingDate",
    },
    
    {
      title: "Personnel",
      dataIndex: "personnel",
      key: "personnel",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Space size="middle">
            <Tooltip title="Pay" color="grey">
              <PoundOutlined
                size={12}
                style={{ cursor: "pointer",color:"blue" }}
                onClick={() => showDrawer(record)}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ];




  //searches

  const [current, setCurrent] = useState(paySLips);
  const [staffName, setStaffNameInput] = useState("");
  const [slipId, setSLipIdInout] = useState("");
  function handleNameSearch(e) {
    setSLipIdInout("");
    setStaffNameInput(e.target.value);
    setCurrent(
      paySLips?.filter((slip) =>
        slip?.["staffName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleStudentIdSearch(e) {
    setStaffNameInput("");
    setSLipIdInout(e.target.value);
    setCurrent(
      paySLips?.filter((slip) =>
        slip?.["slipId"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (
    <Box>
      <Drawer
        title="Pay"
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
        <Pay itemDetails={itemDetails} />
      </Drawer>

      <div style={{ marginBottom: "30px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by staff name"
              value={staffName}
              onChange={handleNameSearch}
            />
          </Col>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by slip id"
              value={slipId}
              onChange={handleStudentIdSearch}
            />
          </Col>
        </Row>
      </div>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}
      >
        <Table
          columns={itemColumn}
          dataSource={current}
          size="small"
          pagination={{
            pageSize: 10,
          }}
        />
      </TableContainer>
    </Box>
  );
}

import { Table } from "antd";
import { Box, TableContainer } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, Space, Drawer, Col, Row, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { BsTrashFill } from "react-icons/bs";
import DeleteStaff from "./DeleteStaff";
import { CCol } from "@coreui/react";
// import avatar1 from 'assets/images/users/watermark.jpeg';
import EditStaff from "./EditStaff";
import { SearchOutlined } from "@ant-design/icons";

// third-party

export default function StaffTable() {
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

  const teachers = [

    {
      staffId: "12345",
      staffName: "John",
      staffSurname: "Doe",
      staffGender: "Male",
      nationalID: "ABC123456",
      jobTitle: "Manager",
      staffSalary: 5000,
      staffPhone: "+1 123-456-7890",
      staffAddress: "123 Main Street, City, Country",
      staffDOB: "1990-01-01",
      staffEmail: "john.doe@example.com",
      staffDepartment: "Human Resources",
      status:"Pending",
   
    },
   
  ];

  const itemColumn = [
    {
      title: "SN",
      dataIndex: "staffId",
      key: "staffId",
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
      title: "Staff Gender",
      dataIndex: "staffGender",
      key: "staffGender",
    },

    {
      title: "National ID",
      dataIndex: "nationalID",
      key: "nationalID",
    },

    {
      title: "Staff Phone",
      dataIndex: "staffPhone",
      key: "staffPhone",
    },
    {
      title: "Address",
      dataIndex: "staffAddress",
      key: "staffAddress",
    },
    {
      title: "Email",
      dataIndex: "staffEmail",
      key: "staffEmail",
    },

    {
      title: "Salary",
      dataIndex: "staffSalary",
      key: "staffSalary",
    },
    {
      title: "Staff Department",
      dataIndex: "staffDepartment",
      key: "staffDepartment",
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
            <Tooltip title="Delete Staff" color="grey">
              <BsTrashFill
                size={12}
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() => showDrawer(record)}
              />
            </Tooltip>
          </Space>

          <Tooltip title="Edit Staff" color="grey">
            <EditOutlined
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => showDrawer1(record)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  //searches

  const [current, setCurrent] = useState(teachers);
  const [studentName, setStudentNameInput] = useState("");
  const [studentIdInput, setStudentIdInput] = useState("");
  function handleNameSearch(e) {
    setStudentIdInput("");
    setStudentNameInput(e.target.value);
    setCurrent(
      teachers?.filter((student) =>
        student?.["staffName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleStudentIdSearch(e) {
    setStudentNameInput("");
    setStudentIdInput(e.target.value);
    setCurrent(
      teachers?.filter((student) =>
        student?.["staffId"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (
    <Box>
      <Drawer
        title="Delete Staff"
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
        <DeleteStaff itemDetails={itemDetails} />
      </Drawer>
      <Drawer
        title="Edit Staff"
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
        <EditStaff itemDetails={itemDetails1} />
      </Drawer>{" "}
      <div style={{ marginBottom: "30px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by full name"
              value={studentName}
              onChange={handleNameSearch}
            />
          </Col>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by staff id"
              value={studentIdInput}
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

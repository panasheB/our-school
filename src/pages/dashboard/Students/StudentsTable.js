import { Table } from "antd";
import { Box, TableContainer } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, Space, Drawer, Col, Row, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { BsTrashFill } from "react-icons/bs";
import DeleteStudent from "./DeleteStudent";
import { CCol } from "@coreui/react";
// import avatar1 from 'assets/images/users/watermark.jpeg';
import EditStudent from "./EditStudent";
import { SearchOutlined } from "@ant-design/icons";

// third-party

export default function StudentsTable() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/mongo/items/get")
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

  const students = [
    {
      studentID: "1",
      studentName: "John",
      studentSurname: "Doe",
      studentClass: "Class A",
      studentGender: "Male",
      healthStatus: "Good",
      dob: "2005-03-15",
      fees: 1000,
      regFees: 200,
      owedFees: 800,
      parentName: "Alice Doe",
      relationship: "Mother",
      parentPhone: "123-456-7890",
      studentAddress: "123 Main St",
    },
    {
      studentID: "2",
      studentName: "Jane",
      studentSurname: "Smith",
      studentClass: "Class B",
      studentGender: "Female",
      healthStatus: "Excellent",
      dob: "2006-08-20",
      fees: 1100,
      regFees: 220,
      owedFees: 880,
      parentName: "Bob Smith",
      relationship: "Father",
      parentPhone: "987-654-3210",
      studentAddress: "456 Elm St",
    },
    {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      {
        studentID: "2",
        studentName: "Jane",
        studentSurname: "Smith",
        studentClass: "Class B",
        studentGender: "Female",
        healthStatus: "Excellent",
        dob: "2006-08-20",
        fees: 1100,
        regFees: 220,
        owedFees: 880,
        parentName: "Bob Smith",
        relationship: "Father",
        parentPhone: "987-654-3210",
        studentAddress: "456 Elm St",
      },
      
  ];

  const itemColumn = [
    {
      title: "SN",
      dataIndex: "studentID",
      key: "studentID",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },

    {
      title: "Student Surname",
      dataIndex: "studentSurname",
      key: "studentSurname",
    },
    {
      title: "Student Id",
      dataIndex: "studentID",
      key: "studentID",
    },

    {
      title: "Class",
      dataIndex: "studentClass",
      key: "studentClass",
    },

    {
      title: "Parent Name",
      dataIndex: "parentName",
      key: "parentName",
    },
    {
      title: "Relationship",
      dataIndex: "relationship",
      key: "relationship",
    },
    {
      title: "Parent Phone",
      dataIndex: "parentPhone",
      key: "parentPhone",
    },

    {
      title: "Fees",
      dataIndex: "fees",
      key: "fees",
    },

    {
      title: "Balance",
      dataIndex: "owedFees",
      key: "owedFees",
    },

    {
      title: "Gender",
      dataIndex: "studentGender",
      key: "studentGender",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Space size="middle">
            <Tooltip title="Delete Student" color="grey">
              <BsTrashFill
                size={12}
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() => showDrawer(record)}
              />
            </Tooltip>
          </Space>

          <Tooltip title="Edit Student" color="grey">
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

  const [current, setCurrent] = useState(students);
  const [studentName, setStudentNameInput] = useState("");
  const [studentIdInput, setStudentIdInput] = useState("");
  function handleNameSearch(e) {
    setStudentIdInput("");
    setStudentNameInput(e.target.value);
    setCurrent(
      students?.filter((student) =>
        student?.["studentName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleStudentIdSearch(e) {
    setStudentNameInput("");
    setStudentIdInput(e.target.value);
    setCurrent(
      students?.filter((student) =>
        student?.["studentID"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (
    <Box>
      <Drawer
        title="Delete Student"
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
        <DeleteStudent itemDetails={itemDetails} />
      </Drawer>
      <Drawer
        title="Edit Student"
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
        <EditStudent itemDetails={itemDetails1} />
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
              placeholder="Search by student id"
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

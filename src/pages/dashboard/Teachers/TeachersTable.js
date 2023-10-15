import { Table } from "antd";
import { Box, TableContainer } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, Space, Drawer, Col, Row, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { BsTrashFill } from "react-icons/bs";
import DeleteTeacher from "./DeleteTeacher";
import { CCol } from "@coreui/react";
// import avatar1 from 'assets/images/users/watermark.jpeg';
import EditTeacher from "./EditTeacher";
import { SearchOutlined } from "@ant-design/icons";

// third-party

export default function TeachersTable() {
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
      staffId: "1",
      teacherName: "John",
      teacherSurname: "Doe",
      teacherproffession: "Class A",
      teacherGender: "Male",
      teacherDepartment: "MAthematics",
      teacherSubject: "MAthematics",
   
    },
   
  ];

  const itemColumn = [
    {
      title: "SN",
      dataIndex: "staffId",
      key: "staffId",
    },
    {
      title: "Teacher Name",
      dataIndex: "teacherName",
      key: "teacherName",
    },

    {
      title: "Teacher Surname",
      dataIndex: "teacherSurname",
      key: "teacherSurname",
    },
    {
      title: "Teacher Proffession",
      dataIndex: "teacherproffession",
      key: "teacherproffession",
    },

    {
      title: "Gender",
      dataIndex: "teacherGender",
      key: "teacherGender",
    },

    {
      title: "Department",
      dataIndex: "teacherDepartment",
      key: "teacherDepartment",
    },
    {
      title: "Subject",
      dataIndex: "teacherSubject",
      key: "teacherSubject",
    },
    
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Space size="middle">
            <Tooltip title="Delete Teacher" color="grey">
              <BsTrashFill
                size={12}
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() => showDrawer(record)}
              />
            </Tooltip>
          </Space>

          <Tooltip title="Edit Teacher" color="grey">
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
        student?.["teacherName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  function handleStudentIdSearch(e) {
    setStudentNameInput("");
    setStudentIdInput(e.target.value);
    setCurrent(
      teachers?.filter((student) =>
        student?.["teacherId"]?.toLowerCase()?.includes(e.target.value)
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
        <DeleteTeacher itemDetails={itemDetails} />
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
        <EditTeacher itemDetails={itemDetails1} />
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
              placeholder="Search by teacher id"
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

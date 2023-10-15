import { Table, Input, Row, Col } from "antd";
import { Box, TableContainer } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Space, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { BsTrashFill } from "react-icons/bs";
import { SearchOutlined } from "@ant-design/icons";
// third-party

export default function CalaTable() {
  const [items, setItems] = useState([
    {
      studentName: "John",
      studentSurname: "Doe",
      studentClass: "Form 1",
      subjects: [{ name: "Maths" }, { name: "English" }],
      regNumber: "ZMSEC123",
    },
    {
      studentName: "Jane",
      studentSurname: "Doe",
      studentClass: "Form 2",
      subjects: [{ name: "Shona" }, { name: "Geography" }],
      regNumber: "ZIMSEC567",
    },
  ]);
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
      title: "Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Surname",
      dataIndex: "studentSurname",
      key: "studentSurname",
    },
    {
      title: "Class",
      dataIndex: "studentClass",
      key: "studentClass",
    },
    {
      title: "Subjects",
      key: "studentClass",
      render: (record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          {record?.subjects?.map((subject, index) => (
            <span key={index}>
              {subject?.name}
              {index !== record?.subjects?.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      ),
    },

    {
      title: "Zimsec Reg Number",
      dataIndex: "regNumber",
      key: "regNumber",
    },
  ];

  const [current, setCurrent] = useState(items);
  const [subjectName, setGradeNameInput] = useState("");

  function handleSearchGradeName(e) {
    setGradeNameInput(e.target.value);
    setCurrent(
      items?.filter((item) =>
        item?.["studentName"]?.toLowerCase()?.includes(e.target.value)
      )
    );
  }

  return (
    <Box>

      <div style={{ marginBottom: "30px", marginLeft: "10px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search by student name"
              value={subjectName}
              onChange={handleSearchGradeName}
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

import { useState , useEffect} from "react";
import { CFormLabel } from "@coreui/react";
import { Button, Select, Row, Col,Table,Input } from "antd";
import axios from "axios";
import swal from "sweetalert";

function AssignMarks() {
  const buttonStyle3 = {
    backgroundColor: "#69A3DE",
    border: "1px solid #69A3DE",
    borderRadius: "50px",
    color: "#fff",
    variant: "outline",
    padding: "2px 15px",
    margin: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const [transaction, setTranscaction] = useState({
    subjectName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTranscaction((prevRequest) => ({
      ...prevRequest,
      [name]: value,
    }));
  };

  const sessionSuccess = () => {
    swal({
      title: "Successful!",
      text: "Marks Added!",
      icon: "success",
    });
  };

  const sessionError = () => {
    swal({
      title: "Error!",
      text: "Opps something went wrong!",
      icon: "error",
    });
  };
  const ClassF = [
    { value: "Form 1", label: "Form 1" },
    { value: "Form 2", label: "Form 2" },
  ];
  const [classs, setClass] = useState("");
  const classOptions = [{ text: "Select class", value: "" }]?.concat(
    ClassF?.map((x) => ({
      text: x?.value,
      value: x?.value,
    }))
  );
  const handleClassChange = (value) => {
    setClass(value);
  };

  const students = [
    {
      key:1,
      studentID: "1",
      studentName: "John",
      studentSurname: "Doe",
      studentClass: "Form I",
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
      studentID: "2S",
      studentName: "Kundai",
      studentSurname: "Smith",
      studentClass: "Form 1",
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
      studentID: "2C",
      studentName: "Panshe",
      studentSurname: "Smith",
      studentClass: "Form 1",
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
      studentID: "2B",
      studentName: "Mako",
      studentSurname: "Smith",
      studentClass: "Form 1",
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

  const filteredStudents = students?.filter(
    (student) => student?.studentClass === classs
  );
  

  //subject
  const subjects = [
    { value: "English", label: "English" },
    { value: "Geography", label: "Geography" },
    { value: "Shona", label: "Shona" },
    { value: "Mathematics", label: "Mathematics" },
  ];
  const [subjecT, setSubjeT] = useState("");
  const subjectOptions = [{ text: "Select subject", value: "" }]?.concat(
    subjects?.map((x) => ({
      text: x?.value,
      value: x?.value,
    }))
  );
  const handleSubjectChange = (value) => {
    setSubjeT(value);
  };

  function handleSubmit() {
    const data = {
      classs: transaction.classs,
      subjectt: subjecT,
    };
    axios
      .post(`path`, data)
      .then((response) => {
        console.log(response);
        sessionSuccess();
      })
      .catch((error) => {
        console.log(error);
        sessionError();
      });
  }

  const containerStyle = {
    border: "0.5px solid lightgrey",
    padding: "10px",
  };

  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    const initialStudentData = filteredStudents?.map((student) => ({
      key: student.id,
      name: student.studentName,
      mark1: '',
      mark2: '',
      mark3: '',
      mark4:'',
      mark5:'',
      average:'',

    }));
    setStudentData(initialStudentData);
  }, []);

  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Component A",
      dataIndex: "mark1",
      key: "mark1",
      render: (_, record) => (
        <Input
          value={record.mark1}
          placeholder="0.00"
          onChange={(e) => handleMarkChange(e, "mark1", record.key)}
        />
      ),
    },
    {
      title: "Component B",
      dataIndex: "mark2",
      key: "mark2",
      render: (_, record) => (
        <Input
          value={record.mark2}
          placeholder="0.00"
          onChange={(e) => handleMarkChange(e, "mark2", record.key)}
        />
      ),
    },
    {
      title: "Component C",
      dataIndex: "mark3",
      key: "mark3",
      render: (_, record) => (
        <Input
          value={record.mark3}
          placeholder="0.00"
          onChange={(e) => handleMarkChange(e, "mark3", record.key)}
        />
      ),
    },
    {
      title: "Component D",
      dataIndex: "mark4",
      key: "mark4",
      render: (_, record) => (
        <Input
          value={record.mark4}
          placeholder="0.00"
          onChange={(e) => handleMarkChange(e, "mark4", record.key)}
        />
      ),
    },
    {
      title: "Component E",
      dataIndex: "mark5",
      key: "mark5",
      render: (_, record) => (
        <Input
          value={record.mark3}
          placeholder="0.00"
          onChange={(e) => handleMarkChange(e, "mark5", record.key)}
        />
      ),
    },
    {
      title: "Average",
      dataIndex: "average",
      key: "average",
      render: (_, record) => (
        <Input
          value={record.mark3}
          placeholder="0.00"
          onChange={(e) => handleMarkChange(e, "average", record.key)}
        />
      ),
    },
  ];
  const handleMarkChange = (e, markType, studentKey) => {
    const updatedStudentData = studentData.map((student) =>
      student.key === studentKey ? { ...student, [markType]: e.target.value } : student
    );
    setStudentData(updatedStudentData);
  };

  const handleMarksSubmit = () => {
    console.log(studentData);
  };

  return (
    <>
      <div style={containerStyle}>
        <>
          <div style={{ backgroundColor: "white" }}>
            <div style={{ marginLeft: "10px" }}>
              <h3> Select Class and Subject</h3>
              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Select Class</CFormLabel>
                    <Select
                      defaultValue=""
                      style={{
                        width: "100%",
                      }}
                      onChange={handleClassChange}
                    >
                      {classOptions?.map((type, index) => (
                        <option key={index} value={type.value}>
                          {" "}
                          {type.text}{" "}
                        </option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Select Subject
                    </CFormLabel>
                    <Select
                      defaultValue=""
                      style={{
                        width: "100%",
                      }}
                      onChange={handleSubjectChange}
                    >
                      {subjectOptions?.map((type, index) => (
                        <option key={index} value={type.value}>
                          {" "}
                          {type.text}{" "}
                        </option>
                      ))}
                    </Select>
                  </Col>
                </Row>
              </div>

              <>
                <h3> Update Marks</h3>
                <div style={{ marginBottom: "30px" }}>
                  <Row gutter={[16, 16]}>
                    <Table dataSource={filteredStudents} columns={columns} />
                  </Row>
                </div>
              </>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <Button
                        className="sb-3"
                        size="sm"
                        style={buttonStyle3}
                        onClick={handleMarksSubmit}
                      >
                        Confirm
                      </Button>{" "}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
export default AssignMarks;

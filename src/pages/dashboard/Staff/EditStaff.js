import { useState } from "react";
import { CFormLabel } from "@coreui/react";
import { Button, Input, Row, Col } from "antd";
import { Select } from "antd";
// import axios from 'axios';
// import swal from 'sweetalert';

function EditStaff({ itemDetails }) {
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
  const [studentDetails, setStudentDetails] = useState({
    staffId: "",
    staffName: "",
    staffSurname: "",
    staffGender: "",
    nationalID: "",
    jobTitle: "",
    staffSalary: "",
    staffPhone: "",
    staffAddress: "",
    staffDOB: "",
    staffEmail: "",
    staffDepartment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentDetails((prevRequest) => ({
      ...prevRequest,
      [name]: value,
    }));
  };
  // const sessionSuccess = () => {
  //   swal({
  //     title: 'Successful!',
  //     text: 'Stock Successfully Updated!',
  //     icon: 'success'
  //   });
  // };

  // const sessionError = () => {
  //   swal({
  //     title: 'Error!',
  //     text: 'Opps something went wrong!',
  //     icon: 'error'
  //   });
  // };
  function handleSubmit() {
    const data = {
      staffId: studentDetails.staffId,
      staffName: studentDetails.staffName,
      staffSurname: studentDetails.staffSurname,
      nationalID: studentDetails.nationalID,
      jobTitle: studentDetails.jobTitle,
      staffSalary: studentDetails.staffSalary,
      staffPhone: studentDetails.staffPhone,
      staffAddress: studentDetails.staffAddress,
      staffDOB: studentDetails.staffDOB,
      staffEmail: studentDetails.staffEmail,
      staffDepartment: studentDetails.staffDepartment,
    };
    console.log(data);
  }

  const containerStyle = {
    border: "0.5px solid lightgrey",
    padding: "10px",
  };

  return (
    <>
      <div style={containerStyle}>
        <>
          <div style={{ backgroundColor: "white" }}>
            <div style={{ marginLeft: "10px" }}>
              <h3> Edit Staff</h3>
              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>Staff ID</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffId !== ""}
                      name="staffId"
                      placeholder="Staff ID"
                      value={studentDetails.staffId}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Staff Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffName !== ""}
                      name="staffName"
                      placeholder="Staff Name"
                      value={studentDetails.staffName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Staff Surname</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffSurname !== ""}
                      name="staffSurname"
                      placeholder="Staff Surname"
                      value={studentDetails.staffSurname}
                      onChange={handleChange}
                    />
                  </Col>

                  {/* <Col span={12}>
                    <CFormLabel className="label-txt">Student Class</CFormLabel>
                    <Select
                      defaultValue=""
                      style={{
                        width: '100%'
                      }}
                      onChange={handleClassChange}
                    >
                      {classesOPtions?.map((type, index) => (
                        <option key={index} value={type.value}>
                          {' '}
                          {type.text}{' '}
                        </option>
                      ))}
                    </Select>


                  </Col> */}
                  <Col span={12}>
                    <CFormLabel className="label-txt">National ID</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.nationalID !== ""}
                      name="nationalID"
                      placeholder="National ID "
                      value={studentDetails.nationalID}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Job Title</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.jobTitle !== ""}
                      name="jobTitle"
                      placeholder="Job Title"
                      value={studentDetails.jobTitle}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Staff Salary</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffSalary !== ""}
                      name="staffSalary"
                      placeholder="Staff Salary"
                      value={studentDetails.staffSalary}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Staff Phone</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffPhone !== ""}
                      name="staffPhone"
                      placeholder="Staff Phone"
                      value={studentDetails.staffPhone}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Staff Address</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffAddress !== ""}
                      name="staffAddress"
                      placeholder="Staff Address"
                      value={studentDetails.staffAddress}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Staff DOB</CFormLabel>
                    <Input
                      type="date"
                      size="sm"
                      valid={studentDetails.staffDOB !== ""}
                      name="staffDOB"
                      placeholder="Date of birth"
                      value={studentDetails.staffDOB}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Staff Email</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffEmail !== ""}
                      name="staffEmail"
                      placeholder="Staff Email"
                      value={studentDetails.staffEmail}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Department</CFormLabel>
                    <Input
                      type="date"
                      size="sm"
                      valid={studentDetails.staffDepartment !== ""}
                      name="staffDepartment"
                      placeholder="Department"
                      value={studentDetails.staffDepartment}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <Button
                        className="sb-3"
                        size="sm"
                        style={buttonStyle3}
                        onClick={handleSubmit}
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
export default EditStaff;

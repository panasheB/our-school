import { useState } from "react";
import { CFormLabel } from "@coreui/react";
import { Button, Input, Row, Col, Select } from "antd";
// import axios from "axios";
import swal from "sweetalert";

function AddPayslip() {
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

  //gender
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const [gender, setGender] = useState("");
  const genderOptions = [{ text: "Gender", value: "" }]?.concat(
    genders?.map((x) => ({
      text: x?.value,
      value: x?.value,
    }))
  );

  //class
  const classes = [
    { value: "Form 1", label: "Form 1" },
    { value: "Form 2", label: "Form 2" },
  ];
  const [form, setClass] = useState("");
  // const classesOPtions = [{ text: "Class", value: "" }]?.concat(
  //   classes?.map((x) => ({
  //     text: x?.value,
  //     value: x?.value,
  //   }))
  // );
  const [studentDetails, setStudentDetails] = useState({
    code:"",
    slipId: "",
    staffSurname: "",
    staffName: "",
    salary: "",
    modeOFPayment: "",
    nationalID:"",
    month: "",
    bonuses: "",
    deductions:"",
    processingDate:"",
    personnel:"",
    status:"Pending",
    date:"",
    jobTitle:"",
    staffSalary:"",
    staffIncomeTax:"",
    staffOverTime:"",
    staffAdvancePayment:"",
    staffHealthInsurance:"",
    staffDepartment:"",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentDetails((prevRequest) => ({
      ...prevRequest,
      [name]: value,
    }));
  };

  const sessionSuccess = () => {
    swal({
      title: "Successful!",
      text: "Teacher Added!",
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
  const handleGenderChange = (value) => {
    setGender(value);
  };

  // const handleClassChange = (value) => {
  //   setClass(value);
  // };

  function handleSubmit() {
    const data = {
      code:studentDetails.code,
      slipId: studentDetails.slipId,
      staffSurname: studentDetails.staffSurname,
      staffName: studentDetails.staffName,
      nationalID:studentDetails.nationalID,
      salary: studentDetails.salary,
      modeOFPayment: studentDetails.modeOFPayment,
      month: studentDetails.month,
      bonuses: studentDetails.bonuses,
      deductions:studentDetails.deductions,
      processingDate:studentDetails.processingDate,
      personnel:studentDetails.personnel,
      jobTitle:studentDetails.jobTitle,
      staffSalary:studentDetails.staffSalary,
      staffIncomeTax:studentDetails.staffIncomeTax,
      staffOverTime:studentDetails.staffOverTime,
      status:"Pending",
      date:new Date()
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
              <h3> Add Payslip</h3>
              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>Staff</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffSurname !== ""}
                      name="staffSurname"
                      placeholder="Staff"
                      value={studentDetails.staffSurname}
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
                    <CFormLabel>Staff ID</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.slipId !== ""}
                      name="slipId"
                      placeholder="Staff ID"
                      value={studentDetails.slipId}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      National ID
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.nationalID !== ""}
                      name="nationalID"
                      placeholder="National Id "
                      value={studentDetails.nationalID}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Job Title
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.jobTitle !== ""}
                      name="jobTitle"
                      placeholder="Job Title "
                      value={studentDetails.jobTitle}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Staff Salary
                    </CFormLabel>
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
                    <CFormLabel className="label-txt">
                      Staff Income Tax
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffIncomeTax !== ""}
                      name="staffIncomeTax"
                      placeholder="Staff Income Tax"
                      value={studentDetails.staffIncomeTax}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Staff Overtime
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffOverTime !== ""}
                      name="staffOverTime"
                      placeholder="Staff Overtime"
                      value={studentDetails.staffOverTime}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>



              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Staff Advanced Payment
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffAdvancePayment !== ""}
                      name="staffAdvancePayment"
                      placeholder="Staff Advanced Payment"
                      value={studentDetails.staffAdvancePayment}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Staff Department
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffDepartment !== ""}
                      name="staffDepartment"
                      placeholder="Staff Department"
                      value={studentDetails.staffDepartment}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>




              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Staff Health Insurance
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffHealthInsurance !== ""}
                      name="staffHealthInsurance"
                      placeholder="Staff Health Insurance"
                      value={studentDetails.staffHealthInsurance}
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
export default AddPayslip;

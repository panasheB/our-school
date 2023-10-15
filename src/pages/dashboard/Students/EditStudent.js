import { useState } from 'react';
import { CFormLabel } from '@coreui/react';
import { Button, Input, Row, Col } from 'antd';
import { Select} from 'antd';
// import axios from 'axios';
// import swal from 'sweetalert';

function EditStudent({ itemDetails }) {
  const buttonStyle3 = {
    backgroundColor: '#69A3DE',
    border: '1px solid #69A3DE',
    borderRadius: '50px',
    color: '#fff',
    variant: 'outline',
    padding: '2px 15px',
    margin: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };
  const [studentDetails, setStudentDetails] = useState({
    studentID: '',
    studentName: '',
    studentSurname: '',
    studentClass: '',
    studentGender:"",
    healthStatus:"",
    dob:"",
    fees:"",
    regFees:"",
    owedFees:"",
    parentName:"",
    relationship:"",
    parentPhone:"",
    studentAddress:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentDetails((prevRequest) => ({
      ...prevRequest,
      [name]: value
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
      studentID: studentDetails.studentID,
      studentName: studentDetails.studentName,
      studentSurname: studentDetails.studentSurname,
      healthStatus:studentDetails.healthStatus,
      dob:studentDetails.dob,
      fees:studentDetails.fees,
      regFees:studentDetails.regFees,
      owedFees:studentDetails.owedFees,
      parentName:studentDetails.parentName,
      relationship:studentDetails.relationship,
      parentPhone:studentDetails.parentPhone,
      studentAddress:studentDetails.studentAddress
  };    
  console.log(data)

}
  

  const containerStyle = {
    border: '0.5px solid lightgrey',
    padding: '10px'
  };

  return (
    <>
      <div style={containerStyle}>
        <>
          <div style={{ backgroundColor: 'white' }}>
            <div style={{ marginLeft: '10px' }}>
              <h3>Edit Student</h3>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel >Student ID</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.studentID !== ''}
                      name="studentID"
                      placeholder="Student ID"
                      value={studentDetails.studentID}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Student Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.studentName !== ''}
                      name="studentName"
                      placeholder="Student Name"
                      value={studentDetails.studentName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Student Surname</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.studentSurname !== ''}
                      name="studentSurname"
                      placeholder="Surname"
                      value={studentDetails.studentSurname}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Student Address</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.studentAddress !== ''}
                      name="studentAddress"
                      placeholder="Student Address"
                      value={studentDetails.studentAddress}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>


              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Student DOB</CFormLabel>
                    <Input
                      type="date"
                      size="sm"
                      valid={studentDetails.dob !== ''}
                      name="dob"
                      placeholder="Date of birth"
                      value={studentDetails.dob}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Student Healthy Status</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.healthStatus !== ''}
                      name="healthStatus"
                      placeholder="Health Status"
                      value={studentDetails.healthStatus}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>




             


              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Student Parent Name</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.parentName !== ''}
                      name="parentName"
                      placeholder="Parent Name"
                      value={studentDetails.parentName}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Student Relationship</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.relationship !== ''}
                      name="relationship"
                      placeholder="Student Relationship"
                      value={studentDetails.relationship}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Student Parent Phone</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.parentPhone !== ''}
                      name="parentPhone"
                      placeholder="Parent Phone "
                      value={studentDetails.parentPhone}
                      onChange={handleChange}
                    />
                  </Col>
           
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                      <Button className="sb-3" size="sm" style={buttonStyle3} onClick={handleSubmit}>
                        Confirm
                      </Button>{' '}
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
export default EditStudent;

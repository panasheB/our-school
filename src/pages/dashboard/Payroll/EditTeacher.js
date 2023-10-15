import { useState } from 'react';
import { CFormLabel } from '@coreui/react';
import { Button, Input, Row, Col } from 'antd';
import { Select} from 'antd';
// import axios from 'axios';
// import swal from 'sweetalert';

function EditTeacher({ itemDetails }) {
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
    staffId: "",
    teacherName: "",
    teacherSurname: "",
    teacherproffession: "",
    teacherGender: "",
    teacherSubject: "",
    teacherDepartment: "",
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
      staffId: studentDetails.staffId,
      teacherName: studentDetails.teacherName,
      teacherSurname: studentDetails.teacherSurname,
      teacherSubject: studentDetails.teacherSubject,
      teacherDepartment: studentDetails.teacherDepartment,
    };
    console.log(data);
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
              <h3>Edit Teacher</h3>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>Teacher ID</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.staffId !== ""}
                      name="staffId"
                      placeholder="Teacher ID"
                      value={studentDetails.staffId}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Teacher Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.teacherName !== ""}
                      name="teacherName"
                      placeholder="Teacher Name"
                      value={studentDetails.teacherName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Teacher Surname
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.teacherSurname !== ""}
                      name="teacherSurname"
                      placeholder="Teacher Surname"
                      value={studentDetails.teacherSurname}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Teacher Proffession
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.teacherproffession !== ""}
                      name="teacherproffession"
                      placeholder="Proffession "
                      value={studentDetails.teacherproffession}
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
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
             
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Teacher Subject
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.teacherSubject !== ""}
                      name="teacherSubject"
                      placeholder="Teacher Subject"
                      value={studentDetails.teacherSubject}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Teacher Department
                    </CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={studentDetails.teacherDepartment !== ""}
                      name="teacherDepartment"
                      placeholder="Teacher Department"
                      value={studentDetails.teacherDepartment}
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
export default EditTeacher;

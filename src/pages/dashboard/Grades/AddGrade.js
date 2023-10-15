import { useState } from 'react';
import { CFormLabel } from '@coreui/react';
import { Button, Input, Row, Col } from 'antd';
import axios from "axios";
import swal from "sweetalert";

function AddGrade() {

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

  const [transaction, setTranscaction] = useState({
    gradeName: '',
    gradeTeacher: '',
 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTranscaction((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));
  };


  const sessionSuccess = () => {
    swal({
      title: "Successful!",
      text: "Grade Added!",
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

  function handleSubmit() {
    const data = {
        gradeName: transaction.gradeName,
        gradeTeacher: transaction.gradeTeacher,
    
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
    border: '0.5px solid lightgrey',
    padding: '10px'
  };

  return (
    <>
      <div style={containerStyle}>
        <>
          <div style={{ backgroundColor: 'white' }}>
            <div style={{ marginLeft: '10px' }}>
              <h3> Add Grade</h3>
           


              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel >Grade Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.gradeName !== ''}
                      name="gradeName"
                      placeholder="Grade Name"
                      value={transaction.gradeName}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Grade Teacher</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.gradeTeacher !== ''}
                      name="gradeTeacher"
                      placeholder="Grade Teacher"
                      value={transaction.gradeTeacher}
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
export default AddGrade;

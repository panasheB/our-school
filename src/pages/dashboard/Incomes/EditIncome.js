import { useState } from 'react';
import { CFormLabel } from '@coreui/react';
import { Button, Input, Row, Col } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';

function EditIncome({ itemDetails }) {
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
    incomeName: "",
    incomeAmount: "",
    incomeDescription: "",
    incomeCurrency: "",
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
      title: 'Successful!',
      text: 'Income Successfully Updated!',
      icon: 'success'
    });
  };

  

  const sessionError = () => {
    swal({
      title: 'Error!',
      text: 'Opps something went wrong!',
      icon: 'error'
    });
  };
const code = itemDetails?.code

function handleSubmit() {
  const data = {
    incomeName: transaction.incomeName,
    incomeAmount: transaction.incomeAmount,
    incomeDescription: transaction.incomeDescription,
    incomeCurrency: transaction.incomeCurrency,
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
              <h3>Edit Income</h3>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>Income Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.incomeName !== ""}
                      name="incomeName"
                      placeholder="Income Name"
                      value={transaction.incomeName}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Income Amount
                    </CFormLabel>

                    <Input
                      type="number"
                      size="sm"
                      valid={transaction.incomeAmount !== ""}
                      name="incomeAmount"
                      placeholder="Income Amount"
                      value={transaction.incomeAmount}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>Income Description</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.incomeDescription !== ""}
                      name="incomeDescription"
                      placeholder="Income Description"
                      value={transaction.incomeDescription}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Income Category
                    </CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.incomeCurrency !== ""}
                      name="incomeCurrency"
                      placeholder="Income Currency"
                      value={transaction.incomeCurrency}
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
export default EditIncome;

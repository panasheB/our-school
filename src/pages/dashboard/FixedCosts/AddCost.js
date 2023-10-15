import { useState } from 'react';
import { CFormLabel } from '@coreui/react';
import { Button, Input, Row, Col } from 'antd';
import axios from "axios";
import swal from "sweetalert";

function AddCost() {

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
    costName: '',
    costAmount: '',
    costCategory: '',
    costDescription: '',
    costCurrency:"",
    date:"",
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
      text: "Cost Added!",
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
    
        costName: transaction.costName,
        costAmount: transaction.costAmount,
        costCategory: transaction.costCategory,
        costDescription: transaction.costDescription,
        costCurrency:transaction.costCurrency,
        date:new Date()

     
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
              <h6> Add Cost</h6>
           


              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel >Cost Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.costName !== ''}
                      name="costName"
                      placeholder="Cost Name"
                      value={transaction.costName}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Cost Amount</CFormLabel>

                    <Input
                      type="number"
                      size="sm"
                      valid={transaction.costAmount !== ''}
                      name="costAmount"
                      placeholder="Cost Amount"
                      value={transaction.costAmount}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Cost Category</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.costCategory !== ''}
                      name="costCategory"
                      placeholder="Cost Category"
                      value={transaction.costCategory}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Cost Description</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.costDescription !== ''}
                      name="costDescription"
                      placeholder="Cost Description"
                      value={transaction.costDescription}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>


              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Cost Currency</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.costCurrency !== ''}
                      name="costCurrency"
                      placeholder="Cost Currency"
                      value={transaction.costCurrency}
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
export default AddCost;

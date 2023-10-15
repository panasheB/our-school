import { useState } from 'react';
import { Button, Card, Row, Col } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';

function PushIncome
({ itemDetails }) {
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
    amount: ''
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
      text: 'Income Successfully Push!',
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
  axios
    .delete("path", {
      data: { code: code },
      headers: {
        "Content-Type": "application/json",
      },
    })
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
              <h3> Push Income {itemDetails?.incomeName}</h3>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                  <Card title="Name">{itemDetails?.incomeName}</Card>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                  <Card title="Amount">{itemDetails?.incomeAmount}</Card>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                  <Card title="Currency">{itemDetails?.incomeCurrency}</Card>
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
export default PushIncome
;

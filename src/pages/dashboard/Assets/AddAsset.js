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
    assetNumber: '',
    description: '',
    serialNumber: '',
    location: '',
    cost:"",
    depreciationMethod:"",
    depreciationRate:"",
    owner:"",
    supplier:"",
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
      text: "Asset Added!",
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
        assetNumber: transaction.assetNumber,
        description: transaction.description,
        serialNumber: transaction.serialNumber,
        location: transaction.location,
        cost:transaction.cost,
        depreciationMethod: transaction.depreciationMethod,
        depreciationRate: transaction.depreciationRate,
        owner: transaction.owner,
        supplier:transaction.supplier,
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
              <h3> Add Asset</h3>
              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel >Asset Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.assetNumber !== ''}
                      name="assetNumber"
                      placeholder="Asset Name"
                      value={transaction.assetNumber}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Description</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.description !== ''}
                      name="description"
                      placeholder="Description"
                      value={transaction.description}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Serial Number</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.serialNumber !== ''}
                      name="serialNumber"
                      placeholder="Serial Number"
                      value={transaction.serialNumber}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Location</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.location !== ''}
                      name="location"
                      placeholder="Location"
                      value={transaction.location}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>


              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Cost</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.cost !== ''}
                      name="cost"
                      placeholder="Cost"
                      value={transaction.cost}
                      onChange={handleChange}
                    />
                  </Col>


                  <Col span={12}>
                    <CFormLabel className="label-txt">Depreciation Method</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.depreciationMethod !== ''}
                      name="depreciationMethod"
                      placeholder="Depreciation Method"
                      value={transaction.depreciationMethod}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Depreciation Rate</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.depreciationRate !== ''}
                      name="depreciationRate"
                      placeholder="Depreciation Rate"
                      value={transaction.depreciationRate}
                      onChange={handleChange}
                    />
                  </Col>


                  <Col span={12}>
                    <CFormLabel className="label-txt">Owner</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.owner !== ''}
                      name="owner"
                      placeholder="Depreciation Method"
                      value={transaction.owner}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Supplier</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.supplier !== ''}
                      name="supplier"
                      placeholder="Supplier"
                      value={transaction.supplier}
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

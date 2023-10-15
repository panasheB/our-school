import { useState } from 'react';
import { CFormLabel } from '@coreui/react';
import { Button, Input, Row, Col } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';

function EditCategory({ itemDetails }) {
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
    categoryName: "",
    categoryDescription: "",
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
      text: 'Category Successfully Updated!',
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
    categoryName: transaction.categoryName,
    categoryDescription: transaction.categoryDescription,
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
              <h3>Edit Category</h3>

              <div style={{ marginBottom: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>Category Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.categoryName !== ""}
                      name="categoryName"
                      placeholder="Category Name"
                      value={transaction.categoryName}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">
                      Category Description
                    </CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={transaction.categoryDescription !== ""}
                      name="categoryDescription"
                      placeholder="Cost Description"
                      value={transaction.categoryDescription}
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
export default EditCategory;

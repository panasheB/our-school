import { Tooltip } from "antd";
import { PlusOutlined , CopyOutlined} from '@ant-design/icons';
import AddTransaction from "./AddTransaction";


import { useState } from "react";
import OrderTable from "./OrdersTable";

const TransactionsPage = () => {
  const [toggleView, setToggleView] = useState(0);
  const handleToggleView = (viewIndex) => {
    setToggleView(viewIndex);
  };


  const containerStyle = {
    border: '0.5px solid lightgrey',
    padding: '10px'
  };

  return (
      <>
        <div style={{ backgroundColor: "white" }}>
          <div style={{ marginLeft: "10px" }}>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                justifyContent: "end",
              }}
            >
        
                <Tooltip fontSize="18px" title="Table View">
                  {" "}
                  <PlusOutlined onClick={() => handleToggleView(0)} style={{ color: 'blue', cursor: 'pointer',fontSize: '25px' }}/>{" "}
                </Tooltip>
           
                <Tooltip fontSize="18px" title="List View">
                  {" "}
                  <CopyOutlined onClick={() => handleToggleView(1)} style={{ marginLeft :"10px", color: 'green', cursor: 'pointer',fontSize: '25px' }} />{" "}
                </Tooltip>
            </div>
            <div>
              {toggleView === 0 && <AddTransaction />}
              {toggleView === 1 && <OrderTable />}
            </div>
          </div>
        </div>
      </>
  );
};

export default TransactionsPage;

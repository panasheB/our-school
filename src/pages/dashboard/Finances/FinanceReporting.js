import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

  
  // avatar style
  
  
  
  const FinanceReporting = () => {

    const data = [
        {
          name: 'Page A',
          totalcost: 4000,
          paidcost: 2400,
          balance: 1100,
          amt: 2400,
        },
        {
          name: 'Page B',
          totalcost: 3000,
          paidcost: 1398,
          balance:1000,
          amt: 2210,
        },
        {
          name: 'Page C',
          totalcost: 2000,
          paidcost: 9800,
          balance: 1300,
          amt: 2290,
        },
      
      ];
  
    return (
        <>
             


      <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalcost" fill="lightGreen" />
          <Bar dataKey="paidcost" fill="grey" />
          <Bar dataKey="balance" fill="yellow" />
        </BarChart>
       
  
        
        </>
   
    );
  };
  
  export default FinanceReporting;
  
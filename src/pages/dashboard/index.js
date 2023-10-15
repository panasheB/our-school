import { Grid, Typography } from "@mui/material";
import OrdersTable from "./OrdersTable";
import MainCard from "components/MainCard";
import AnalyticEcommerce from "components/cards/statistics/AnalyticEcommerce";
// import avatar1 from 'assets/images/users/watermark.jpeg';
// import { Watermark } from 'antd';

// avatar style

const DashboardDefault = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">School Management System</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Students"
          count="1000"
          percentage={59.3}
          extra="00000"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Staff"
          count="1"
          percentage={100}
          extra="1"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Transactions"
          count="18,800"
          percentage={27.4}
          isLoss
          color="warning"
          extra="1,943"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Revenue"
          count="100"
          percentage={25.6}
          isLoss
          color="warning"
          extra="$0000"
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
      />

      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transactions</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;

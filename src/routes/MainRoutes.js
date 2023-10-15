import { lazy } from 'react';
// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AddTransaction from 'pages/dashboard/AddTransaction';
import ItemsPage from 'pages/dashboard/ItemsPage';
import Adminstration from 'pages/dashboard/Adminstration';
import StudentsPage from 'pages/dashboard/Students/StudentsPage';
import TeachersPage from 'pages/dashboard/Teachers/TeachersPage';
import CostsPage from 'pages/dashboard/Costs/CostsPage';
import CategoriesPage from 'pages/dashboard/Categories/CategoriesPage';
import FinancePage from 'pages/dashboard/Finances/FinancePage';
import PayslipPage from 'pages/dashboard/Payroll/PayslipPage';
import StaffPage from 'pages/dashboard/Staff/StaffPage';
import AssetPage from 'pages/dashboard/Assets/AssetPage';
import FixedCostsPage from 'pages/dashboard/FixedCosts/FixedCostsPage';
import ReportPage from 'pages/dashboard/Reports/ReportPage';
import SubjectPage from 'pages/dashboard/Subjects/SubjectPage';
import CalaPage from 'pages/dashboard/Cala/CalaPage';
import CurrencyPage from 'pages/dashboard/Currencies/CurrencyPage';
import IncomePage from 'pages/dashboard/Incomes/IncomePage';
import GradesPage from 'pages/dashboard/Grades/GradesPage';
import TransactionsPage from 'pages/dashboard/TransactionsPage';
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));



const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },

    {
      path: 'typography',
      element: <Typography />
    },
    {
      path:'transactions',
      element:<AddTransaction/>
    },

    {
      path:'adminstration',
      element:<Adminstration/>
    },

    {
      path: 'login1',
      element: <AuthLogin />
    },

    {
      path: 'items',
      element: <ItemsPage />
    },

    {
      path: 'students',
      element: <StudentsPage />
    },
    {
      path: 'transactionDetails',
      element: <TransactionsPage />
    },
    {
      path: 'grades',
      element: <GradesPage />
    },
    {
      path: 'teachers',
      element: <TeachersPage />
    },

    {
      path: 'costs',
      element: <CostsPage />
    },

    {
      path: 'categories',
      element: <CategoriesPage />
    },
    {
      path: 'currency',
      element: <CurrencyPage />
    },
    {
      path: 'incomes',
      element: <IncomePage />
    },
    {
      path: 'finances',
      element: <FinancePage />
    },

    {
      path: 'reports',
      element: <ReportPage />
    },
    {
      path: 'payslips',
      element: <PayslipPage />
    },

    {
      path: 'staff',
      element: <StaffPage />
    },

    {
      path: 'subject',
      element: <SubjectPage />
    },
    {
      path: 'cala',
      element: <CalaPage />
    },
    {
      path: 'fixedcosts',
      element: <FixedCostsPage />
    },

    {
      path: 'assets',
      element: <AssetPage />
    },


    


    



    

    


 
  ]
};

export default MainRoutes;

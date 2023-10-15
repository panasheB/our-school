// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  FileOutlined,
  DollarOutlined,
  PayCircleOutlined,
  BookOutlined,
  SolutionOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  FileOutlined,
  DollarOutlined,
  PayCircleOutlined,
  BookOutlined,
  SolutionOutlined
};


const utilities = {
  id: 'utilities',
  title: 'Management',
  type: 'group',
  children: [
    {
      id: 'util-students',
      title: 'Students',
      type: 'item',
      url: '/students',
      icon: icons.AppstoreAddOutlined
    },
    {
      id: 'util-typography',
      title: 'Transactions',
      type: 'item',
      url: '/transactionDetails',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-items',
      title: 'Items',
      type: 'item',
      url: '/items',
      icon: icons.AntDesignOutlined
    },
    {
      id: 'util-grades',
      title: 'Grades',
      type: 'item',
      url: '/grades',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'util-teachers',
      title: 'Teachers',
      type: 'item',
      url: '/teachers',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-costs',
      title: 'Costs',
      type: 'item',
      url: '/costs',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-categories',
      title: 'Categories',
      type: 'item',
      url: '/categories',
      icon: icons.AppstoreAddOutlined
    },
    {
      id: 'util-carrencies',
      title: 'Currencies',
      type: 'item',
      url: '/currency',
      icon: icons.DollarOutlined
    },

    {
      id: 'util-incomes',
      title: 'Incomes',
      type: 'item',
      url: '/incomes',
      icon: icons.DollarOutlined
    },

    {
      id: 'util-finances',
      title: 'Finances',
      type: 'item',
      url: '/finances',
      icon: icons.DollarOutlined
    },
    {
      id: 'util-reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.FileOutlined
    },
    {
      id: 'util-payroll',
      title: 'Payroll',
      type: 'item',
      url: '/payslips',
      icon: icons.PayCircleOutlined
    },
    {
      id: 'util-staff',
      title: 'Staff',
      type: 'item',
      url: '/staff',
      icon: icons.SolutionOutlined
    },
    {
      id: 'util-subject',
      title: 'Subjects',
      type: 'item',
      url: '/subject',
      icon: icons.BookOutlined
    },
    {
      id: 'util-cala',
      title: 'Cala',
      type: 'item',
      url: '/cala',
      icon: icons.BookOutlined
    },
    {
      id: 'util-fixedcost',
      title: 'Fixed Cost',
      type: 'item',
      url: '/fixedcosts',
      icon: icons.PayCircleOutlined
    },
    {
      id: 'util-asset',
      title: 'Assets',
      type: 'item',
      url: '/assets',
      icon: icons.PayCircleOutlined
    },
    
    {
      id: 'util-transaction',
      title: 'Adminstration',
      type: 'item',
      url: '/adminstration',
      icon: icons.AppstoreAddOutlined
    },


  
  ]
};

export default utilities;

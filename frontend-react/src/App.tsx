import 'antd/dist/reset.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Categories from './Pages/Categories';
import Products from './Pages/Products';
import Home from './Pages/Home';
import NavigationBar from './components/NavigationBar';

import numeral from 'numeral';
import 'numeral/locales/vi';
import Employees from './Pages/Employees/indexEmployess';
import Customers from './Pages/Customers/indexCustomers';
import Suppliers from './Pages/Suppliers/indexSuppliers';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  backgroundColor: '#001529',
};

const contentStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#ffffff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

numeral.locale('vi');

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={headerStyle}>
          <NavigationBar />
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/products' element={<Products />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/suppliers' element={<Suppliers />} />
          </Routes>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

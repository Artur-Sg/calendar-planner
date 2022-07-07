import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <Layout>
      <NavBar></NavBar>
      <Content>
        <AppRouter />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;

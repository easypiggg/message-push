import React from 'react'
import { Layout } from 'antd';
import Aside from './components/layout/Aside';
import Header from './components/layout/Header';
import "./assets/app.less"
import { Outlet } from 'react-router-dom';
const {  Content } = Layout;

export default function App() {
  return (
    <div>
        <Layout id='app'>
            <Header/>
            <div className='container'>
            <Aside />
            <Content className='content'><Outlet/></Content>
            </div>
        </Layout>
    </div>
  )
}

import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { Button, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginApi, GetCodeApi } from '../request/api';
import './assets/login.less'

export default function Login() {
  //获取验证码
  const getCode = () => {
    GetCodeApi({
    }).then(res => {
      console.log(res);
      return res.code
    })
  }
  getCode();
  let navigate = useNavigate()
  // 获取URL来路，/ or /protected 
  const onFinish = (values) => {
    console.log(values);
    LoginApi({
      username: values.username,
      password: values.password,
      code: values.yzm
    }).then(res => {
      console.log(res);
      localStorage.setItem('userJwt', res.userJwt);
      localStorage.setItem('username', values.username);
      localStorage.setItem('role', 'admin');
      message.success('登陆成功,正在跳往首页');
      setTimeout(() => {
        navigate('/home');
      }, 1500)
    })
  };


  return (
    <div className='login'>
      <div className='login_box'>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            className='username'
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input size='large' placeholder="请输入用户名" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            className='password'
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password size='large' placeholder="请输入密码" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            className="yzm"
            name='yzm'
            rules={[{ required: true, message: '请输入验证码！' }]}>
            <Input size='large' placeholder="请输入验证码" />
          </Form.Item>

          <Form.Item>
            <Button className='login_button' size="large" type="primary" htmlType="submit" block >登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
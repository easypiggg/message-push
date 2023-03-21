import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GetUsersApi } from '../../request/api';
import { useEffect } from 'react';

function getItem(label, key, icon, type) {
  return {
    key,
    icon,
    label,
    type,
  };
}
//后端
const items = localStorage.getItem('role')==='admin'? [getItem('消息推送', '1'),getItem('查看用户', '2')]:[getItem('消息推送', '1')];

export default function Aside() {
  const navigate = useNavigate();
  useEffect(()=> {
    navigate('/home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const onClick = (e) => {
    if (e.key === '1') {
      navigate('/home');
    } else {
      navigate('/admin');
      GetUsersApi({
        userJwt: localStorage.getItem('userJwt')
      }).then(res => {
        console.log(res);
      })

    }
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 150,
      }}
      defaultSelectedKeys={['1']}
      mode="inline"
      theme="dark"
      items={items}
      className='aside'
    />
  );
};
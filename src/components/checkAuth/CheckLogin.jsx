import React from 'react'
import { Navigate} from 'react-router-dom'

export default function CheckLogin({ children }) {
  let username=localStorage.getItem('username')
  console.log(localStorage.getItem('username'));
  if (!username) {
    alert('您还没有登录')
    return <Navigate to='/login' replace />
  }
  return children 
}
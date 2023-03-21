import React from 'react'

export default function RequireAuth({ children }) {
  let role=localStorage.getItem('role');
  if (role!=='admin') {
    return <h1>你没有权限访问</h1>
  } 
  return children
}
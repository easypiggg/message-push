import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Admin from './pages/Admin';
import Login from './pages/Login';
import CheckLogin from './components/checkAuth/CheckLogin';
import CheckAdmin from './components/checkAuth/CheckAdmin'
import App from './App';

function RouteProvider() {
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CheckLogin><App /></CheckLogin>}>
          <Route path='/home' element={<CheckLogin><Home /></CheckLogin>} />
          <Route path='/admin' element={<CheckAdmin><Admin /></CheckAdmin>} />
        </Route>
        <Route path='/*' element={<h1>404</h1>} />
      </Routes>
  )
}

export default RouteProvider
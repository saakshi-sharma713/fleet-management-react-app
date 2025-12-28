import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './Pages/ProtectedRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<ProtectedRoute>
          <Admin/>
        </ProtectedRoute>}/>
      </Routes>
    </>
  )
}

export default App

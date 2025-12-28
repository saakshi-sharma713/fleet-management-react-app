import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [status,setStatus] = useState(localStorage.getItem("Authentication_State"));
     

    if(status == "false" || status == ""){
        return <Navigate to="/login"/>
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute

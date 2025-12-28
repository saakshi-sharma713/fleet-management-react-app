import React, { useState } from 'react'

const Admin = () => {
    const[vehicleNumber,setNumber]= useState("");
    const[selectedVehicle,setVehicle]= useState("");
  return (
    <div>
      <div className="Sidebar">
    
     <input style={LoginItems}type="email" placeholder="Enter Vehicle Number" value={vehicleNumber} onChange={(e)=>setNumber(e.target.value)}></input>
     <select >
      <option onChange={()=>{setVehicle(e.target.value)}}>Auto</option>
      <option >Car</option>
      <option >Truck</option>
      <option >Bus</option>
     </select>
      </div>
    </div>
  )
}

export default Admin

import React, { useContext, useState } from 'react'
import { fleetContext } from '../Context/Context';

const SideBar = () => {
    const {addfleetData} = useContext("fleetContext"); 
    const[vehicleNumber,setNumber]= useState("");
    const[selectedVehicle,setVehicle]= useState("");
    const[DriverName,setDriverName] = useState("");
    const [AvailabilityStatus,setAvaliabilityStatus] = useState("")
    console.log(selectedVehicle);


    function handleformData(){
        if(!vehicleNumber || !selectedVehicle || !DriverName || !AvailabilityStatus){
            alert("all Fields are required");
        }
        else{

        }
    }
  return (
    <div>
      <div className="Sidebar">
    
     <input  className="LoginItems" type="email" placeholder="Enter Vehicle Number" value={vehicleNumber} onChange={(e)=>setNumber(e.target.value)}></input>
     <select onChange={(e)=>{setVehicle(e.target.value)}}>
      <option value="Auto">Auto</option>
      <option value="Car">Car</option>
      <option value="Truck">Truck</option>
      <option value="Bus">Bus</option>
     </select>

     
      <input  className="LoginItems" type="email" placeholder="Enter Driver Name" value={DriverName} onChange={(e)=>setDriverName(e.target.value)}></input>

       <select onChange={(e)=>{setAvaliabilityStatus(e.target.value)}}>
      <option value="AVAILABLE">Available</option>
      <option value="UNAVAILABLE">Unavailable</option>
      
     </select>

     <button onClick={()=>{handleformData()}}>Fleet</button>
      </div>
    </div>
  )
}

export default SideBar

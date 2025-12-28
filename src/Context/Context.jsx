import React, { createContext, useState } from 'react'
export const  fleetContext = createContext();
const Context = ({children}) => {
 const [fleetData,setData] = useState([]);
    function addfleetData({VehicleRegNo,Category,DriverName,AvailabilityStatus}){
        setData([...fleetData,{VehicleRegNo,Category,DriverName,AvailabilityStatus,vehicleimage:"https://www.bing.com/th/id/OIP.j7f4DP-mNiX1CKsYLDkzhQHaE8?w=254&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"}])
    } 
    console.log(fleetData);
  return (
    <div>
      <fleetContext.Provider value={{addfleetData}}>
        {children}
      </fleetContext.Provider>
    </div>
  )
}

export default Context

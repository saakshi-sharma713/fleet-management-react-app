import React, { createContext } from 'react'
export const  fleetContext = createContext();
const Context = ({children}) => {
 const [fleetData,setData] = useState([]);
    function addfleetData({VehicleReg,NoCategory,DriverName,AvailabilityStatus, vehicleimage}){
        setData([...fleetData,{VehicleReg,NoCategory,DriverName,AvailabilityStatus, vehicleimage}])
    }
  return (
    <div>
      <fleetContext.Provider value={{addfleetData}}>
        {children}
      </fleetContext.Provider>
    </div>
  )
}

export default Context

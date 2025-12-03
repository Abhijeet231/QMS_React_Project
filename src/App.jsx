import { useState } from "react"
import Form from "./components/form/Form"
import Display from "./components/display/Display"


const App = () => {

  const [data, setData] = useState([]);

  const addCustomer = (customer) => {
    setData(prev => [...prev, customer]);
  }

  console.log("THIS IS DATA: ", data)

  return (
   <div>
     <h1 className='text-center text-4xl mt-14 mb-4 font-bold text-blue-700'>Queue Managment System</h1>
     <p className='mt-5 text-2xl text-center'>Manage Your Customers effeciently</p>

     <div className="flex gap-10 justify-center mt-16">

      <Form addCustomer = {addCustomer}/>
      
      <Display data = {data}/>
     </div>

   </div>
  )
}

export default App
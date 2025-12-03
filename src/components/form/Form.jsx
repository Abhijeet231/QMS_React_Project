import { useState } from "react";

const Form = ({addCustomer}) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const getName = (e) => {
    let name = e.target.value;
    setName(name);

  }

  const getService = (e) => {
        setService(e.target.value)
  }

  const handleSubmit = () => {
    if(!name || !service) return alert("Fill Everything")
    console.log("Name:", name);
    console.log("Service:", service);

    addCustomer({name,service})
    // REset fields
    setName("")
    setService("")

  }

  return (
    <div
      className="bg-[rgb(33,32,32)] h-auto w-auto p-3 
    "
    >
      <h3 className="text-blue-600 font-bold mb-2">Add to Queue</h3>
      <div>
        {/* // customer Name */}
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            placeholder="Customer Name"
            value={name}
            onChange={getName}
            className="border p-1 "
          />
        </div>

        {/* // Options */}
        <div className="mt-3">
          <label htmlFor="option"></label>
          <select id="option" className="border w-48 mt-2 bg-[rgb(33,32,32)]"
          value={service}
          onChange={getService}
          >
            <option >Select Service</option>
            <option value="Consultancy">Consultancy</option>
            <option value="Taxi">Taxi</option>
            <option value="Banking">Banking</option>
          </select>
        </div>

        <button onClick={handleSubmit} className="bg-blue-500 mt-4 rounded p-2 ">Add Customer</button>
      </div>
    </div>
  );
};

export default Form;

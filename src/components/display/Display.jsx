

const Display = ({ data }) => {
    
   
  

  return (
    <div className="bg-[rgb(33,32,32)] h-[300px] w-[500px] p-3">
      <h3 className="mb-4">Current Queue</h3>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-black mb-2 flex justify-between p-3 rounded text-white"
          >
            <div>
              <h6 className="font-bold">{item.name}</h6>
              <p>Service: {item.service}</p>
              <p className="text-amber-300"> Status</p>
            </div>

            <div className="flex gap-2">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                Serve
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;

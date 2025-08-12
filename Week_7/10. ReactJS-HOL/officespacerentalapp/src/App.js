import "./App.css";

function App() {
  const officeList = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
    },
    {
      name: "KGS",
      rent: 70000,
      address: "Bangalore",
    },
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>
      <img
        src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="office space"
        width="500px"
      />
      {officeList.map((space, index) => (
        <div key={index}>
          <h2>{space.name}</h2>
          <p>
            Rent:{" "}
            <span style={{ color: space.rent < 60000 ? "red" : "green" }}>
              {space.rent}
            </span>
          </p>
          <p>Address: {space.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

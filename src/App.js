import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import logo from "./weather.png";

function App() {
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      if (long != null && lat != null) {
        await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.log(result);
          });
      }
    };

    fetchData();
  }, [long, lat]);

  return (
    <>
      <div className="App">
        <div className="Head-section">
          <img src={logo} className="logo" />
        </div>
        <div>
          {typeof data.main != "undefined" ? (
            <Weather weatherdata={data} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

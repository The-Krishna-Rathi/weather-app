import "./styles.css";
import moment from "moment/moment";
import { Button } from "semantic-ui-react";

function refresh() {
  window.location.reload();
}

const Weather = ({ weatherdata }) => {
  return (
    <div className="card">
      <div className="header">
        <span>{weatherdata.name}</span>
        <Button
          className="button"
          inverted
          color="secondary"
          circular
          icon="refresh"
          onClick={refresh}
        />
      </div>
      <div className="body">
        <div className="sec">
          <div className="item date">{moment().format("LL")}</div>
          <div className="item description">
            {weatherdata.weather[0].description}
          </div>
        </div>

        <div className="sec">
          <div className="item">
            Temperature: {(weatherdata.main.temp - 273).toFixed(2)}&deg;C
          </div>
          <div className="item">Humidity: {weatherdata.main.humidity} </div>
        </div>

        <div className="sec">
          <div className="item">
            Sunrise :{" "}
            {new Date(weatherdata.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </div>
          <div className="item">
            Sunset :{" "}
            {new Date(weatherdata.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

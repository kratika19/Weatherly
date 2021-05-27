import './index.css';
import React from 'react'

const api = {
  key: "7a8ad39facdb8caac7d5638577b88153",
  base: "http://api.openweathermap.org/data/2.5/"
}
function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month}'${year}`
  }
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" placeholder="Search here"
            className="search-bar" />
        </div>
        <div>
          <div className="location-box">
            <div className="location">New York City, US</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15°C
            </div>
            <div className="weather">
              Sunny
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

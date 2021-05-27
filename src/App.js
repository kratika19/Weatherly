import './index.css';
import React from 'react'

const api = {
  key : "7a8ad39facdb8caac7d5638577b88153",
  base : "http://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" placeholder="Search here"
          className="search-bar" />
        </div>
      </main>
    </div>
  );
}

export default App;

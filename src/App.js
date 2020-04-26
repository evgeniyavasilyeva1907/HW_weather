import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/form";
import Weather from "./components/weather";
import WeatherHours from "./components/weather_hours";
import WeatherDaily from "./components/weather_daily";

const API_KEY = "4c084b1a8061eeada6ecba832dd44a9f"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      error: undefined,
      icon: undefined,
      main: undefined,
      list_hours: [],
      daily: []
    };
  }
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
      console.log(data)
      const lon = data.coord.lon;
      const lat = data.coord.lat;

      let temp = Math.round(data.main.temp) - 273;

      const api_url_daily = await
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      const data_daily = await api_url_daily.json();
      console.log(data_daily)

      let list = data_daily.hourly.slice(0, 7);
      let daily = data_daily.daily.slice(1, 8);
      this.setState({
        temp: temp,
        icon: data.weather[0].icon,
        main: data.weather[0].main,
        city: data.name,
        country: data.sys.country,
        list_hours: list,
        daily: daily,
        error: undefined
      });
    }
    else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        icon: undefined,
        main: undefined,
        error: "Введите название города"
      })
    }
  }

  render() {

    return (
      <div className="container_main">
        <h3>Введите город, чтобы узнать погоду</h3>
        <Form weatherMethod={this.gettingWeather} />
        <br />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
          icon={this.state.icon}
          main={this.state.main}
        />
        <WeatherHours list={this.state.list_hours} />
        <WeatherDaily city={this.state.city} daily = {this.state.daily}/>
      </div>
    );

  }
}

export default App;

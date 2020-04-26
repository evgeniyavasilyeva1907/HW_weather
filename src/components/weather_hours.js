import React from "react";
import moment from "moment";
import "./weather_hours.css";

class Weather_hours extends React.Component {
    render() {
        return (
            <div className="cont">
                {this.props.list.map((weatherForHour) => {
                    return (<div className="weather" key={`temp-${weatherForHour.temp}`}>
                        <div>{Math.round(weatherForHour.temp) - 273}</div>
                        <div> {moment.unix(weatherForHour.dt).format('MMMM Do, h:mm a')}</div>
                        <div>{weatherForHour.weather[0].main}</div>
                        <div><img src={`http://openweathermap.org/img/w/${weatherForHour.weather[0].icon}.png`} alt="weather icon" /> </div>
                    </div>

                    )
                })}
            </div >
        );
    }
}

export default Weather_hours;
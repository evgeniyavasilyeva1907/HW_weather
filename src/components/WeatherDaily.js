import React from "react";
import moment from "moment";
import "./WeatherDaily.css";
class WeatherDaily extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&
                    <div>
                        <h4>Температура на неделю ({this.props.city})</h4>
                        <div className="cont">
                        {this.props.daily.map((weatherDaily) => {
                    return (<div className="weather" key={`tempdaily-${weatherDaily.temp.day}`}>
                        <div>{Math.round(weatherDaily.temp.day) - 273}</div>
                        <div> {moment.unix(weatherDaily.dt).format('MMMM Do, h:mm a')}</div>
                        <div>{weatherDaily.weather[0].main}</div>
                        <div><img src={`http://openweathermap.org/img/w/${weatherDaily.weather[0].icon}.png`} alt="weather icon" /> </div>
                    </div>

                    )
                })}
            </div >
                    </div>
                    
                }
                <p>{this.props.error}</p>
                
            </div>
        );
    }
}

export default WeatherDaily;
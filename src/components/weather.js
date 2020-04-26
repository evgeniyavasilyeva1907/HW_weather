import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&
                    <div>
                        <h4>Местоположение: {this.props.city}, {this.props.country}</h4>
                        <div>
                             <h4>Температура сейчас</h4>
                             <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon" />
                             {this.props.main} {this.props.temp}
                        </div>
                        
                        <br />
                        <h4>Почасовая погода ({this.props.city})</h4>
                    </div>
                    
                }
                <p>{this.props.error}</p>
                
            </div>
        );
    }
}

export default Weather;
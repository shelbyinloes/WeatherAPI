import React from 'react';

const weatherStyle ={ 
    backgroundColor: "#FFBCB4",
    paddingBottom: 20
}

const spanStyle ={
    color: "white", 
    fontSize: 20
}


const Weather = props => (
        <div className="container" style={weatherStyle}>
            {
            props.city && props.country && <p><span style={spanStyle}>Location:</span> {props.city}, {props.country}</p>
            }  
            {
            props.temp && <p><span style={spanStyle}>Temperature:</span> {props.temp} F</p>
            }
            {
            props.humidity && <p><span style={spanStyle}>Humidity:</span> {props.humidity}%</p>
            }
            {
            props.description && <p><span style={spanStyle}>Conditions:</span> {props.description}</p>
            }
            {
            props.error && <p>{props.error}</p>
            }
        </div>
    );

export default Weather;
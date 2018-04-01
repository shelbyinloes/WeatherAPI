import React from 'react';

const formStyle ={
    padding: 30,
    backgroundColor: "#FFBCB4"
}

const Form = props => (
    <div style={formStyle} className="container">
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..."></input>
            <input type="text" name="country" placeholder="Country..."></input>
            <button>Get Weather</button>
        </form>
    </div>
);

export default Form;
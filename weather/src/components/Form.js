import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..."></input>
            <input type="text" name="country" placeholder="Country..."></input>
            <button>Get Weather</button>
        </form>
    </div>
);

export default Form;
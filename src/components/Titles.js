import React from 'react';

const titleStyle ={
    height: 300,
    backgroundImage: "URL(http://tricountytech.edu/wp-content/uploads/2017/10/Illustrator-Banner.png)", 
    backgroundSize: "cover", 
    backgroundPosition: "center 30%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center", 
    marginTop: 50
}

const Titles =()=> (
    <div style={titleStyle} className="container main">
        <h1>Weather Finder</h1>
        <p>Find out temperature, conditions, and more</p>
    </div>
)

export default Titles;
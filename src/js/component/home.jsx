import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lightColor, chooselightColor] = useState("");
  
	const handleColorClick = (color) => {
	  chooselightColor(color);
	};
  
	return (
	  <div className="container text-center">
		<div className="line"></div>
		<div className="trafficLight row justify-content-center">
		  <div
			onClick={() => handleColorClick("red")}
			className={"col-1 light red" + (lightColor === "red" ? " glowRed" : "")}
		  ></div>
		  <div
			onClick={() => handleColorClick("yellow")}
			className={"col-1 light yellow" + (lightColor === "yellow" ? " glowYellow" : "")}
		  ></div>
		  <div
			onClick={() => handleColorClick("green")}
			className={"col-1 light green" + (lightColor === "green" ? " glowGreen" : "")}
		  ></div>
		</div>
		<div className="row mt-4">
		  <button onClick={() => chooselightColor("")} className="btn btn-secondary">
			Turn off
		  </button>
		</div>
	  </div>
	);
};
  
export default Home;
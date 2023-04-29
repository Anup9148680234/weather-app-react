import { useState } from 'react';
import './App.css';

function App() {
  let [lat , setLat] = useState();
   const month = new Date().getMonth() + 1; //Currently its Spring
  //const month = 12; //Winter
  // const month = 7; //Summer
  //const month = 10; //Autumn

  //Background color for the Season Message
  let style = { backgroundColor: "" };
  //Season's icon src  
  let iconSrc = ""; 
  //Season info/message
  let message = "";

  navigator.geolocation.getCurrentPosition((position)=>{
    setLat(position.coords.latitude);
  });

  if (lat>0 && (month===12 || month<=2)) {
    message = "Winter - Northern Hemisphere";
    style = { backgroundColor: "aqua" };
    iconSrc = "https://c.tadst.com/gfx/n/i/season-winter.svg"; 
  }
  else if(lat>0 && month>=3 && month<=5){
    message = "Spring - Northern Hemisphere";
    style = { backgroundColor: "limegreen" };
    iconSrc = "https://c.tadst.com/gfx/n/i/season-spring.svg";
  }
  else if(lat>0 && month>=6 && month<=8){
    message = "Summer - Northern Hemisphere";
    style = { backgroundColor: "orangered" };
    iconSrc = "https://c.tadst.com/gfx/n/i/season-summer.svg";
  }
  else if(lat>0 && month>=9 && month<=11){
    message = "Autumn - Northern Hemisphere";
    style = { backgroundColor: "yellow" };
    iconSrc = "https://c.tadst.com/gfx/n/i/season-autumn.svg";
  }
  else {
    message = "Error";
  }

  return (
    <div id="App">
      <div id="icon">
        <img id="icon_img" src={iconSrc} />
      </div>
      <div id="lat">Lattitude - {lat}</div>
      <div id="mes" style={style}> {message}</div>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import Haupt from "./Haupt";
import Form from "./Form";
import WetterInfo from "./WetterInfo";

const ApiKey ="9e17f6c782594ed898d443a8445a6085";
class App extends React.Component{

  state={
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

 wetterAnfragen = async(e) => {
    e.preventDefault();
    const City =e.target.elements.city.value;
    
    if (City) {
      const Api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}&units=metric`);
    const Daten = await Api_url.json();
      let sunset = Daten.sys.sunset;
      let sunrise= Daten.sys.sunrise;
      let date= new Date(sunset * 1000);
      let date1= new Date(sunrise * 1000);
      
      let sunsetDate = date.getHours()+ ":" + date.getMinutes();
      let sunriseDate = date1.getHours()+ ":" + date1.getMinutes();
    this.setState({
      temp: Math.floor(Daten.main.temp),
      city: Daten.name,
      country: Daten.sys.country,
      pressure: Daten.main.pressure,
      humidity: Daten.main.humidity,
      sunrise: sunriseDate,
      sunset: sunsetDate,
      error: undefined
      });
    }
    else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: " Geben sie den korrekten Ortsnamen an."
      });
    }
    
    
  }
  render(){
    return (  
      <div className="wrapper">
        
            <div className="row">
              <div className="haupt">
                <Haupt/>
              </div>
              
              < div className="info">
                <Form anfrage={this.wetterAnfragen}/>
                <WetterInfo 
                      temp= {this.state.temp}
                      city= {this.state.city} 
                    country={this.state.country} 
                    pressure={this.state.pressure} 
                    humidity= {this.state.humidity} 
                    sunrise={this.state.sunrise} 
                    sunset= {this.state.sunset} 
                    error={this.state.error}
                    />
                
              </div>
            </div>
          </div>
        
     
);
  }  
}

export default App;


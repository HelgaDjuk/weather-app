import React from "react";

class WetterInfo extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && <div>
                 <p>Temperatur: {this.props.temp}</p>
                <p>Ihre Stadt: {this.props.city} {this.props.country}</p>
                <p>Luftdruck: {this.props.pressure}</p>
                <p>Luftfeuchtigkeit: {this.props.humidity} </p>
                <p>Sonnenaufgang: {this.props.sunrise} </p>
                <p>Sonnenuntergang: {this.props.sunset} </p>
                    
                </div>}
                <p className="error">{this.props.error}</p>
    
            </div>
        )
    }
}
export default WetterInfo;
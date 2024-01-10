import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.anfrage}>
                    <input type="text" name="city" placeholder="Ihre Stadt"></input>
                    <button>Wetter anfragen</button>
                </form>
            </div>
        )
    }
}
export default Form;
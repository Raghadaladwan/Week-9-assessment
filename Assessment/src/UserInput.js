import React, { Component } from 'react';
class UserInput extends Component {

   constructor(){
        super()
        this.state ={
            id:this.id,
            value:this.value
             }
  this.eventHandler = this.eventHandler.bind(this)
}
eventHandler (id) {

 const array= this.props.inputdata;

}
    render() { 
        return ( 
            <div>
                <input type='text'
                        id={this.id}
                        value={this.value}
                /> 
            </div>
         );
    }
}
 
export default UserInput;
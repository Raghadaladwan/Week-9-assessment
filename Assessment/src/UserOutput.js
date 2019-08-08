import React, { Component } from 'react';

class UserOutPut extends Component {
    constructor()
    {
       super()
       state = {
       
         }
    }
   
    render() { 
        return ( 
            <div>
                <p>Username : {this.props.eventHandler.value}</p>
                <p>I hope I'll be overwitten!</p>
            </div>
         );
    }
}
 
export default UserOutPut;
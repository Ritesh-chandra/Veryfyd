import React, { Component } from "react";
import {
    Button,
    ButtonGroup,
    Card
  } from "reactstrap";
class SharedByMe extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            user:[{name:'Mohit'},{name:'Amit'},{name:'Sumit'}]
        };
    }
    
    render(){
        return(
            <div>
              {
                  this.state.user.map((person)=>{
                     return( 
                         <form>
                          <li>{person.name}<Button size='sm'className="float-right">End</Button></li>
                          <br></br>
                      </form>);
                  }
        )
              }
            </div>
        );
    }
}
export default SharedByMe;
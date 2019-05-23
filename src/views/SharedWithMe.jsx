import React, { Component } from "react";
import {
    Button,
    ButtonGroup,
    Card
  } from "reactstrap";
class SharedWithMe extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            shareData: [],
            user:[{name:'rajat'},{name:'munit'},{name:'abhijit'}],
            isLoading: true,
            errors: null
        };
    }
    
    render(){
        console.log(this.state.user);
        return(
            <div>
              {
                  this.state.user.map((person)=>{
                     return( 
                         <form>
                          <li>{person.name}<Button size='sm' className="float-right">End</Button></li>
                          <br></br>
                      </form>);
                  }
        )
              }
            </div>
        );
    }
}
export default SharedWithMe;
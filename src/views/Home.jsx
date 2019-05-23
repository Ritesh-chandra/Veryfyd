import React, { Component } from "react";
import SharedByMe from './SharedByMe';
import SharedWithMe from './SharedWithMe';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody
} from "reactstrap";
import classNames from "classnames";
class Home extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      comp: SharedByMe
    };
  }
  setcomp = name => {
    this.setState({
      comp: name
    });
  }
  render(){
    var CurrentState=this.state.comp;
  return (
    <div className="content"> 
    <div>
  <h1>Sharing Status</h1>
 
                     <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.comp === SharedByMe
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setcomp(SharedByMe)}
                        >
                          <input
                            defaultChecked
                            type="radio"
                            className="d-none"
                            name="options"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Shared By Me
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.comp === SharedWithMe
                          })}
                          onClick={() => this.setcomp(SharedWithMe)}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Shared With Me
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                      </ButtonGroup>
                      <br></br><br></br>
                      
   </div>
   <br></br>
   <div className="container">
   <Card>
     <CardBody>
   <CurrentState />
   </CardBody>
   </Card>
   </div>
   </div>
  );
}
}
export default Home;

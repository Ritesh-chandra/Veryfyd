import React from "react";

import { Button, Label, FormGroup } from 'reactstrap';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Collapse
} from "reactstrap";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.state = { 
      collapse1: false ,
      collapse2: false,
      collapse3: false,
      collapse4: false
    };
  }

  toggle1() {
    this.setState(state => ({ collapse1: !state.collapse1 }));
  }
  toggle2() {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  }
  toggle3() {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  }
  toggle4() {
    this.setState(state => ({ collapse4: !state.collapse4 }));
  }
  render() {
    return (
       <div className="content">
       <form>
       <div>
        <Button color="primary" onClick={this.toggle1} style={{ marginBottom: '1rem' }}size="lg" block>Identity</Button>
        <Collapse isOpen={this.state.collapse1}>
          <Card>
            <CardBody>
            
              <input type="checkbox" value="Name" />Name<br></br>
              <input type="checkbox" value="Date Of Birth" />Date Of Birth<br></br>
              <input type="checkbox" value="Age" />Age<br></br>
              <input type="checkbox" value="Gender" />Gender<br></br>
            
            </CardBody>
          </Card>
        </Collapse>
        </div>
        <div>
        <Button color="primary" onClick={this.toggle2} style={{ marginBottom: '1rem' }}size="lg" block>Address</Button>
        <Collapse isOpen={this.state.collapse2}>
          <Card>
            <CardBody>
            <input type="checkbox" value="Temp" />Temporary Address<br></br>
              <input type="checkbox" value="perm" />Permanent Address<br></br>
            </CardBody>
          </Card>
        </Collapse>
        </div>
        <div>
        <Button color="primary" onClick={this.toggle3} style={{ marginBottom: '1rem' }}size="lg" block>Health</Button>
        <Collapse isOpen={this.state.collapse3}>
          <Card>
            <CardBody>
            <input type="checkbox" value="Blood" />Blood Pressure<br></br>
              <input type="checkbox" value="Cholestrol" />Cholestrol<br></br>
              <input type="checkbox" value="Diabetes" />Diabetes<br></br>
            </CardBody>
          </Card>
        </Collapse>
        </div>
        <div>
        <Button color="primary" onClick={this.toggle4} style={{ marginBottom: '1rem' }}size="lg" block>Education</Button>
        <Collapse isOpen={this.state.collapse4}>
          <Card>
            <CardBody>
            <input type="checkbox" value="HIGH" />Higher<br></br>
              <input type="checkbox" value="SECOND" />Secondary<br></br>
              <input type="checkbox" value="UNDER" />Under Graduate<br></br>
              <input type="checkbox" value="POST" />Post Graduate<br></br>
            </CardBody>
          </Card>
        </Collapse>
        </div>
        <input type = "text" id = "user_name" placeholder = "Enter Sharing Username"></input>
        <Button className="float-right" >Share</Button>
        </form>
       </div>
    );
  }
}

export default Share;

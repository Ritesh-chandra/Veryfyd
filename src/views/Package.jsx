import React from "react";
import cookie from "react-cookies";
import axios from "axios";

import { Button, Label, FormGroup } from 'reactstrap';
// reactstrap components
import {
  Card,
  CardBody,
  Form,
  Row,
  Input,
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
      collapse4: false,
      Name:" ",
      Dob:" ",
      age:" ",
      gender:" ",
      phone:" ",
      ug:" ",
      pg:" ",
      high:" ",
      second:" ",
      perm: " ",
      temp: " ",
      bp: " ",
      cholestrol: " ",
      diabetes: " ",
      user_id:" "
    };
  }

  componentDidMount(){
    this.state = {phone : cookie.load('phone')}
    var a =this.state.phone;
    axios.get(`http://3.16.128.1/getRegistration/${this.state.phone}`)
        .then(res =>{
          console.log(res);
            this.setState({
               "user_id":res.data.user_id,
            })
        })
  }
  handleSubmit = event => {
    event.preventDefault();
    fetch("http://3.16.128.1/postBooking",{
        method:'POST',
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify({
          "package_id":1, 
          "booking_id":"IDENTITY",
          "data_dump":`${this.state.Name},${this.state.Dob},${this.state.age},${this.state.gender}`,
            "user_id":this.state.user_id,
            "amount":123,
            "total_amount":123,
          "is_paid":"1",
          "is_delivered":"1",
          "booking_datetime":"24th march"
        })
   })
}
handleSubmit1 = event => {
  event.preventDefault();
  fetch("http://3.16.128.1/postBooking",{
      method:'POST',
      headers:{
          "Content-Type":'application/json'
      },
      body:{
        "package_id":2,
        "booking_id": "ADDRESS",
        "data_dump":`${this.state.temp},${this.state.perm}`,
        "user_id": this.state.user_id,
        "amount": 123,
        "total_amount":123,
        "is_paid":"1",
        "is_delivered":"1",
        "booking_datetime":"24th march"
      }
 })
}
handleSubmit2 = event => {
  event.preventDefault();
  fetch("http://3.16.128.1/postBooking",{
      method:'POST',
      headers:{
          "Content-Type":'application/json'
      },
      body:JSON.stringify({
        "package_id":3,
        "booking_id":"HEALTH PACKAGE",
        "data_dump":`${this.state.Name},${this.state.Dob},${this.state.age},${this.state.gender}`,
        "user_id": this.state.user_id,
        "amount": 123,
        "total_amount":123,
        "is_paid":'1',
        "is_delivered":'1',
        "booking_datetime":"24th march"
      })
 })
}
 handleSubmit3 = event => {
    event.preventDefault();
    fetch("http://3.16.128.1/postBooking",{
        method:'POST',
        headers:{
            "Content-Type":'application/json;charset=UTF-8'
        },
        body:JSON.stringify({
          "package_id":4,
          "booking_id":"EDUCATION PACKAGE",
          "data_dump":`${this.state.ug},${this.state.pg},${this.state.high},${this.state.second}`,
          "user_id": this.state.user_id,
          "amount": 123,
          "total_amount":123,
          "is_paid":"1",
          "is_delivered":"1",
          "booking_datetime":"24th march"
        })
   })
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
       <Form>
       <div>
        <Button color="primary" onClick={this.toggle1} style={{ marginBottom: '1rem' }}size="lg" block><p className="float-left" style={{fontWeight:'bold',fontSize:'20px'}}>Identity Package-Cost is 125/-</p><p className="float-right" style={{fontWeight:'bold',fontSize:'20px'}}>PAY NOW</p></Button>
        <Collapse isOpen={this.state.collapse1}>
        <Card>
        <CardBody>
            <FormGroup row>
            <Label for="name" sm={4}>Name</Label>
            <Col sm={8}>
            <Input id="name" type="text" name="Name" placeholder="Name"onChange={event => {this.setState({Name:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="DOB" sm={4}>Date Of Birth</Label>
            <Col sm={8}>
            <Input id="DOB" type="text" name="DOB" placeholder="Date of Birth"onChange={event => {this.setState({Dob:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>  
            <FormGroup row>
            <Label for="Age" sm={4}>Age</Label>
            <Col sm={8}>
            <Input id="Age" type="text" name="Age" onChange={event => {this.setState({age:event.target.value});}}placeholder="Age" required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="Gender" sm={4}>Gender</Label>
            <Col sm={8}>
            <Input id="Gender" type="text" name="Gender" placeholder="Gender" onChange={event => {this.setState({gender:event.target.value});}}required={true}/>
            </Col>
            </FormGroup>
            </CardBody>
          </Card>
          <Button className="float-right" onClick = {this.handleSubmit}>Submit</Button>
        </Collapse>
        </div>
        </Form>
        <Form>
        <div>
        <Button color="primary" onClick={this.toggle2} style={{ marginBottom: '1rem' }}size="lg" block><p className="float-left" style={{fontWeight:'bold',fontSize:'20px'}}>Address Package - Cost is 195/-</p><p className="float-right" style={{fontWeight:'bold',fontSize:'20px'}}>PAY NOW</p></Button>
        <Collapse isOpen={this.state.collapse2}>
          <Card>
            <CardBody>
            <FormGroup row>
            <Label for="Temp" sm={4}>Temporary Address</Label>
            <Col sm={8}>
            <Input id="Temp" type="text" name="Temp" placeholder="Temporary Address" onChange = {event => {this.setState({temp:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="Perm" sm={4}>Permanent Address</Label>
            <Col sm={8}>
            <Input id="Perm" type="text" name="Perm" placeholder="Permanent Address" onChange = {event => {this.setState({perm:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            </CardBody>
          </Card>
          <Button className="float-right" onClick = {this.handleSubmit1}>Submit</Button>
        </Collapse>
        </div>
        </Form>
        <Form>
        <div>
        <Button color="primary" onClick={this.toggle3} style={{ marginBottom: '1rem' }}size="lg" block><p className="float-left" style={{fontWeight:'bold',fontSize:'20px'}}>Health Package-Cost is 126/-</p><p className="float-right" style={{fontWeight:'bold',fontSize:'20px'}}>PAY NOW</p></Button>
        <Collapse isOpen={this.state.collapse3}>
          <Card>
            <CardBody>
            <FormGroup row>
            <Label for="blood" sm={4}>Blood Pressure</Label>
            <Col sm={8}>
            <Input id="blood" type="text" name="blood" placeholder="Blood Pressure" onChange = {event => {this.setState({bp:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="cho" sm={4}>Cholestrol</Label>
            <Col sm={8}>
            <Input id="cho" type="text" name="cho" placeholder="Cholestrol" onChange = {event => {this.setState({cholestrol:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="diabetes" sm={4}>Diabetes</Label>
            <Col sm={8}>
            <Input id="diabetes" type="text" name="diabetes" placeholder="Diabetes" onChange = {event => {this.setState({diabetes:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            </CardBody>
          </Card>
         <Button className="float-right" onClick = {this.handleSubmit2}>Submit</Button>
        </Collapse>
        </div>
        </Form>
        <Form>
        <div>
        <Button color="primary" onClick={this.toggle4} style={{ marginBottom: '1rem' }}size="lg" block><p className="float-left" style={{fontWeight:'bold',fontSize:'20px'}}>Education Package-Cost is 195/-</p><p className="float-right" style={{fontWeight:'bold',fontSize:'20px'}}>PAY NOW</p></Button>
        <Collapse isOpen={this.state.collapse4}>
          <Card>
            <CardBody>
            <FormGroup row>
            <Label for="high" sm={4}>Higher Education</Label>
            <Col sm={8}>
            <Input id="high" type="text" name="high" placeholder="HIGHER" onChange = {event => {this.setState({high:event.target.value});}}required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="second" sm={4}>Secondary Education</Label>
            <Col sm={8}>
            <Input id="second" type="text" name="second" placeholder="SECOND" onChange = {event => {this.setState({second:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="under" sm={4}>Under Graduate</Label>
            <Col sm={8}>
            <Input id="under" type="text" name="under" placeholder="UNDERGRADUATE" onChange = {event => {this.setState({ug:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="post" sm={4}>Post Graduate</Label>
            <Col sm={8}>
            <Input id="post" type="text" name="post" placeholder="POSTGRADUATE" onChange = {event => {this.setState({pg:event.target.value});}} required={true}/>
            </Col>
            </FormGroup>
            </CardBody>
          </Card>
          <Button className="float-right" onClick = {this.handleSubmit3}>Submit</Button>
        </Collapse>
        </div>
        </Form>
       </div>
    );
  }
}

export default Share;

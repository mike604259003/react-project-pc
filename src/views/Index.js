import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import api from '../Url_api';
import axios from 'axios';


import Header from "../components/Headers/Header.js";
import Stock from "./Stock";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      data:[],
      stock: null
    };
   
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

  componentDidMount(){
    setInterval( () => {
      this.loadStock(api('loadStock'));
  },1000)
    
  }
  
  loadStock(api){
    axios.get(api)
    .then(res => {
      const data = res.data; 
      this.setState({ data });
    })

  }


  render() {
    return (
      <>
        <Header />
       
      
        <Container className="mt--7" fluid>
      
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <center><h3 className="mb-0">ยินดีต้อนรับเข้าสู่ระบบ</h3>
                      <img src="https://myseshabu.com/image/1212.jpg" alt="welcome"/></center>
                    </div>
                   
                  </Row>
                </CardHeader>
               
              </Card>
            </Col>
          
          </Row>
        </Container>
         
        
      </>
    );
  }
}

export default Index;

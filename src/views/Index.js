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
  Col,
  CardTitle
} from "reactstrap";
import api from '../Url_api';
import axios from 'axios';
import Header from "../components/Headers/Header.js";


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
      this.loadTable(api('getTable'));
  },1000)
    
  }
  
  loadTable(api){
    axios.get(api)
    .then(res => {
      const data = res.data.data; 
      this.setState({ data:data });
      
    })

  }


  render() {
    return (
      <>
        <Header />
       
      
        <Container className="mt--7" fluid>
      
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow" style={{backgroundColor:"#f4f5f7",padding:"80px"}}>
              <center><h2>สถานะโต๊ะ</h2></center>
              <Row>
              { this.state.data.map(data =>
                <Col lg="6" xl="4" style={{marginTop:"15px"}}>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            โต๊ะที่ {data.t_number}
                          </CardTitle>
                          <span className="text-muted mb-0">
                            สถานะ {data.t_status == "ready" ? <span className="text-danger mr-2">
                                                            
                                                              ว่าง
                                                            </span>
                                                            :<span className="text-success mr-2">
                                                              
                                                              ใช้งาน
                                                              </span>
                                                            }
                                                            
                          </span>
                        </div>
                        <Col className="col-auto">
                        {data.t_status == "unready" ? <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                                                      <i className="ni ni-check-bold" />
                                                    </div>
                                                          :<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                          <i className="ni ni-fat-remove" />
                                                        </div>
                                                          }
                          
                        </Col>
                      </Row>
                     
                    </CardBody>
                  </Card>
                </Col>
              )}
              </Row>
              
              </Card>
              
            </Col>
          
          </Row>
          
        </Container>
         
        
      </>
    );
  }
}

export default Index;

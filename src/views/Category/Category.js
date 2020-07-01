import React from "react";
import {
  Button,
  Card,
  CardTitle,
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
import api from '../../Url_api';
import axios from 'axios';


import Header from "../../components/Headers/HeaderCategory";

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      category:0
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
  
    axios.get(api('getRowcategory'))
    .then(res => {
      const category = res.data[0].num;
      this.setState({ category });
     
      
    })

  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
         
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
            <div style={{ width: "18rem" }}>
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
            <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            ประเภทอาหาร
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">{this.state.category}</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="ni ni-collection" />
                          </div>
                        </Col>
                      </Row>
            </CardBody>
          </Card>
        </div>
            </Col>
           
          </Row>
        </Container>
      </>
    );
  }
}

export default Category;

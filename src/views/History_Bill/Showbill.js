import React from 'react';
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
import axios from 'axios'; 
import api from '../../Url_api';
import DatePicker from "react-datepicker";
import {  format } from 'date-fns'
  
  
import Header from "../../components/Headers/Header";
class Showbill extends React.Component{

    constructor(){
        super();
        this.state = {
            bill : [],
            receipt:null,
            bill_id:null,
            startDate: new Date(),
            amount:0,
            price:0
        }

      
    }

    componentDidMount(){
    
        const date = format(new Date(this.state.startDate), 'yyyy-MM-dd');
        
          axios.post(api('getBillStatusMakepaymentDate'), 
          JSON.stringify({
            'date':date
          }))
          .then(res => {
           
            const bill = res.data; 
            this.setState({ 
              bill :bill
            });
          })
    
    }

   
  

    handleChange = (date) => {
      this.setState({
        startDate:date
      })
      const date1 = format(new Date(date), 'yyyy-MM-dd');
        
      axios.post(api('getBillStatusMakepaymentDate'), 
      JSON.stringify({
        'date':date1
      }))
      .then(res => {
       
        const bill = res.data;  
        this.setState({ 
          bill :bill,
          price:res.data[0].b_price
        });
      })
    };


    render(){
      const ExampleCustomInput = ({ value, onClick }) => (
        <button className="btn btn-primary" onClick={onClick} style={{marginRight:"150px"}}>
          {value}
      </button>
      );

        return(
            <>
             <Header />
        {/* Page content */}
       
        <Container className="mt--7" fluid>
        <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">ยอดขาย</h3>
                    </div>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      customInput={<ExampleCustomInput />}
                    />
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">โต๊ะ</th>
                      <th scope="col">วันที่และเวลา</th>
                      <th scope="col">จำนวน (คน)</th>
                      <th scope="col">ราคา</th>
                    </tr>
                  </thead>
                  <tbody>
                  { this.state.bill.map(bill =>
                    <tr>
                      <th scope="row">{bill.b_table}</th>
                      <td>{bill.b_date}</td>
                      <td>{bill.b_amount_people}</td>
                      <td>
                        
                        {bill.b_amount_people*bill.b_price}
                     
                      </td>
                    </tr>
                  )}

                  <tr>
                      <th scope="row"></th>
                      <td></td>
                      <td>ราคารวม</td>
                      <td>
                        {this.state.bill.reduce((totalAmount, data) => totalAmount + parseInt(data.b_amount_people), 0)*this.state.price}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
           
          </Row>
        
          
        </Container>
         
        
      </>
           
        )
    }
}export default Showbill;

import React, { useState } from 'react';
//import Singlecardlist from '../component/Singlecardlist.js';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import { FaPlus } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";




export default function Todolist(props) {

const [inputList, setInputList] = useState("");
const [items, setItems] = useState([]);
// var todos = [];
function handleChange(e) {
    //alert('work');
    setInputList(e.target.value);
  }


  function onSubmit(){
   // alert('btn work');
   
  setItems(inputList)
       
    };
  

    console.log("TODS",items);

    return (
        <div className="main-cardboard">
            <Container fluid>
                <Row className="justify-content-center">

                    <Col md={4}>
                        <div className="listdesignwithtitle">                   
                            <div className="chatbot">
                            <Form className="custom-widget">
                                    <Form.Group className="width-70" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Add a card" onChange={handleChange} />                                   
                                    </Form.Group>                                 

                                    <div className="fileupload">
                                        <label for="fileuploadid">
                                          <MdAttachFile/>
                                        <input id="fileuploadid" type="file" className="attach"/>
                                        </label>
                                    </div>

                                    <Button className="btn-add"  onClick={onSubmit} variant="success" type="submit">
                                   < FaPlus/>
                                    </Button>

                                    {/* onClick={onSubmit} */}

                                </Form>



                                <ul className="inputdata">
                                    <li>{inputList}</li>
                                    {/* {
                                        Items.map((itemval) =>  {
                                            return <li>{itemval}</li>;

                                        })
                                    } */}

                                </ul>


                            </div>


                        </div>






                    </Col>

                </Row>
            </Container>
        </div>
    )
}

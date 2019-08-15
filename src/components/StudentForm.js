import React, { Component, useState } from "react";
import StudentItem from "./StudentItem";
import { Form, Container, Row, Col } from "react-bootstrap"


const StudentForm = (props) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const { transfer } = props;
    
    const handleSubmit = (e) => {
        e.preventDefault()
        transfer(name, surname);
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                            <input type="text" name="name" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} />
                            <button>Submit</button>
                        </Form>
                    </Col>
                    <Col>
                        <StudentItem {...props}></StudentItem>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StudentForm
import React, { Component, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap"

const StudentList = (props) =>{
    const [name,setName] = useState("");
    const { findData } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        findData(name);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <input placeholder="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                <button>Search</button>
            </Form>
        </div>
    )
}

export default StudentList
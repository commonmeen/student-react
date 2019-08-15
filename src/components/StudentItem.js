import React, { Component, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const StudentItem = (props) => {
    const { student = [] } = props
    console.log("new Student", student)
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>
                    <div>
                        Student List
                    </div>
                    {
                        student[0] ?
                            student.map(data => {
                                return (
                                    <div key={data.name}>
                                        <p>{data.name} {data.surname}</p>
                                    </div>
                                )
                            }) :
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                    }
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default StudentItem
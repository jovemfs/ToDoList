import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import Item from "../components/Item";

export default function Home() {
    const [todos, setTodos] = useState([]);

    const todoHandler = (todo) => {
        console.log(todo);
        //setTodos([...todos, todo]);
    }

    return (
        <Container maxWidth="xs" style={{ marginTop: "1em" }}>
            <Form todoHandler={todoHandler} />
            <List sx={{ marginTop: '1em' }}>
                {todos.map( (todo) => (
                    <div style={{ marginTop:"1em" }}>
                        <Item />
                    </div>
                ))}
            </List>
        </Container>
    )
}
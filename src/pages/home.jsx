import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import Item from "../components/Item";

export default function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id) => {
        console.log(id);
    }

    return (
        <Container maxWidth="xs" style={{ marginTop: "1em" }}>
            <Form addTodo={addTodo} />
            <List sx={{ marginTop: '1em' }}>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ marginTop: "1em" }}>
                        <Item todo={todo} deleteTodo={deleteTodo} />
                    </div>
                ))}
            </List>
        </Container>
    )
}
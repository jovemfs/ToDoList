import { Button, Paper, TextField } from "@mui/material";
import React from "react";

export default function Form() {
    return (
        <Paper style={{ padding: "1em" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <TextField id="outlined-basic" label="A fazer" variant="outlined" fullWidth/>
                    <Button variant="text">Adicionar</Button>
                </div>
        </Paper>
    )
}
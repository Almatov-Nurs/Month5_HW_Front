import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, TextField} from "@mui/material";
import TodoList from "./todolist";

const Main = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState();
    const todos = useSelector((state) => state.todos);
    console.log(todos)

    const handleChange = (e) => {
        setTodo(e.target.value)
    };

    const handleClick = () => {
        dispatch({
            type: "ADD_TODO",
            payload: {label: todo, id: Math.ceil(Math.random() * 500)},
        })
    }

    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <Box sx={{display: "flex"}}>
                <TextField onChange={handleChange} placeholder="Добавить задачи"></TextField>
                <Button variant="contained" onClick={handleClick}>Добавить</Button>
            </Box>
            <TodoList/>
        </Box>)
};

export default Main;
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button} from "@mui/material";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)

    const handleDelete = (id) => {
        dispatch({type: "DELETE_TODO", payload: id})
    }
    const Delete = () => {
        dispatch({type: "DELETE"})
    }

    return (
        <>
            <ul style={{listStyle: "none"}}>
                {todos.map((todo, i) => (
                    <li style={{marginBottom:"15px"}} key={i}>
                        {todo.label} <Button sx={{padding:"5px 8px", fontSize: "10px"}} variant="contained" onClick={() => handleDelete(todo.id)}>Delete</Button>
                    </li>
                ))}
                <Button onClick={Delete}>delete all</Button>
            </ul>
        </>
    )
}
export default TodoList;
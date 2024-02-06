/* Should start with capital name */

import { useState } from "react";

export function CreateTodo() {
    /* two ways to get values, 1. react-query (optimal and better, discussed later )*/
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;  // not good because each input key will re-render
            setTitle(value);
        }}></input> <br /> <br />
        <input id="description" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }}></input> <br /> <br />
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={async ()=>{
            await fetch("http://localhost:3000/todos", {
                method:"POST",
                mode:"cors",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
            });            
        }}>Add a todo</button>
    </div>
}
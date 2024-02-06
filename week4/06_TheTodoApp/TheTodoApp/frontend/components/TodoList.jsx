
/* todos = [
    {
        title: "  ",
        description: "  ",
    }
]
*/

export function TodoList({todos}) {
    return <div>
    {
        todos.map((todo) => {
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={async ()=>{}}>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
            </div>
        })
    }
    </div>
}
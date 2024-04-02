import { TodoItem } from "../components/TodoItem"

export function TodoList({ todos, deleteTodo, toggleTodo, todoFilter }) {
    return (
        <ul className="TodoList">
            {
                todos.map(todo => {
                    if(todoFilter == 'all'){
                        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                    }else if(todoFilter == 'active'){
                        if(!todo.done) return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                    }else{
                        if(todo.done) return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                    }

                })
            }
        </ul>

    )
}
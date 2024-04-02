import { useEffect, useReducer } from "react"
import { todoReducer } from "../reducers/todoReducer"


const init = () => JSON.parse(localStorage.getItem('todos')) || []
export function useTodo() {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        console.log(todos)
    }, [todos])

    const handleNewTodo = todo => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = id => {
        const action = {
            type: 'Delete Todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = id => {
        const action = {
            type: 'Toggle Todo',
            payload: id
        }
        dispatch(action)
    }
    const handleClearCompletedTodo = () => {
        const action = {
            type: 'Clear Completed Todo'
        }
        dispatch(action)
    }
    const handleDragTodo = (event) => {
        const action = {
            type: 'Drag Todo',
            payload: event
        }
        dispatch(action)
    }
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleClearCompletedTodo,
        handleDragTodo
    }
}
import { useSortable } from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"

export function TodoItem({ todo, deleteTodo, toggleTodo }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return (
       
        <li
        style={style}
        ref={setNodeRef}
        {...attributes}
        className="TodoItem"
        >
            <label className="TodoItem-label">
            <input className="TodoItem-input" type="checkbox" onClick={() => toggleTodo(todo.id)} />
                <span className={`TodoItem-checkmark ${(todo.done) && 'isCompleted'}`}></span>
                <span {...listeners} className={`TodoItem-description ${(todo.done) && 'isCompleted'}`}>{todo.description}</span>
            </label>
            <span onClick={() => deleteTodo(todo.id)} className="TodoItem-cross"></span>
        </li>
    )
}
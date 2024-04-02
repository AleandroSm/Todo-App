export function TodoAdd({addNewTodo}) {

    const onFormSubmit = (event) => {
        event.preventDefault()
        
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: event.target.inputTodo.value
        }

        addNewTodo(newTodo)
        event.target.inputTodo.value = ""
        
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <span className="TodoAdd-span"></span>
                <input
                    className="TodoAdd-input"
                    type="text"
                    placeholder="Create a new todo..."
                    name="inputTodo"
                />
            </form>
        </>
    )
}
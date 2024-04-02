
export function TodoFooter({todos, clearCompletedTodo, onUpdateFilter}) {
    
    return (
        <footer className="TodoFooter">
            <div>
                <span> {todos.filter(todo => !todo.done).length} </span>
                items left</div>
            <div>
                <label className="TodoFooter-label">
                    <input type="radio"
                        className="TodoFooter-input"
                        name="filter"
                        data-id="all"
                        onClick={(event) => onUpdateFilter(event.target.dataset.id)}
                    />
                    <span className="TodoFooter-span">All</span>
                </label>
                <label className="TodoFooter-label">
                    <input type="radio"
                        className="TodoFooter-input"
                        name="filter"
                        data-id="active"
                        onClick={(event) => onUpdateFilter(event.target.dataset.id)}
                    />
                    <span className="TodoFooter-span">Active</span>
                </label>
                <label className="TodoFooter-label">
                    <input type="radio"
                        className="TodoFooter-input"
                        name="filter"
                        data-id="completed"
                        onClick={(event) => onUpdateFilter(event.target.dataset.id)}
                    />
                    <span className="TodoFooter-span">Completed</span>
                </label>
            </div>
            <div className="td-clear-completed">
                <span className="TodoFooter-span" onClick={() => clearCompletedTodo()} >Clear Completed</span>
            </div>
        </footer>
    )
}
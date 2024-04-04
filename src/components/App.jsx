import {TodoAdd} from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"
import { TodoList } from "./TodoList"
import { TodoFooter } from "./TodoFooter"
import { useTodoFilters } from "../hooks/useTodoFilters"
import {switchTheme} from "../switchTheme"
import { DndContext, TouchSensor, closestCenter, useSensors, useSensor, PointerSensor } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

export function App() {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, handleClearCompletedTodo, handleDragTodo } = useTodo()
  const { todoFilter, onUpdateFilter } = useTodoFilters()
  
  
  return (
    <main className="App">
      <header className="App-header">
        <h1 className="App-title">T O D O</h1>
        <span onClick={() => switchTheme()} className="App-icon"></span>
      </header>
      <div className="App-td">
        <div className="App-td-add">
          <TodoAdd addNewTodo={handleNewTodo} />
        </div>
        <DndContext
          sensors={useSensors(useSensor(PointerSensor), useSensor(TouchSensor))}
          collisionDetection={closestCenter}
          onDragEnd={handleDragTodo}
        >
          <SortableContext items={todos} strategy={verticalListSortingStrategy}>
            <div className="App-td-list">
              <TodoList todos={todos} deleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo} todoFilter={todoFilter} />
              {todos.length > 0 ? <TodoFooter todos={todos} onUpdateFilter={onUpdateFilter} clearCompletedTodo={handleClearCompletedTodo} /> : <></>}
            </div>
          </SortableContext>
        </DndContext>
      </div>
      <p className="App-p">Drag and drop to reorder list</p>
    </main>
  )
}

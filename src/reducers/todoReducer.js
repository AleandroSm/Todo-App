import { arrayMove } from "@dnd-kit/sortable"

export function todoReducer(initialState, action){
    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload]
        case 'Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload)
        case 'Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload) return {...todo, done: !todo.done}
                return todo
            })
        case 'Clear Completed Todo':
              return initialState.filter(todo => !todo.done)
        case 'Drag Todo':
            const {active, over} = action.payload
            const oldIndex = initialState.findIndex(todo => todo.id === active.id)
            const newIndex = initialState.findIndex(todo => todo.id === over.id)
            return arrayMove(initialState, oldIndex, newIndex)
    
        default:
            return initialState;
    }
}
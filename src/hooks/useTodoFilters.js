import { useState } from "react";


export function useTodoFilters(){
    const [todoFilter, setTodoFilter] = useState("all")

    const onUpdateFilter = (id) => {
        setTodoFilter(id)
    }

    return {
        todoFilter,
        onUpdateFilter
    }

}
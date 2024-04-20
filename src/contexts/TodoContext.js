import {createContext, useContext} from "react"

//creating an context "TodoContext " using hook createContext
//createContext hook is an object which having several parameters 
export const TodoContext = createContext({
    //variable ke andr array uske andr object
    todos: [
        {

            id:1,
            todo:"Todo msg",
            completed: false,

        }
    ],
    //addtodo ek function hai jo ki kaam krega tab jab todo pass hoga ussey todo yaha pe vo upar wala msg hai 
    addTodo:(todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo :(id) => {},
    toggleComplete:(id) =>{}

})


//exporting the usecontext hook named as "useTodo"  by passing the value of "TodoContext" which was createContext hook
export const useTodo = () => {
    return useContext(TodoContext)
}

// Exporting the context provider named as "TODOprovider"vv
export const TodoProvider = TodoContext.Provider
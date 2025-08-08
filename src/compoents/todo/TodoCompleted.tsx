import axios from "axios"
import { useEffect, useState } from "react";
import type { Todo } from "./TodoCompleted.interface";


const TodoCompleted = () => {
    const [completedCount, setCompletedCount] = useState<number>(0);

    const fetchCompletedTodos = async () =>  {

        try {
       const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
       const todos =  response.data;
       const countCompletedTodo = todos.filter(todo => todo.completed).length;
       setCompletedCount(countCompletedTodo)

        } catch (error) {
            console.log(error);   
        }
       
    }


    useEffect(() => {
        fetchCompletedTodos()
    },[])

  return (
    <div>
        Total Todos_Completed
        <span className="text-red-500 text-4xl">{completedCount}</span>
        </div>
  )
}

export default TodoCompleted
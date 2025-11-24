import { useRef, useState } from "react"
import "./app.css"

function App() {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newTodo = {
      title: titleRef.current.value,
      description: descriptionRef.current.value
    }
    
    todoList.push(newTodo)
    setTodoList([...todoList])
    
    titleRef.current.value = ""
    descriptionRef.current.value = ""
  }

  const removeTodo = (index) => {
    console.log("removing todo at index:", index)
    todoList.splice(index, 1)
    setTodoList([...todoList])
  }

  const updateTodo = (index) => {
    console.log("editing todo at index:", index)
    const newTitle = prompt("Enter new title:", todoList[index].title)
    const newDesc = prompt("Enter new description:", todoList[index].description)
    
    if (newTitle !== null && newTitle !== "") {
      if (newDesc !== null && newDesc !== "") {
        todoList[index].title = newTitle
        todoList[index].description = newDesc
        setTodoList([...todoList])
      }
    }
  }

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="enter title" 
          ref={titleRef} 
        />
        <input 
          type="text" 
          placeholder="enter description" 
          ref={descriptionRef} 
        />
        <button type="submit">submit</button>
      </form>

      <div className="parent">
        {todoList.length === 0 ? (
          <h1>No todo found</h1>
        ) : (
          todoList.map((todo, index) => {
            return (
              <div key={index} className="children">
                <h1>title: {todo.title}</h1>
                <h1>desc: {todo.description}</h1>
                <button onClick={() => removeTodo(index)}>delete</button>
                <button onClick={() => updateTodo(index)}>edit</button>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default App
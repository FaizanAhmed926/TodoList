import { useState,useEffect } from 'react'
import './App.css'
import Nav from './Comonents/Navbar'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    let todoString=localStorage.getItem("todos")
    if(todoString)
      {
        let todos=JSON.parse(localStorage.getItem("todos"))
        setTodos(todos)
      }
  },[])
  const saveToLs=(params)=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const handleEdit = (index) => {
    console.log(index)
    setTodo(todos[index].todo)
    handleDelete(index)
    saveToLs()
  }
  const handleDelete = (index) => {
    setTodos(todos.filter((i) => {
      if (todos.indexOf(i) != index)
        return i
    }))
    saveToLs()
  }
  const handleAdd = () => {
    if (todo)
      setTodos([...todos, { todo, isCompleted: false }])
    setTodo("");
    saveToLs()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <>
      <Nav />
      <div className='container  w-1/3 bg-violet-200 mx-auto my-5 rounded-xl shadow-2xl p-5'>
        <h1 className='m-auto text-center text-3xl font-bold text-teal-600'>Add Todo List</h1>
        <div className='flex justify-evenly items-center m-4'>
          <input onChange={handleChange} value={todo} className=' w-2/3 p-1 rounded-xl' type="text" />
          <button onClick={handleAdd} className='shadow-cyan-500/50 text-yellow-50 font-bold bg-emerald-800 px-4 py-1 rounded-xl'>Add</button>
        </div>
        <div className='list-none h-4/5 overflow-auto'>
          <h2 className='m-auto text-center text-2xl font-bold text-teal-500'>Your Todo</h2>
          {todos.map((items) => {
            return (<div key={todos.indexOf(items)} className='flex justify-between mb-3'>
              <li className='detail text-lg font-semibold text-zinc-700'  >{items.todo}</li>
              <div>
                <button onClick={() => { handleEdit(todos.indexOf(items)) }} className='text-yellow-50 font-semibold bg-emerald-800 h-10 px-3 rounded-2xl mr-1'><FaEdit /></button>
                <button onClick={() => { handleDelete(todos.indexOf(items)) }} className=' text-yellow-50 font-semibold bg-emerald-800  h-10 px-3 rounded-2xl'><AiFillDelete /></button>
              </div>
            </div>)
          })}




        </div>
      </div>
    </>
  )
}

export default App

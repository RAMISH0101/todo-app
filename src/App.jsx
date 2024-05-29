import { useRef, useState } from 'react'
import './App.css'

function App() {
const userInput = useRef()

const [arr , setArr] = useState([])


//add function

const addTodo = ()=>{
 arr.push(userInput.current.value)
setArr([...arr])
userInput.current.value = ''
}

//delete all function

const deleteAll = ()=>{
setArr([])
}

// function to delete a single to-do

const deleteTodo = (index)=>{
arr.splice(index,1)
setArr([...arr])
}
//edit function
const editTodo = (index)=>{
const upVal = prompt('enter updated value')
arr.splice(index,1,upVal)
setArr([...arr])
}


  return (
    <>
    <body>
      
    <div className='bg-gradient-to-r from-indigo-500 to-purple-500 mt-44 border-solid border-gray-700 border-4 w-1/3 m-auto h-auto '>
    <h1 className='text-center font-bold text-xl pt-3 pb-4 text-white '>Simple To-Do application</h1>
  
     <input placeholder='please enter a todo' className='shadow appearance-none border border-gray-500 rounded  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-50 pt-1 pb-1.5 mt-1 ml-2 h-7' type="text" ref={userInput} />
     <button className='ml-20 mr-3 bg-blue-400 border-gray-500 rounded hover:bg-blue-600 px-2 py-1 mt-2' onClick={addTodo} >add todo</button>
     <button className=' bg-red-500 border-gray-500 rounded hover:bg-red-700 px-2 py-1 mt-2' onClick={deleteAll}>delete all</button>
     <ul>
      {arr.map((item , index) => { 
        return <li className='bg-blue-400 border-gray-800 rounded border-2 mx-2 my-3' key={index}>{item}
        <button className=' bg-red-500 border-gray-500 rounded p-1 hover:bg-red-700 ml-72 m-2' onClick={()=>deleteTodo(index)}>delete</button>
        <button className='bg-blue-400 border-gray-500 rounded p-1 hover:bg-blue-600' onClick={()=>editTodo(index)}>edit</button>
        </li>
        })} 
        </ul>
        
        </div>
        </body>
    </>
  )
}

export default App

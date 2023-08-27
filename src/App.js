import { useState, useEffect, useRef } from "react";
import Todo from './components/todo'

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([])

  const inputRef = useRef('null')

  useEffect (() => {
    inputRef.current.focus();
  })
  
  // Functions
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setTodos([...toDos, {id: Date.now(), text: toDo, status: false}]); 
      setTodo(" ");
    }
  }

  const handleDelete = (deletingToDo) => {
    const newList = toDos.filter((item) => item.id !== deletingToDo);
    setTodos(newList);
  }

  return (
    <div className='w-full h-screen flex items-start justify-center py-20'>
      <div className="w-96 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-10 py-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-5 font-poppins">ToDo</h1>
        <div className="relative w-full shadow-sm">
          <input ref={inputRef} value={toDo} onChange={(e) => {setTodo(e.target.value)}} onKeyDown={handleEnter} className="pl-3 pr-8 py-2 w-full rounded-sm font-poppins" type="text" name="todo" placeholder="enter task here" />
          <i onClick={() => {setTodos([...toDos, {id: Date.now(), text: toDo, status: false}]); setTodo(" ")}} className="fa-solid fa-plus text-xl text-gray-600 absolute top-1 right-2 cursor-pointer hover:text-orange-500 hover:scale-110"></i>
        </div>
        {toDos.map((value) => {
          return(
            <Todo id={value.id} text={value.text} status={value.status} delfn={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className='w-full h-screen flex items-start justify-center py-20'>
      
      <div className="w-96 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-10 py-10 rounded-lg">
       
        <h1 className="text-4xl font-bold mb-5 font-poppins">ToDo</h1>
        <div className="relative w-full shadow-sm">
          <input className="pl-3 pr-8 py-2 w-full rounded-sm font-poppins" type="text" name="todo" placeholder="enter task here" />
          <i class="fa-solid fa-plus text-xl text-gray-600 absolute top-1 right-2 cursor-pointer hover:text-orange-500 hover:scale-110"></i>
        </div>

        <div className="w-full flex items-center justify-between mt-2 pl-3 pr-2 py-2 bg-white rounded-sm shadow-sm">
          <div className="flex items-center justify-start gap-2">
            <input className="w-4 h-4" type="checkbox" name="check" />
            <p className="font-poppins font-semibold text-gray-500">Hello World!!</p>
          </div>
          <i class="fa-solid fa-plus text-xl text-gray-600 cursor-pointer hover:text-orange-500 rotate-45 hover:scale-125"></i>
        </div>

      </div>
    </div>
  );
}

export default App;

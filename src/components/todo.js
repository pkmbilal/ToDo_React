import React,{useState} from "react";

const Todo = (props) => {

    const [bg, setBg] = useState('bg-white');
    const [line, setLine] = useState('');

    // Functions
    const handleProperty = () => {
        setBg((prevColor) => {
            if (prevColor === 'bg-white'){
                return 'bg-green-200'
            }
            else {
                return 'bg-white'
            }
        });
        
        setLine((prevState) => {
            if (prevState == ''){
                return 'line-through';
            }
            else{
                return ''
            }
        })
    }

    return(
        <div className={`w-full flex items-center justify-between mt-2 pl-3 pr-2 py-2 rounded-sm shadow-sm ${bg}`}>
            <div className="flex items-center justify-start gap-2">
                <input onChange={handleProperty} value={props.status} className="w-4 h-4" type="checkbox" name="check" />
                <p className={`font-poppins font-semibold text-gray-500 ${line}`}>{props.text}</p>
            </div>
            <i onClick={()=> {props.delfn(props.id)}} className="fa-solid fa-plus text-xl text-gray-600 cursor-pointer hover:text-orange-500 rotate-45 hover:scale-125"></i>
        </div>
    )
      
}

export default Todo;
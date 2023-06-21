import { useState } from "react"

export default function Todo( {item}){
    const [isEdit, setIsEdit] =useState(false);


function FormEDit() {
    const [newValue, setNewValue] = useState(item.title)
     function handleSubmit(e) {
        e.preventeDefault()

    }

function handleChange() {
    const value = e.target.value;
    setNewValue(value);

}    
    return (
        <form className="todoUpadateForm" onSubmit={handleSubmit}>
            <input type="text"  className="todoInput" onChange={handleChange} value={newValue} />
            <button>Update</button>
        </form>
    );

}

function TodoElement() {
    return <div className="todoInfo">
        {item.title} <button onClick={() => setIsEdit(true)}>Edit</button>
        <button>Delete</button>
    </div>
}

    return   <div className="todo">{isEdit ? <FormEDit/> : <TodoElement/>} </div>
}
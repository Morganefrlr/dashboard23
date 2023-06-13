import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { v4 as uuidv4 } from 'uuid';
uuidv4();


const Todo = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState()
    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodos([...todos, {id:uuidv4(), task: value, completed:false, isEditing: false}])
        setValue('')
    }

    const taskDone = (id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
   const handleDelete = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
   }

   const handleUpdate = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    setTask(todos.map(todo => todo.id === id ? todo.task :''))
   }

   const handleEdit = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo))
   }
    
    return (
        <div className='mainTodo'>
            <h1>TO DO LIST</h1>
            <form className='mainTodo_form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Une tâche a rajouter?' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type='submit'>Ajouter</button>
            </form>
            <div className="todolist">
                {todos.map((todo,index)=> 
                        <div className="item" key={index}>
                            {todo.isEditing ? (<input  type="text" value={task} onChange={(e) => setTask(e.target.value)}/>) : (<span onClick={() => taskDone(todo.id)} className={todo.completed ? 'completed' : ''}>{todo.task}</span>)}
                            {todo.isEditing ? (<button type='submit'onClick={() => handleEdit(todo.id)}>Modifier</button>) : 
                            (<div className="icons">
                                <ModeEditIcon className='icon' onClick={() => handleUpdate(todo.id)}/>
                                <DeleteIcon className='icon' onClick={() => handleDelete(todo.id)}/>
                            </div>)}
                            
                        </div>
                )}

            </div>
        </div>
    );
};

export default Todo;
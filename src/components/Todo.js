import React from 'react';

const Todo= props =>{
    const handleClick=()=>{
        props.handleToggle(props.id)
    }
    return(
        <div 
        onClick={handleClick} //why didn't {props.handleToggle(props.id)} work here?!
        className={`${props.completed ? 'completed': ''}`}>
            <p>{props.task}</p>
        </div>
    )
}
export default Todo
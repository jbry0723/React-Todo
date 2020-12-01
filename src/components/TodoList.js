// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList= props =>{
    return(
        <div>
            {props.todosArray.map(item=>{
                return(
                <Todo handleToggle={props.handleToggle} task={item.task} id={item.id} key={item.id} completed={item.completed} />
                )
            })}
        </div>
    )
}

export default TodoList

import React from "react";


const TodoForm= props =>{
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input value={props.textInput} onChange={props.handleChanges} type="text" name="todo" />
                <button>Add Todo</button>
            </form>
                <button onClick={props.clearCompleted} className="clearbtn">Clear Completed</button>
            
        </div>
    
            )


}

export default TodoForm
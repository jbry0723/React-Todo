import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import "./components/Todo.css"


class App extends React.Component {
  constructor(){
    super();
    this.state={
      textInput:"",
      todosArray: []
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleSubmit=e=>{
    e.preventDefault();
    this.setState({
      todosArray: [...this.state.todosArray, {
        task:this.state.textInput,
        id:Date.now(),
        completed:false,
      }],
      textInput:""
    })
  }

  handleChanges=(e)=>{

    this.setState({
      textInput:e.target.value
    })
  };

  handleToggle=(id)=>{
    const newTodos=this.state.todosArray.map(item=>{
      if(id===item.id){
        return({
          ...item,
          completed:!item.completed
        });

      }
      else{
        return (item)
      }
    })
    this.setState({todosArray:newTodos})
  }

   clearCompleted=()=>{
     this.setState({
       todosArray:this.state.todosArray.filter(item=>(!item.completed))
     })
   }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoForm clearCompleted={this.clearCompleted} textInput={this.state.textInput} handleSubmit={this.handleSubmit} handleChanges={this.handleChanges}  />
      <TodoList todosArray={this.state.todosArray} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;

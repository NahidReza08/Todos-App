import React, { Component } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Todos from "../Todos/Todos";

class Main extends Component {

    state = {
        todo: {
            id:"",
            username:"",
            email:"",
            title:"",
            description:"",
        },
        todos: [],
        count: 0,
    }

    setTodoValue = (key,value) => {
        const {todo} = this.state;
        const copyTodo = {...todo,[key]:value};
        this.setState((previousState)=>{
            return {
                todo: copyTodo,
            };
        });
    }

    createTodo = () => {
        const {todo,todos,count} = this.state;
        const copyTodos = [...todos];
        const d = new Date();
        const newTodo = {...todo,'id':`${d.getTime()}${Math.floor(Math.random() * 10000000)}`}
        copyTodos.push(newTodo);
        this.setState((previousState)=>{
            return {
                todos: copyTodos,
                count: count+1,
            };
        });
    }

    removeTodo = (id) => {
        const {todos,count} = this.state;
        const copyTodos = [...todos];
        const index = copyTodos.findIndex(todo=>todo['id']===id);
        copyTodos.splice(index,1);
        this.setState((previousState)=>{
            return {
                todos: copyTodos,
                count: count-1,
            };
        });
    }

    updateTodo = (updatedTodo) => {
        const {id} = updatedTodo;
        const {todos} = this.state;
        const copyTodos = [...todos];
        const index = copyTodos.findIndex(todo=>todo['id']===id);
        if(index!==-1){
            copyTodos[index] = updatedTodo;
            this.setState((previousState)=>{
                return {
                    todos: copyTodos,
                };
            });
        }
    }

    
    render() {
        const { todo, todos, count } = this.state;
        return (
            <div className="main">
                <Header />
                <Form todo={todo} createTodo={this.createTodo} setTodoValue={this.setTodoValue} />
                {console.log(todos)}
                <Todos todos={todos} count={count} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
             </div>
        );
     }
}

export default Main;

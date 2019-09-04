import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment'

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos: [
                // {
                //     id:1,
                //     description: 'React öğren',
                //     done: false,
                //     targetDate: new Date()
                // },{
                //     id:2,
                //     description: 'GraphQL öğren',
                //     done: false,
                //     targetDate: new Date()
                // },{
                //     id:3,
                //     description: 'Spring Boot öğren',
                //     done: false,
                //     targetDate: new Date()
                // }
            ]
        }
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.deleteClicked = this.deleteClicked.bind(this)
        this.updateClicked = this.updateClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    this.setState({
                        todos: response.data
                    })
                }
            )
            .catch()
    }

    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
    }

    deleteClicked(id){
        let name = AuthenticationService.getLoggedInUserName();
        TodoDataService.deleteTodo(name, id)
            .then(
                response =>{
                    this.refreshTodos()
                }   
            )
            .catch()
    }

    updateClicked(id){
        this.props.history.push(`/todos/${id}`)        
    }

    render(){
        return(
            <div>
                <h1>Yapılacaklar</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Açıklama</th>
                                <th>Statu</th>
                                <th>Hedef Tarih</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>this.updateClicked(todo.id)}>Güncelle</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning" onClick={()=>this.deleteClicked(todo.id)}>Sil</button>
                                        </td>
                                    </tr>
                                )
                                
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;
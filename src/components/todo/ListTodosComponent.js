import React, {Component} from 'react';

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos: [
                {
                    id:1,
                    description: 'React öğren',
                    done: false,
                    targetDate: new Date()
                },{
                    id:2,
                    description: 'GraphQL öğren',
                    done: false,
                    targetDate: new Date()
                },{
                    id:3,
                    description: 'Spring Boot öğren',
                    done: false,
                    targetDate: new Date()
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>Yapılacaklar</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>is completed</th>
                                <th>target date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;
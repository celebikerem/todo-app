import React, {Component } from 'react';
import moment from 'moment';
import {Formik, Form, Field} from 'formik';

import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        let name = AuthenticationService.getLoggedInUserName();

        TodoDataService.retrieveTodo(name, this.state.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
                })
            })
    }

    onSubmit(values){
        let username = AuthenticationService.getLoggedInUserName()

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push('/todos'))
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))
        }
    }

    render(){
        let description = this.state.description;
        let targetDate = this.state.targetDate; 

        return(
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{description: description, targetDate: targetDate}} onSubmit={this.onSubmit} validate={this.validate} enableReinitialize={true}>
                        {
                            (props)=>(
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Açıklama</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Hedef Tarih</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset> 
                                    <button className="btn btn-success" type="submit">Kaydet</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default TodoComponent;
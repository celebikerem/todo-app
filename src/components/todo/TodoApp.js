import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class TodoApp extends Component {
    render(){
        return(
            <div className="TodoApp">
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/welcome/:name" component={WelcomeComponent}/>
                    <Route path="/todos" component={ListTodosComponent}/>
                    <Route path="/logout" component={LogoutComponent}/>
                    <Route path="" component={ErrorComponent}/>
                </Switch>
                <FooterComponent/>
            </Router>
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
        return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="/" className="navbar-brand">TodoApp</a>
                        </div>
                        <ul className="navbar-nav"> 
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/todos" className="nav-link">Todos</Link></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/logout" className="nav-link">Logout</Link></li>
                        </ul>
                    </nav>
                </header>
        );
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">Created by Kerem Çelebi</span>
            </footer>
        );
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <h1>Çıkış yaptınız</h1>
                <div className="container">
                    :uygulamamızı kuyllanıdığınız için teşekkürler
                </div>
            </div>
        );
    }
}

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
                <table>
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
        );
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>Hoş geldin {this.props.match.params.name}! Listenizi <Link to="/todos">buradan</Link> düzenleyebilirsiniz</div>
        );
    }
}

function ErrorComponent(){
    return <div>Aradığınız sayfa bulunamadı!</div>
}

class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: 'keremcelebi',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handlerInputChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked(){
        if(this.state.username === "keremcelebi" && this.state.password === "dummy"){
            console.log("Başarılı");
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({
            //     showSuccessMessage: true,
            //     hasLoginFailed: false
            // });
        }
        else{
            console.log("Başarısız");
            this.setState({
                showSuccessMessage: false,
                hasLoginFailed: true
            });
        }
    }

    render(){
        return(
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div>Giriş Başarısız</div>}
                {this.state.showSuccessMessage && <div>Giriş Başarılı</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                Kullanıcı Adı: <input type="text" name="username" value={this.state.username} onChange={this.handlerInputChange}></input>
                Şifre: <input type="password" name="password" value={this.state.password} onChange={this.handlerInputChange}></input>
                <button onClick={this.loginClicked}>Giriş</button>
            </div>
        );
    }
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return(
            <div>Giriş Başarısız</div>
        );
    }
    return null;
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return(
            <div>Giriş Başarılı</div>
        );
    }
    return null;
}

export default TodoApp;
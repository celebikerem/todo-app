import React, {Component} from 'react';

class TodoApp extends Component {
    render(){
        return(
            <div className="TodoApp">
                <LoginComponent></LoginComponent>
            </div>
        )
    }
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
            this.setState({
                showSuccessMessage: true,
                hasLoginFailed: false
            });
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
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
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
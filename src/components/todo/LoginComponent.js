import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

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
            AuthenticationService.registerSuccessfulLogin(this.state.username);
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
            <div className="container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Giriş Başarısız</div>}
                {this.state.showSuccessMessage && <div>Giriş Başarılı</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                Kullanıcı Adı: <input type="text" name="username" value={this.state.username} onChange={this.handlerInputChange}></input>
                Şifre: <input type="password" name="password" value={this.state.password} onChange={this.handlerInputChange}></input>
                <button className="btn btn-success" onClick={this.loginClicked}>Giriş</button>
            </div>
        );
    }
}

export default LoginComponent;
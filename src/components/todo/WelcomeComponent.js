import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component{
    constructor(props){
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }

    render(){
        return(
            <div>
                <h1>Hoş Geldin!</h1>
                <div className="container">
                    Hoş geldin {this.props.match.params.name}! Listenizi <Link to="/todos">buradan</Link> düzenleyebilirsiniz
                </div>
                <div className="container">
                    Buraya Tıkla
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Hoş Geldin</button>
                </div>
            </div>
        );
    }
    retrieveWelcomeMessage(){
        alert("kerem")
    }
}

export default WelcomeComponent;
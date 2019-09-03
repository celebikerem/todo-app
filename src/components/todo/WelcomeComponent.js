import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                <h1>Hoş Geldin!</h1>
                <div className="container">
                    Hoş geldin {this.props.match.params.name}! Listenizi <Link to="/todos">buradan</Link> düzenleyebilirsiniz
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;
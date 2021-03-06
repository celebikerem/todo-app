import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="/" className="navbar-brand">TodoApp</a>
                        </div>
                        <ul className="navbar-nav"> 
                            {isUserLoggedIn && <li><Link to="/" className="nav-link">AnaSayfa</Link></li>}
                            {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Giriş</Link></li>}
                            {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.successfulLogout}>Çıkış</Link></li>}
                        </ul>
                    </nav>
                </header>
        );
    }
}

export default HeaderComponent;
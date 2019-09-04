class AuthenticationService {
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser',username);
    }
    
    successfulLogout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null)
            return false;
        return true;
    }

    getLoggedInUserName(){
        let username = sessionStorage.getItem('authenticatedUser')
        if(username === null)
            return '';
        return username;
    }
}

export default new AuthenticationService();
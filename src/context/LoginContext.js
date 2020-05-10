import React from 'react';
const LoginContext = React.createContext({
    userName: "",
    password: ""
});

class LoginProvider extends React.Component{
    state = {
        username: "",
        password: ""
    };
    setUserName = (userName) => {
        this.setState({userName: userName})
    };
    setPassword = (password) => {
        this.setState({password: password})
    };
    render() {
        return (
            <LoginContext.Provider
                values = {{
                    ...this.state,
                    setUserName: this.setUserName,
                    setPassword: this.setPassword
                }}
            >
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}
const LoginConsumer = LoginContext.Consumer;
export {LoginProvider, LoginConsumer}
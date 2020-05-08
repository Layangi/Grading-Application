import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import HomePage from './HomePage';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            load: false,
            newStatus: 'ddd'
        }
    }

    render() {
        console.log("ÄA:",this.state.username);
        return (
          
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Student Login"
                        />
                        <TextField
                            hintText="Enter your Student Id"
                            floatingLabelText="Student Id"
                            value={this.state.username}
                            onChange={e => {
                                this.setState({username: e.target.value});
                            }}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            value={this.state.password}
                            onChange={e => {
                                this.setState({password: e.target.value});
                            }}
                        />
                        <br />
                        <RaisedButton label="Submit" 
                         value={this.state.searchValue}
                       
                        primary={true} style={style} onClick={() => this.props.history.push('/view-details')  } />
                    
                    </div>
                </MuiThemeProvider>
                 {/* {this.state.load ? 
                        <HomePage>
                            {...props}
                           username={this.state.username}
                           newStatus={this.state.newStatus}
                        </HomePage>
                        : '' } */}

               {(props)=><HomePage {...props} newStatus={props.newStatus}/>} 
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;

//window.location.href='/view-details' 
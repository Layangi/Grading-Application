import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../styles/components/Login.scss';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>

                    <div>
                        <div className="login-content-wrapper">
                            <div className="logo-content">
                                <h2>Student Login</h2>
                            </div>
                            <div className="login-content">
                                <form>
                                    <div className="student-name">
                                        <TextField
                                            hintText="Enter your Student Id"
                                            floatingLabelText="Student Id"
                                            value={this.state.username}
                                            onChange={e => {
                                                this.setState({username: e.target.value});
                                            }}
                                        />
                                    </div>

                                    <div className="student-password">
                                        <TextField
                                            type="password"
                                            hintText="Enter your Password"
                                            floatingLabelText="Password"
                                            value={this.state.password}
                                            onChange={e => {
                                                this.setState({password: e.target.value});
                                            }}
                                        />
                                    </div>
                                    <div className="btn-wrapper">
                                        {this.state.username ?
                                            <Button className="submit-btn" label="Submit"
                                                    onClick={() => this.props.history.push('/view-details')}
                                            />
                                            : (
                                                <Button>submit</Button>
                                            )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </MuiThemeProvider>
            </div>
        );
    }
}

export default Login;

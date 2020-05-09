import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextField from 'material-ui/TextField';
import '../styles/components/Login.scss';

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

    // handleSubmit(event){
    //     event.preventDefault();
    //     // console.log('userName',{user});
    //
    // }

    render() {
        console.log("ÄA:",this.state.username);
        return (
            <div>
                <MuiThemeProvider>
                    <div>

                        <div className="login-content-wrapper">
                            <div className="logo-content">
                                <h2>Student Login</h2>
                            </div>
                            <div className="login-content">
                                {/*<form onSubmit={this.handleSubmit()}>*/}
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
                                        { this.state.username ?
                                            // <Button className="submit-btn"  onClick={()=> setUser(user)} >
                                            //     <Link to="./test">submit</Link>
                                            // </Button>
                                            <Button className="submit-btn" label="Submit"
                                                    onClick={() => this.props.history.push('/view-details')}
                                            />
                                        :(
                                            <Button>submit</Button>
                                        )}

                                    </div>

                                </form>

                            </div>
                        </div>


                    </div>
                </MuiThemeProvider>


                {/*{this.state.load ? (*/}
                {/*    <HomePage*/}
                {/*        profile={this.state.username}*/}
                {/*    />*/}
                {/*) : (" ")}*/}

            </div>
        );
    }
}

export default Login;

// //window.location.href='/view-details'
//
// import React from 'react';
// import { UserConsumer } from '../user-context';
//
// export default function Login() {
//     return (
//         <UserConsumer>
//             {({ updateUsername }) => (
//                 <div>
//                     <h2>Settings</h2>
//                     <label htmlFor="username">Username: </label>
//                     <input
//                         id="username"
//                         type="text"
//                         onChange={event => {
//                             updateUsername(event.target.value);
//                         }}
//                     />
//                     <button className="submit-btn"  onClick={()=> window.location.href='/view-details'} >
//                       {/*<Link to="./test">submit</Link>*/}
//                     </button>
//                 </div>
//             )}
//         </UserConsumer>
//     );


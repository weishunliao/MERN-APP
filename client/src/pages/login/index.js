import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Button, Form} from 'semantic-ui-react'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {handleNameInputChangeAction, handlePasswordInputChangeAction, handleSubmitAction} from "./store/actionCreator";

class Login extends Component {
    render() {
        if (this.props.login) {
            return <Redirect to='/'/>;
        }
        return (
            <Form style={{width: "35%", margin: "100px auto"}}>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={this.props.inputName} onChange={this.props.handleNameInputChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' value={this.props.inputPassword}
                           onChange={this.props.handlePasswordInputChange}/>
                </Form.Field>
                <Button type='submit' onClick={() => {
                    this.props.handleSubmit(this.props.inputName, this.props.inputPassword)
                }}>Submit</Button>
            </Form>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        inputName: state.getIn(['login', 'inputName']),
        inputPassword: state.getIn(['login', 'inputPassword']),
        login: state.getIn(['login', 'login']),
        loginFail:state.getIn(['login','loginFail']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleNameInputChange(e) {
            dispatch(handleNameInputChangeAction(e.target.value));
        },
        handlePasswordInputChange(e) {
            dispatch(handlePasswordInputChangeAction(e.target.value));
        },
        handleSubmit(name, password) {
            dispatch(handleSubmitAction(name, password));
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
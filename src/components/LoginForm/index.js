import React from 'react';
import PropTypes, { string } from 'prop-types';
import Input from './../Input';
import Button from './../Button';

var textInput = {
    login: string,
    password: string
};

function handleButtonClick() {
    console.log(textInput.login);
    console.log(textInput.password);
}

function LoginForm({ children }) {
    return (
        <form>
            <Input ref={input => { textInput.login = input; }} type="email" label="Login" size="medium"/>
            <Input ref={input => { textInput.password = input; }} type="password" label="Password"/>
            <Button onButtonClick={handleButtonClick}>Submit</Button>
        </form>
    );
}

LoginForm.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onButtonClick: PropTypes.func
};

LoginForm.defaultProps = {
    type: 'primary'
};

export default LoginForm;

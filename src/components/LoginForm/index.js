import React from 'react';
import PropTypes, { string } from 'prop-types';
import Input from './components/Input';
import Button from './components/Button';

var textInput = {
    login: string,
    password: string
};

function handleButtonClick() {
    console.log(textInput.login);
    console.log(textInput.password);
}

function LoginForm({ children }) {
    render() {
        return (
            <form>
                <Input ref={input => { textInput.login = input; }} />
                <Input ref={input => { textInput.password = input; }} />
                <Button onButtonClick={handleButtonClick} type="submit">Submit</Button>
            </form>
        );
    }
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

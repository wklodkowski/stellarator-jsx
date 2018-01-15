import React from 'react';
import PropTypes, { string } from 'prop-types';
import Input from './../Input';
import Button from './../Button';

function LoginForm({ children }) {

    let loginFormData = {};

    function handleLoginData(event) {
        loginFormData[event.target.name] = event.target.value;
    }

    function submit(e) {
        e.preventDefault();
        console.log(loginFormData);
    }

    return (
        <form>
            <Input name="login" type="email" label="Login" size="medium" onInputChange={handleLoginData} />
            <Input name="password" type="password" label="Password" size="medium" onInputChange={handleLoginData} />
            <Button type="submit" classType="primary" loading={false} onButtonClick={submit}>Submit</Button>
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

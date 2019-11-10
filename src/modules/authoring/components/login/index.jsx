import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoginModel } from 'modules/authoring/types';
import { identityService } from 'modules/authoring/services';

import { Button, Input } from 'components';

import './index.scss';

const Login = () => {
    const [login, setLogin] = useState(new LoginModel());
    const history = useHistory();

    useEffect(() => {
        if (identityService.isLoggedIn) {
            console.log('already logged in');
        }
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        identityService.login(login)
            .then(() => {
                history.push('/loanSetup');
            })
            .catch(error => {
                toast.error(error);
            });
    };

    const inputOnChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        setLogin({ ...login, ...{ [name]: value } });       
    };

    const forgotPassword = () => {
        history.push('/forgotPassword');
    };

    const register = () => {     
        history.push('/register');
    };

    return (
        <div className="login">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <Input
                        inputType="text"
                        title="Username"
                        name="username"
                        onChange={inputOnChange}
                        value={login.username}
                    />

                    <Input
                        inputType="password"
                        title="Password"
                        name="password"
                        onChange={inputOnChange}
                        value={login.password}
                    />

                    <div className="row">
                        <Button type="submit" text="Login" />
                    </div>
                </form>
            </div>
            <div className="row">
                <Button text="Register" onClick={register} />
                <Button text="Forgot password" onClick={forgotPassword} />
            </div>
            {JSON.stringify(login)}
        </div>
    );
};

export default Login;
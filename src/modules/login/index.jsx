import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

import { LoginModel } from './types';
import { Button, Input } from 'components';

import { LoanCalculatorService } from 'services';

const Login = () => {
    const [login, setLogin] = useState(new LoginModel());
    const history = useHistory();

    useEffect(() => {
        //const loanCalculatorService = new LoanCalculatorService(194995.36, 127, 6.02);
        //const generatedData = loanCalculatorService.generate();
        //const refunded = loanCalculatorService.refund(generatedData, 120, 5000);

        const loanCalculatorService = new LoanCalculatorService(207795.02, 133, 6.18);

        const generatedData = loanCalculatorService.generate();

        let index = 2;
        const updatedLoans = loanCalculatorService.refund(generatedData, 133 - index, 4000);
        const current = updatedLoans[index];
        const next = updatedLoans[index + 1];
        debugger;
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${login.username} ${login.password}`);
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
                    <Button text="Login" onClick={handleSubmit} />
                </div>
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
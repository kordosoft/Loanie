import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RegisterModel } from 'modules/authoring/types';
import { identityService } from 'modules/authoring/services';

import { Button, Input } from 'components';

import './index.scss';

const Register = () => {
    const [register, setRegister] = useState(new RegisterModel());
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        identityService.register(register)
            .then(() => {
                history.push('/login');
            })
            .catch(error => {
                toast.error(error);
            });
    };

    const inputOnChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        setRegister({ ...register, ...{ [name]: value } });
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <Input
                    inputType="text"
                    title="Username"
                    name="username"
                    onChange={inputOnChange}
                    value={register.username}
                />

                <Input
                    inputType="password"
                    title="Password"
                    name="password"
                    onChange={inputOnChange}
                    value={register.password}
                />

                <Input
                    inputType="password"
                    title="Confirm Password"
                    name="confirmPassword"
                    onChange={inputOnChange}
                    value={register.confirmPassword}
                />

                <div className="row">
                    <Button type="submit" text="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;
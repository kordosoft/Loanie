import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ForgotPasswordModel } from 'modules/authoring/types';
import { identityService } from 'modules/authoring/services';

import { Button, Input } from 'components';

import './index.scss';

const ForgotPassword = () => {
    const [forgotPassword, setForgotPassword] = useState(new ForgotPasswordModel());
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        identityService.forgotPassword(forgotPassword)
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

        setForgotPassword({ ...forgotPassword, ...{ [name]: value } });
    };

    return (
        <div className="forgotPassword">
            <form onSubmit={handleSubmit}>
                <Input
                    inputType="text"
                    title="Username"
                    name="username"
                    onChange={inputOnChange}
                    value={forgotPassword.username}
                />
                
                <div className="row">
                    <Button type="submit" text="Forgot password" />
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
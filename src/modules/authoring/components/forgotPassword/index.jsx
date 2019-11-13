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

        identityService
            .forgotPassword(forgotPassword)
            .then(() => {
                history.push('/login');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const inputOnChange = (evt) => {
        const { name } = evt.target;
        const { value } = evt.target;

        setForgotPassword({ ...forgotPassword, ...{ [name]: value } });
    };

    return (
        <div className="forgotPassword">
            <div className="row">
                <div className="col text-center mt-5 mb-3">
                    <h1>Forgot Password</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <Input
                            inputType="text"
                            title="Username"
                            name="username"
                            onChange={inputOnChange}
                            value={forgotPassword.username}
                        />

                        <Button type="submit" text="Forgot password" className="btn-primary  btn-block" />
                    </form>  </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

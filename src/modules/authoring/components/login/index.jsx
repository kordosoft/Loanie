import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoginModel } from 'modules/authoring/types';
import { identityService } from 'modules/authoring/services';

import { Button, Input, Password } from 'components';

import './index.scss';

const Login = () => {
  const [login, setLogin] = useState(new LoginModel());
  const history = useHistory();

  useEffect(() => {
    if (identityService.isLoggedIn) {
      toast.warn('already logged in');
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    identityService
      .login(login)
      .then(() => {
        history.push('/loan');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const inputOnChange = (evt) => {
    const { name } = evt.target;
    const { value } = evt.target;

    setLogin({ ...login, ...{ [name]: value } });
  };

  const forgotPassword = () => {
    history.push('/forgotPassword');
  };

  const register = () => {
    history.push('/register');
  };

  return (
    <div className="login mx-auto">
      <div className="row">
        <div className="col text-center mt-5 mb-3">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit} className="col">
          <Input
            inputType="text"
            title="Username"
            name="username"
            onChange={inputOnChange}
            value={login.username}
          />

          <Password
            title="Password"
            name="password"
            onChange={inputOnChange}
            value={login.password}
          />

          <Button type="submit" text="Login" className="btn-primary btn-block" />
        </form>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Button
            text="Forgot password"
            onClick={forgotPassword}
            className="btn-secondary btn-block"
          />
        </div>
        <div className="col">
          <Button text="Register" onClick={register} className="btn-success btn-block" />
        </div>
      </div>
      My Content:
      {JSON.stringify(login)}
    </div>
  );
};

export default Login;

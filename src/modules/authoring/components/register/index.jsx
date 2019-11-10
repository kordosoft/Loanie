import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RegisterModel } from 'modules/authoring/types';
import { identityService } from 'modules/authoring/services';

import { Button, Input, Password } from 'components';

import './index.scss';

const Register = () => {
  const [register, setRegister] = useState(new RegisterModel());
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    identityService
      .register(register)
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

        <Password
          title="Password"
          name="password"
          onChange={inputOnChange}
          value={register.password}
        />

        <Password
          title="Confirm Password"
          name="confirmPassword"
          onChange={inputOnChange}
          value={register.confirmPassword}
        />

        <Button type="submit" text="Register" className="btn-primary  btn-block" />
      </form>
    </div>
  );
};

export default Register;

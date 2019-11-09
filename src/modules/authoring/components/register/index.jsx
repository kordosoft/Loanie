import React, { useState } from 'react';

import './index.scss';

import { RegisterModel } from 'modules/authoring/types';

const Register = () => {
    const [register, setRegister] = useState(new RegisterModel());

    return (
        <div className="login">
            {JSON.stringify(register)}
        </div>
    );
};

export default Register;
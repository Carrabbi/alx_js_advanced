import React, { useState } from 'react';
import Main from 'components/layouts/main/Main';

import Button from 'components/elements/button/Button';
import InputGroup from 'components/elements/input-group/InputGroup';
import styles from './style.module.css';

function Register() {
  const [id_email, setEmail] = useState('');
  const [id_pass, setPassword] = useState('');

  return (
    <Main>
      <div>
        <h1>Register</h1>
        <form className="registerForm">
          <InputGroup id="id_email" type="text" label="email" />
          <InputGroup id="id_pass" type="text" label="password" />
          <Button>Register</Button>
        </form>
      </div>
    </Main>
  );
}

export default Register;

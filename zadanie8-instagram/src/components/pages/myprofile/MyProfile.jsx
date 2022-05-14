import React from 'react';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
// import Button from 'components/elements/button/Button';

import styles from './style.module.css';

function MyProfile() {
  return (
    <Main>
      <h1> My Profile</h1>
      <form className={styles.formMyProfile}>
        <img
          className={styles.imgAv}
          src="https://avatars.githubusercontent.com/u/81747715?s=400&u=ec9a808509edcf74f514184d7ccc5b9728feba8f&v=4"
          alt="description of avatar"
        />
        <InputGroup id="email" type="text" label="email" />
        <InputGroup id="password" type="password" label="password" />
      </form>
    </Main>
  );
}

export default MyProfile;

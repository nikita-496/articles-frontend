import React from 'react';
import { useNavigate } from 'react-router-dom';

import loginForm from '../utils/config/fieldsForm/loginForm';
import personService from '../services/personService';
import localStorageManager from '../persistentStorge/localStorageManager';

import CustomButton from './customMUI/customButton/CustomButton';
import CustomInput from './customMUI/customInput';
import withForm from '../hocs/withForm';

const SignIn = (props) => {
  const data = {
    login: props.formState.login.value,
    password: props.formState.password.value,
  };

  const navigate = useNavigate();

  const handleLogin = (evt) => {
    props.postJSON(evt, personService.login, data).then((res) => {
      localStorageManager.set('user', res);
      console.log(res)
      navigate(`/profile/${res.login}`);
    });
  };

  return (
    <form
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      style={{ 'margin-top': '100px', width: '500px', maxWidth: '100%' }}
      onSubmit={(evt) => handleLogin(evt)}
    >
      {props.onRenderElements().map((el) => (
        <CustomInput
          key={el.id}
          label={el.config.label}
          name={el.config.elementConfig.name}
          type={el.config.elementConfig.type}
          value={el.config.value}
          changed={(evt) => props.onChangeForm(evt, el.id)}
        />
      ))}
      <CustomButton inner={"Войти"}/>
    </form>
  );
};

export default withForm(loginForm)(SignIn);

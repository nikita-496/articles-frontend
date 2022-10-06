import React from 'react';

import { useNavigate } from 'react-router-dom';
import personService from '../services/personService';


import withForm from '../hocs/withForm';
import signUpForm from '../utils/fieldsForm/signUpForm';
import CustomButton from './customMUI/customButton/CustomButton';
import CustomInput from './customMUI/customInput';

const SignUp = (props) => {
  const data = {
    name: props.formState.name.value,
    surname: props.formState.surname.value,
    login: props.formState.login.value,
    password: props.formState.password.value,
    email: props.formState.email.value,
  };

  const navigate = useNavigate();
  const handleRegister = (ev) => {
    props.postJSON(ev, personService.register, data).then(() => {
      navigate('/sign/in');
    });
  };
  return (
    <form
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      style={{ 'margin-top': '100px', width: '500px', maxWidth: '100%' }}
      onSubmit={(ev) => handleRegister(ev)}
    >
      {props.onRenderElements().map((elem) => (
        <CustomInput
          key={elem.id}
          label={elem.config.label}
          name={elem.config.elementConfig.name}
          value={elem.config.value}
          changed={(ev) => props.onChangeForm(ev, elem.id)}
        />
      ))}
      <CustomButton variant='contained' inner={'Зарегистрироваться'}/>
    </form>
  );
};

export default withForm(signUpForm)(SignUp);
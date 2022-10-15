export default {
  name: {
    label: 'Имя',
    elementConfig: {
      type: 'text',
      name: 'name',
      placeholder: 'Введите своё имя'
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    errorMessage: null
  },
  surname: {
    label: 'Фамилия',
    elementConfig: {
      type: 'text',
      name: 'surname',
      placeholder: 'Введите свою фамилию'
    },
    value: '',
    validation: {
      required: false,
    },
    valid: false,
    errorMessage: null
  },
  login: {
    label: 'Логин',
    elementConfig: {
      type: 'text',
      name: 'login',
      placeholder: 'Придумайте уникальный логин'
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    errorMessage: null
  },
  password: {
    label: 'Пароль',
    elementConfig: {
      type: 'password',
      name: 'password',
      placeholder: 'Придумайте пароль (минимм 8 символов)'
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    errorMessage: null
  },
  email: {
    label: 'Email',
    elementConfig: {
      type: 'text',
      name: 'email',
      placeholder: 'Введите свой email'
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    errorMessage: null
  },
};

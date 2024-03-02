import * as yup from 'yup';

const registerSchema = yup.object().shape({
  body: yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required().max(255),
    password: yup.string().required(),
  }),
});


const loginSchema = yup.object().shape({
  body: yup.object().shape({
    username: yup.string().required(),
    // email: yup.string().email().required(),
    password: yup.string().required(),
  }),
});

export { loginSchema, registerSchema }
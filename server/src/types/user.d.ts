interface RegistrationTypes {
  username: string;
  email: string;
  password: string;
}

interface LoginTypes {
  email: string;
  password: string;
}

interface UserTypes {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  verified: boolean;
}

export {
  RegistrationTypes,
  LoginTypes,
  UserTypes
}
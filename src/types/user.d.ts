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
  _id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  verified: boolean;
  secretToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export {
  RegistrationTypes,
  LoginTypes,
  UserTypes
}
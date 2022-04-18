type User = {
  name: string;
  email: string;
  role: string;
  id: string;
};

type Tokens = {
  access: {
    token: string;
    expires: Date;
  };
  refresh: {
    token: string;
    expires: Date;
  };
};

export type AuthData = {
  user: User;
  tokens: Tokens;
};

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  signIn: (email: string, password: string) => Promise<void>;
  signOut(): void;
};
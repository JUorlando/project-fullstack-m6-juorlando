export interface IDataLogin {
  email: string;
  password: string;
}

export interface IDataRegister {
  name: string;
  email: string;
  numero: number;
  password: string;
}

export interface ITypeUserContext {
  onSubmitLogin: (data: IDataLogin) => void;
  onSubmitRegister: (data: IDataRegister) => void;
  autoLogin(): Promise<null | undefined>;
  registerContat(data: IDataRegisterContat): Promise<void>;
}

export interface IContextProps {
  children: React.ReactNode;
}

export interface IInputProps {
  legend: string;
  type: string;
  placeholder: string;
  register: any;
  nameError: string;
}

export interface IButton {
  type: any;
  writing: string;
}

export interface IDataRegisterContat extends IDataRegister {}

export interface IRoutes {
  route: string;
  nameRoute: string;
}

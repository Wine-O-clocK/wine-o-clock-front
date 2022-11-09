import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom]
});

export const LoginUserName = atom({
  key: 'LoginUserName',
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const LoginUserEmail = atom({
  key: 'LoginUserEmail',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const LoginUserPwd = atom({
  key: 'LoginUserPwd',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const LoginUserToken = atom({
  key: 'LoginUserToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
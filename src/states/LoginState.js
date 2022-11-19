import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v4 as uuidv4 } from 'uuid';
const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: `LoginState/${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom]
});

export const LoginUserName = atom({
  key: `LoginUserName/${uuidv4()}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const LoginUserEmail = atom({
  key: `LoginUserEmail/${uuidv4()}`,
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const LoginUserPwd = atom({
  key: `LoginUserPwd/${uuidv4()}`,
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const LoginUserToken = atom({
  key: `LoginUserToken/${uuidv4()}`,
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const LoginSocial = atom({
  key: `LoginSocial/${uuidv4()}`,
  default: '',
  effects_UNSTABLE: [persistAtom],
});

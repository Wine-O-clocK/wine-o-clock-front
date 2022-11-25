import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { PathState } from '../../states/MainState';
import { useSetRecoilState } from 'recoil';

function SignUpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  setPathState(location.pathname);

  const [email, setEmail] = useState('')
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');

  const [pwd, setPwd] = useState('');
  const [isPwd, setIsPwd] = useState(false);
  const [pwdMessage, setPwdMessage] = useState('');

  const [confirmPwd, setConfirmPwd] = useState('');
  const [isPwdConfirm, setIsPwdConfirm] = useState(false);
  const [pwdConfirmMessage, setPwdConfirmMessage] = useState('');

  const [isConfirm, setIsConfirm] = useState(false);

  const onChangeEmail = (e) => {
    e.preventDefault();
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('잘못된 이메일 형식입니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식입니다.');
      setIsEmail(true);
    }
  }

  const onChangePwd = (e) => {
    e.preventDefault();
    const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwdCurrent = e.target.value;
    setPwd(pwdCurrent);

    if (!pwdRegex.test(pwdCurrent)) {
      setPwdMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
      setIsPwd(false);
    } else {
      setPwdMessage('안전한 비밀번호입니다.');
      setIsPwd(true);
    }
  }

  const onChangeConfirmPwd = (e) => {
    e.preventDefault();
    const pwdConfirm = e.target.value;
    let confirmResult = '';
    setConfirmPwd(pwdConfirm);

    if (pwd === pwdConfirm) {
      setPwdConfirmMessage('비밀번호가 일치합니다.');
      setIsPwdConfirm(true);
      confirmResult = true;
    } else {
      setPwdConfirmMessage('비밀번호가 일치하지 않습니다.');
      setIsPwdConfirm(false);
      confirmResult = false;
    }

    if (isEmail && isPwd && confirmResult) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmail && isPwd && isPwdConfirm) {
      navigate('/signup/detail', {
        state: {
          email: email,
          pwd: pwd
        }
      });
    }
  }

  return (
    <SignUpContainer>
      <div className='titleWrap'>
        <h3>회원가입</h3>
      </div>
      <InputForm onSubmit={handleSubmit}>
        <StyledInput
          type='text'
          className='email'
          placeholder='이메일'
          onChange={(e) => onChangeEmail(e)}
          value={email || ''}
        />
        <div className={isEmail ? 'confirmMessage' : 'error'}>{emailMessage}</div>
        <StyledInput
          type='password'
          className='pwd'
          placeholder='비밀번호'
          onChange={(e) => onChangePwd(e)}
          value={pwd || ''}
        />
        <div className={isPwd ? 'confirmMessage' : 'error'}>{pwdMessage}</div>
        <StyledInput
          type='password'
          className='pwd'
          placeholder='비밀번호 확인'
          onChange={(e) => onChangeConfirmPwd(e)}
          value={confirmPwd || ''}
        />
        <div className={isPwdConfirm ? 'confirmMessage' : 'error'}>{pwdConfirmMessage}</div>
        <button
          onSubmit={handleSubmit}
          className={isConfirm ? 'nextBtn active' : 'nextBtn disabled'}
          disabled={!isConfirm ? true : false}
        >
          다음으로 넘어가기
        </button>
      </InputForm>
      <hr />
    </SignUpContainer>
  );
}

export default SignUpPage;

const SignUpContainer = styled.div`
  margin: 0 22px;
  padding: 16px 32px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;

  .titleWrap {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 16px;
    h1 {
      margin: 0;
    }
  }
  .socialSignUp {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  .confirmMessage {
    color: #2a2929;
    font-size: 11px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 8px;
  }
  .error {
    color: red;
    font-size: 11px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 8px;
  }

  input:focus {
    outline: none;
  }
  
  .nextBtn {
    height: 45px;
    border-radius: 5px;
    border: 1px solid #9F9F9F;
    color: #333333;
    margin-bottom: 16px;
  }
  .active {
    background-color: #9F9F9F;
    color: #FFFFFF;
    font-weight: bold;
  }
  .active:active {
    transform : translateY(0.5px);
  }
  .disabled {
    background-color: #CDCDCD;
  }
`
const StyledInput = styled.input`
  height: 45px;
  border-radius: 5px;
  border: 1px solid #8D8D8D;
  color: #8D8D8D;
  background-color: #FAFAFA;
  margin-bottom: 8px;
  padding: 0 10px;
`
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import socialGoogle from '../../assets/img/social_google.svg';
import socialNaver from '../../assets/img/social_naver.svg';
import socialKakao from '../../assets/img/social_kakao.svg';

function SignUpPage() {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [confirm, setConfirm] = useState(true);  // 유효성 검사

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }
  const onChangePwd = (e) => {
    e.preventDefault();
    setPwd(e.target.value)
  }
  const onChangeConfirmPwd = (e) => {
    e.preventDefault();
    setConfirmPwd(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (pwd !== confirmPwd) {
      setConfirm(false)
    } else {
      setConfirm(true)
    }
  }

  return (
    <SignUpContainer>
      <div className='titleWrap'>
        <h1>Wine O'clocK</h1>
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
        <StyledInput
          type='password'
          className='pwd'
          placeholder='비밀번호'
          onChange={(e) => onChangePwd(e)}
          value={pwd || ''}
        />
        <StyledInput
          type='password'
          className='pwd'
          placeholder='비밀번호 확인'
          onChange={(e) => onChangeConfirmPwd(e)}
          value={confirmPwd || ''}
        />
        {
          !confirm && <div className='error'>비밀번호가 일치하지 않습니다.</div>
        }
        <button onSubmit={handleSubmit}>회원가입</button>
      </InputForm>
      <hr />
      <div className='socialSignUp'>
        <img src={socialGoogle}/>
        <img src={socialNaver}/>
        <img src={socialKakao}/>
      </div>
    </SignUpContainer>
  );
}

export default SignUpPage;

const SignUpContainer = styled.div`
  margin: 64px 32px;
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

  .error {
    color: red;
    font-size: 11px;
    font-weight: bold;
    padding: 8px 3px;
  }

  input:focus {
    outline: none;
  }
  
  button {
  height: 30px;
  border-radius: 5px;
  border: lightgray;
  background-color: #8D8D8D;
  color: #FAFAFA;
  margin-bottom: 16px;
  }
`
const StyledInput = styled.input`
  height: 30px;
  border-radius: 5px;
  border: lightgray;
  color: #8D8D8D;
  background-color: #FAFAFA;
  margin-bottom: 16px;
`
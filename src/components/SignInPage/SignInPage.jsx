import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import socialGoogle from '../../assets/img/social_google.svg';
import socialNaver from '../../assets/img/social_naver.svg';
import socialKakao from '../../assets/img/social_kakao.svg';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState(true);  // 유효성 검사

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }
  const onChangePwd = (e) => {
    e.preventDefault();
    setPwd(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <SignUpContainer>
      <div className='titleWrap'>
        <h3>로그인</h3>
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
        {
          !confirm && <div className='error'>비밀번호가 일치하지 않습니다.</div>
        }
        <button onSubmit={handleSubmit}>로그인</button>
      </InputForm>
      <hr />
      <div className='socialSignIn'>
        <img src={socialGoogle}/>
        <img src={socialNaver}/>
        <img src={socialKakao}/>
      </div>
      <div className='otherFeat'>
        <span onClick={() => navigate('/signup')}>회원가입</span>
        <span>비밀번호 찾기</span>
      </div>
    </SignUpContainer>
  );
}

export default SignInPage;

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
  .socialSignIn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 16px;
  }
  .otherFeat {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    color: #4F4F4F;
    font-size: 13px;
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
  height: 45px;
  border-radius: 5px;
  border: 1px solid #9F9F9F;
  background-color: #CDCDCD;
  color: #333333;
  margin-bottom: 16px;
  }
`
const StyledInput = styled.input`
  height: 45px;
  border-radius: 5px;
  border: 1px solid #8D8D8D;
  color: #8D8D8D;
  background-color: #FAFAFA;
  margin-bottom: 16px;
  padding: 0 10px;
`
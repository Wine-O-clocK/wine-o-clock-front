import styled from "styled-components"

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  input:focus {
    outline: none;
  }
  .btn {
    display: block;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    font-size: 14px;
    background-color: #FAFAFA;
    margin: 4px;
    text-align: center;
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
export const StyledInput = styled.input`
  height: 45px;
  border-radius: 5px;
  border: 1px solid #8D8D8D;
  color: #8D8D8D;
  background-color: #FAFAFA;
  margin-bottom: 16px;
  padding: 0 10px;
`

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { PathState } from "../../states/MainState";
import AromaType from "./AromaType";
import WineType from "./WineType";

function SignUpDetailPage() {
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  useEffect(() => {
    setPathState(location.pathname);
  });
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState("");

  // 와인 종류
  const wineType = [
    { type: "레드", value: "red" },
    { type: "화이트", value: "white" },
    { type: "로제", value: "rose" },
    { type: "스파클링", value: "sparkling" },
  ];
  const [checkedItems, setCheckedItems] = useState([]);
  const checkedItemHandler = (item, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, item]);
    } else if (!isChecked && checkedItems.find((type) => type === item)) {
      const filter = checkedItems.filter((type) => type !== item);
      setCheckedItems([...filter]);
    }
  };
  // 와인 당도
  const resType = [
    { type: "예", value: 0 },
    { type: "아니오", value: 1 },
    { type: "잘 모르겠어요", value: 2 },
  ];
  const [sweetRes, setSweetRes] = useState(null);
  // 와인 바디
  const [bodyRes, setBodyRes] = useState(null);
  // 와인 아로마
  const aromaType = [
    { type: "꽃", value: "flower" },
    { type: "시나몬", value: "cinnamon" },
    { type: "파인애플", value: "pineapple" },
    { type: "말린과일", value: "dried fruit" },
    { type: "사과", value: "apple" },
    { type: "레몬", value: "lemon" },
    { type: "견과류", value: "nuts" },
    { type: "베리", value: "berry" },
    { type: "허브", value: "herb" },
  ];
  const [checkedAroma, setCheckedAroma] = useState([]);
  const checkedAromaHandler = (item, isChecked) => {
    if (isChecked) {
      setCheckedAroma([...checkedAroma, item]);
    } else if (!isChecked && checkedAroma.find((aroma) => aroma === item)) {
      const filter = checkedAroma.filter((aroma) => aroma !== item);
      setCheckedAroma([...filter]);
    }

    if (checkedAroma.length > 2) {
      alert("아로마는 최대 3개까지 선택 가능합니다.");
      setCheckedAroma(checkedAroma.filter((aroma) => aroma !== item));
      isChecked = false;
    }
  };

  const isValid =
    userName !== "" &&
    userBirth.length === 8 &&
    checkedItems.length >= 1 &&
    (sweetRes !== null) & (bodyRes !== null)
      ? true
      : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email: location.state.email,
      password: location.state.pwd,
      userName: userName,
      birthday: userBirth,
      userLikeType: checkedItems,
      userLikeSweet: sweetRes,
      userLikeBody: bodyRes,
      userLikeAroma1: checkedAroma[0],
      userLikeAroma2: checkedAroma[1],
      userLikeAroma3: checkedAroma[2],
    };
    console.log(userInfo);
  };

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <div className="stepContainer">
          <div className="stepTitleWrap">
            <span className="step">STEP 1</span>
            <span className="stepTitle">개인 정보 입력</span>
          </div>

          <InputForm>
            <StyledInput
              type="text"
              placeholder="이름"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              maxLength={10}
              required
            />
            <StyledInput
              type="text"
              placeholder="생년월일 (YYYYMMDD)"
              value={userBirth}
              onChange={(e) => setUserBirth(e.target.value)}
              required
            />
          </InputForm>
        </div>

        <div className="stepContainer">
          <div className="stepTitleWrap">
            <span className="step">STEP 2</span>
            <span className="stepTitle">와인 취향 입력</span>
          </div>
          <span className="stepTitle">종류</span>
          <InputForm className="wineType">
            {wineType.map((type, idx) => (
              <WineType
                key={idx}
                type={type}
                checkedItemHandler={checkedItemHandler}
                checkedItems={checkedItems}
              />
            ))}
          </InputForm>
          <span className="stepTitle">단 와인을 좋아하시나요?</span>
          <InputForm className="resType">
            {resType.map((type, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name="responseType"
                  value={type.value}
                  onChange={(e) => setSweetRes(Number(e.target.value))}
                  checked={idx === sweetRes}
                  required
                />
                <span
                  className="responseTypeBtn"
                  style={{
                    color: idx === sweetRes ? "#CB53F5" : "#8D8D8D",
                    border:
                      idx === sweetRes
                        ? "1px solid #CB53F5"
                        : "1px solid #666666",
                  }}
                >
                  {type.type}
                </span>
              </label>
            ))}
          </InputForm>
          <span className="stepTitle">가벼운 와인을 좋아하시나요?</span>
          <InputForm className="resType">
            {resType.map((type, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name="responseType"
                  value={type.value}
                  onChange={(e) => setBodyRes(Number(e.target.value))}
                  checked={idx === bodyRes}
                  required
                />
                <span
                  className="responseTypeBtn"
                  style={{
                    color: idx === bodyRes ? "#CB53F5" : "#8D8D8D",
                    border:
                      idx === bodyRes
                        ? "1px solid #CB53F5"
                        : "1px solid #666666",
                  }}
                >
                  {type.type}
                </span>
              </label>
            ))}
          </InputForm>
          <span className="stepTitle">
            특별히 좋아하는 맛과 향이 있나요? (최대 3개)
          </span>
          <InputForm className="aromaType">
            {aromaType.map((type, idx) => (
              <AromaType
                key={idx}
                type={type}
                checkedAromaHandler={checkedAromaHandler}
                checkedAroma={checkedAroma}
              />
            ))}
          </InputForm>
          <button
            onSubmit={handleSubmit}
            className={isValid ? "signUpBtn active" : "signUpBtn disabled"}
            disabled={!isValid ? true : false}
          >
            회원가입
          </button>
        </div>
      </form>
    </SignUpContainer>
  );
}

export default SignUpDetailPage;

const SignUpContainer = styled.div`
  margin: 0 22px 100px;
  padding: 16px 32px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;

  .stepContainer {
    text-align: left;

    .stepTitle {
      font-size: 15px;
      color: #4f4f4f;
    }
    .stepTitleWrap {
      margin: 8px 0;
      .step {
        display: inline-block;
        color: #8d8d8d;
        margin-right: 6px;
      }
    }
    .wineType {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      padding: 8px 0;
    }
    .resType {
      padding: 8px 0;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 2fr;

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
      .responseTypeBtn {
        display: block;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        font-size: 14px;
        background-color: #fafafa;
        margin: 4px;
        text-align: center;
      }
    }
    .aromaType {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 8px 0;
    }
  }
  .signUpBtn {
    height: 45px;
    border-radius: 5px;
    border: 1px solid #9f9f9f;
    color: #333333;
    margin-bottom: 16px;
    width: 100%;
  }
  .active {
    background-color: #9f9f9f;
    color: #ffffff;
    font-weight: bold;
  }
  .active:active {
    transform: translateY(0.5px);
  }
  .disabled {
    background-color: #cdcdcd;
  }
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  input:focus {
    outline: none;
  }
`;
const StyledInput = styled.input`
  height: 45px;
  border-radius: 5px;
  border: 1px solid #8d8d8d;
  color: #8d8d8d;
  background-color: #fafafa;
  margin-bottom: 16px;
  padding: 0 10px;
`;

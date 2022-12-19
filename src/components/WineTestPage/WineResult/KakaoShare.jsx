import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import socialKakao from "../../../assets/img/kakaoicon.png";
import { BsLink45Deg } from "react-icons/bs";
const { Kakao } = window;

function KakaoShare({ _title, _sub, _imageUrl, _finalType }) {
  const link = window.location.href;

  const onHandleShareKakao = () => {
    console.log("clicked");
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: _sub + ", '" + _title + "'",
        description:
          "It's Wine O'clocK!\n오늘 나에게 어울리는 와인이 궁금하다면?",
        imageUrl: _imageUrl,
        link: {
          mobileWebUrl: "http://localhost:3000",
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러 가기",
          link: {
            mobileWebUrl: "http://localhost:3000",
          },
        },
      ],
    });
  };
  return (
    <>
      <ShareWrap>
        <ShareTitle>친구에게 결과 공유하기 🔗</ShareTitle>
        <ShareBtns>
          <KakaoBtn value="Kakao" onClick={onHandleShareKakao}>
            <img src={socialKakao} alt="카카오톡으로 공유하기" />
          </KakaoBtn>
          <CopyToClipboard text={link} className="CopyBtn">
            <button>
              <BsLink45Deg className="icons" />
            </button>
          </CopyToClipboard>
        </ShareBtns>
      </ShareWrap>
    </>
  );
}

const ShareWrap = styled.div`
  text-align: center;
  border: 3px solid #d68eec;
  border-radius: 10px;
  padding-top: 4px;
  padding-bottom: 10px;
  background-color: #fffcfc;
`;

const ShareTitle = styled.p`
  font-family: "AppleBold";
  font-size: large;
`;

const ShareBtns = styled.div`
  display: flex;
  font-family: "AppleBold";
  font-size: large;
  align-items: center;
  justify-content: center;

  .CopyBtn {
    border-radius: 50%;
    background-color: #49cb75;
    border: none;
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0 18px;
    padding-top: 10px;
    font-size: 36px;
    color: white;
    box-shadow: 0px 2px 4px 0 rgb(0, 0, 0, 0.2);
  }
`;

const KakaoBtn = styled.button`
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  padding: 0;
  margin: 10px;
  box-shadow: 0px 2px 4px 0 rgb(0, 0, 0, 0.2);

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export default KakaoShare;

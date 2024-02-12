import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
    <div className="div">
      <div className="div1">
        <p className="p">{`구호물품 `}</p>
        <p className="p">알리미</p>
      </div>
      <img className="child" alt="" src="/line-1@2x.png" />
      <div className="item" />
      <div className="div2">{`재해구호 물류센터 `}</div>
      <div className="div3">구호물품 지원</div>
      <div className="div4">{`각국 긴급지원 `}</div>
      <div className="div5">자원봉사</div>
      <img className="inner" alt="" src="/line-2@2x.png" />
      <img className="line-icon" alt="" src="/line-3@2x.png" />
      <img className="child1" alt="" src="/line-4@2x.png" />
      <img className="child2" alt="" src="/line-5@2x.png" />
      <b className="b">자세히보기</b>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="div6">
        <p className="p">{`2023년 2월 6일, 튀르키예 동남부 내륙 지역을 강타한 규모 7.7의 강진으로 `}</p>
        <p className="p">{`튀르키예와 시리아에서 인명피해가 `}</p>
        <p className="p">{`이어지고 있습니다. `}</p>
      </div>
      <b className="b1">피해상황</b>
      <img className="icon" alt="" src="/-1@2x.png" />
      <img className="icon1" alt="" src="/-2@2x.png" />
      <img className="icon2" alt="" src="/2-24@2x.png" />
      <img className="icon3" alt="" src="/3-1@2x.png" />
      <img className="icon4" alt="" src="/4-1@2x.png" />
      <b className="b2">필요 구호물품 리스트</b>
      <div className="aid-materialturkiye-container">
        <p className="p">
          주한 튀르키예 대사관은 튀르키예항공과 협력하여 튀르키예로 보낼
          구호물품을 모으고 있습니다.
        </p>
        <p className="p">
          <span>
            필요 구호물품을 지원해 주실 수 있는 분은 아래 주소로 물품을
            보내주시기를 부탁드리며, 물품 발송시 반드시 박스 또는 봉투 표면에
            영문으로
          </span>
          <b className="aid-materialturkiye1"> ‘Aid Material/Turkiye’</b>
          <span className="span">{`라고 표기를 해주시기 바랍니다. `}</span>
        </p>
      </div>
      <div className="rectangle-div" />
      <div className="child3" />
      <b className="b3">{`필요 물품 `}</b>
      <b className="b4">{`가능 물품 `}</b>
      <b className="b5">
        <p className="p">겨울용 의류 어른/유아용, 발전기, 기저귀, 양말</p>
        <p className="p">겨울용 텐트, 우비, 부츠, 목도리</p>
        <p className="p">텐트용 매트리스, 침낭, 보온병, 모자</p>
        <p className="p">히터, 이불, 장갑, 코트자켓</p>
        <p className="p">침대, 점퍼, 바지, 손전등</p>
        <p className="p">{`세척 및 청소용품, 속옷, 생리대 `}</p>
      </b>
      <b className="b6">
        <p className="p">새 물품 권장: 담요, 기저귀, 양말, 장갑 등</p>
        <p className="p">
          중고물품 가능 품목: 텐트, 침낭, 보온병, 손전등, 전기히트 등
        </p>
        <p className="p">&nbsp;</p>
        <p className="p">헌 옷, 의류, 신발 등 중고물품은 제외</p>
        <p className="p">생활용품: 비누, 치약, 수건, 청소용품 등</p>
      </b>
      <img className="error-icon" alt="" src="/error@2x.png" />
      <div className="div7">로그인 · 회원가입</div>
    </div>
  );
};

export default Frame;

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Center.css"; // 스타일시트 경로 가정

export default function Center() {
  const [activeSection, setActiveSection] = useState("turkiye"); // 기본값 'turkiye'로 설정
  const navigate = useNavigate();
  const { id } = useParams();

  const renderContent = () => {
    switch (activeSection) {
      case "turkiye":
        return (
          <div className="flex-row-">
            <div className="div-rectangle">
              <span className="text-f">이글종합물류</span>
              <span className="text-10">자세히보기</span>
            </div>
            <span className="text-14">
              | 발송주소: 인천시 중구 자유무역로 107번길 20, 304-306호
              <br />
              | 받는이: 이글종합물류
              <br />| ARS : 010-8146-5291 박찬영 전무
            </span>
            <div className="goho-mulpyum-balsong-f">
              구호물품 발송 시 주의사항
            </div>
            <div className="nun-bi-ga-maneun-jireok-sigi">
              <span className="nun-bi-ga-maneun-jireok-sigi-10">
                눈/비가 많은 지역, 시기라 배송 중 오염을 막기 위해 비닐로
                포장해서 박스에 넣기
              </span>
              <span className="binilro-pojanghaeseo-bakseu">
                박스 겉면에 ‘Aid Material / Turkiye’라고 적기
              </span>
              <span className="nun-bi-ga-maneun-jireok-sigi-11">
                빠른 분류를 위해 어떤 물품이 들어있는지 영어로 간략하게 내용을
                표기
              </span>
              <span className="binilro-pojanghaeseo-bakseu-12">
                이슬람국가라 식품류를 보낼 때 돼지고기 가공품은 피하기
              </span>
              <span className="sikpum-balsong-si-yutonggihan-sobigihan-neoknakhan-jepumuro-junbi">
                식품 발송 시 유통기한/소비기한 넉넉한 제품으로 준비
              </span>
            </div>
          </div>
        );
      case "paju":
        // "경인, 강원" 버튼 클릭 시 표시될 내용
        return <div className="flex-row-">파주 재해구호물류 관련 정보</div>;
      case "hamyang":
        // "제주, 전라, 경상, 충청" 버튼 클릭 시 표시될 내용
        return <div className="flex-row-">함양 재해구호물류 관련 정보</div>;
      default:
        return <div className="flex-row-">기본 정보 표시</div>;
    }
  };

  return (
    <div className="main-container">
      <div className="rectangle">
        <span className="login-signup" onClick={() => navigate("/login")}>
          로그인
        </span>
        <span className="login-signup-1" onClick={() => navigate("/signup")}>
          회원가입
        </span>
      </div>
      <div className="flex-row-af">
        <span className="relief-supplies-notifier">구호물품 알리미</span>
        <button
          className="rectangle-2"
          onClick={() => setActiveSection("turkiye")}
        >
          튀르키예
        </button>
        <button
          className="rectangle-2"
          onClick={() => setActiveSection("paju")}
        >
          경인, 강원
        </button>
        <button
          className="rectangle-2"
          onClick={() => setActiveSection("hamyang")}
        >
          제주, 전라, 경상, 충청
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

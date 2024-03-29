import { useNavigate } from "react-router-dom";
import "./Common.css"; // 공통 스타일 시트

const Layout = ({}) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="main-container">
        <div className="rectangle" onClick={() => handleNavigate('/')}>
          <span onClick={() => navigate("/login")} className="span-login">
            로그인
          </span>
          <span onClick={() => navigate("/signup")} className="span-register">
            회원가입
          </span>
        </div>
        <div className="flex-row-bcc">
          <span className="span-9">9</span>
          <span className="span-5">5</span>
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <span className="span-emergency-support">각국 긴급지원</span>
          <span className="span-volunteer">자원봉사</span>
          <div className="div-relief-supplies">
            <span className="span-gu">구</span>
            <span className="span-ho">호</span>
            <span className="span-mul">물품<br/>알리미</span>
          </div>
          <span className="span-guho">구호물품 지원</span>
          <span className="span-jae">재해구호 물류센터</span>
          <span className="span-jil">질문하기</span>
        </div>
        <div className="redline"></div>
        {/* 여기에 자식 컴포넌트를 렌더링할 수 있습니다. */}
        {}
      </div>

      <div className="rectangle-15">
        <span className="contact">
          연락처
          <br />
          010-1234-5678
        </span>
        <div className="vertical-divider"></div>
        <span className="aid-notifier">
          구호물품 <br />
          알리미
        </span>
        <div className="vertical-divider"></div>
        <span className="university-challenge">
          SUNGKONGHOE UNIVERSITY
          <br />
          Google Solution Challenge 2024
        </span>
      </div>
    </>
  );
};

export default Layout;

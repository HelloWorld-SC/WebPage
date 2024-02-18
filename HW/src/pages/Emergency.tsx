import "./Emergency.css";

export const Emergency = (): JSX.Element => {
  return (
    <>
      <div className="main-container">
        <div className="rectangle">
          <span>
            로그인
          </span>
          <span>
            회원가입
          </span>
        </div>
        <div className="flex-row-bcc">
        <div className="logo-container">
          <img src="/public/images/logo.png" alt="Logo" className="logo" />
        </div>
        <span className="span-emergency-support">각국 긴급지원</span>
        <span className="span-volunteer">자원봉사</span>
        <div className="div-relief-supplies">
          <span className="span-guho">구호물품 지원</span>
          <span className="span-jae">재해구호 물류센터</span>
          <span className="span-jil">질문하기</span>
        </div>
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

export default Emergency;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate();

  const [showLogisticsDropdown, setShowLogisticsDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // 이미지 관련 코드

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./images/main1.jpg",
    "./images/main2.png",
    "./images/main3.png",
    "./images/main4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6초마다 이미지 변경
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  //

  const handleLoginRegisterClick = () => {
    // 로그인/회원가입 페이지로 이동하는 로직
    console.log("로그인/회원가입 클릭");
    // 예: navigate('/login');
  };

  return (
    <div className="main-container">
      <div className="rectangle" onClick={handleLoginRegisterClick}>
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
        <span
          className="span-emergency-support"
          onMouseEnter={() => setShowSupportDropdown(true)}
          onMouseLeave={() => setShowSupportDropdown(false)}
        >
          각국 긴급지원
          {showSupportDropdown && (
            <div className="dropdown">
              <div onClick={() => navigate("/turkey")}>튀르키예</div>
              <div onClick={() => navigate("/ukraine")}>우크라이나</div>
            </div>
          )}
        </span>

        <span className="span-volunteer">자원봉사</span>
        <div className="div-relief-supplies">
          <span className="span-gu">구</span>
          <span className="span-ho">호</span>
          <span className="span-mul">
            물품
            <br />
            알리미
          </span>
        </div>
        <span className="span-guho">구호물품 지원</span>
        <span
          className="span-jae"
          onMouseEnter={() => setShowLogisticsDropdown(true)}
          onMouseLeave={() => setShowLogisticsDropdown(false)}
        >
          재해구호 물류센터
          {showLogisticsDropdown && (
            <div className="dropdown">
              <div onClick={() => navigate("/center")}>이글종합물류</div>
              <div onClick={() => navigate("/center")}>파주 재해구호물류</div>
              <div onClick={() => navigate("/center")}>함양 재해구호물류</div>
            </div>
          )}
        </span>
        <span className="span-jil">질문하기</span>
      </div>

      <div className="redline"></div>
      <div className="div-flex-row">
        <div className="div-turkiye">
          <div className="div-rectangle">
            <div className="div-rectangle-4" />
            <div className="div-rectangle-5" />
            <span className="span-jase">자세히보기</span>
          </div>
        </div>
        <div
          className="turkey-earthquake-support"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <button onClick={prevImage} className="slider-arrow left-arrow">
            〈
          </button>
          <button onClick={nextImage} className="slider-arrow right-arrow">
            〉
          </button>
        </div>
        <div className="line" />
        <div className="line-6" />
        <div className="line-7" />
        <div className="help-needed">
          <div className="centered-text">
            <div>튀르키예 지진 피해</div>
            <div>긴급 구호 및 지원</div>
          </div>
          <div className="right-aligned-text">당신의 도움이 필요합니다</div>
        </div>
        <div className="line-8" />
      </div>
      <div className="flex-row-caa">
        <div className="rectangle-9" />
        <span className="love-and-warmth">
          사랑과 따뜻한 마음으로 올바른 구호물품을 전달합니다.
        </span>
        <span className="relief-agency-link">구호물품 관련 기관 바로가기 </span>
      </div>
      <div className="rectangle-a">
        <span className="plus">+</span>
        <span className="comment">댓글 0 2024.01.04</span>
        <div className="grayline"></div>
        <span className="comment-c">댓글 0 2024.01.04</span>
        <div className="grayline"></div>
        <span className="comment-e">댓글 0 2024.01.04</span>
        <div className="grayline"></div>
        <span className="q-a">Q & A</span>
        <div className="blackline"></div>
        <span className="question">튀르키예 구호 물품 보내려고합니다.</span>
        <span className="question-11">
          튀르키예 구호물품 보내려고합니다. 터키 공식 후원업체에서 더 이상
          물량을 받지 않는다고합니다ㅠ 개인적으로 선박이나 항공편으로 보내려고
          하는데 비용과 시간이 궁금해서요. 참고로 규모는, 20키로 10박스입니다.
        </span>
        <span className="question-12">
          튀르키예 옷 기부시, 개별 포장 해야하나요?
        </span>
        <span className="question-13">
          안녕하세요 아동복 매장을 운영중이며 새 옷을 기부 하려는데 개별 포장
          해야할까요? 더불어 금액이 아닌 물품은 기부금 영수증 처리 되나요?
        </span>
        <span className="turkey-aid-item">
          튀르키예 구호물품 보내려고합니다.
        </span>
        <span className="turkey-aid-item-14">
          튀르키예 구호물품 보내려고합니다. 터키공식후원업체에서 더 이상 물량을
          받지 않는다고합니다ㅠ 개인적으로 선박이나 항공편으로 보내려고하는데
          비용과 시간이 궁금해서요. 참고로 규모는, 20키로 10박스입니다.
        </span>
      </div>

      <div className="rectangle-15">
        <div className="line-16" />
        <div className="line-17" />
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
        <span className="university-challenge">
          SUNGKONGHOE UNIVERSITY
          <br />
          Google Solution Challenge 2024
        </span>
      </div>
      <div className="line-18" />
      <div className="line-19" />
      <div className="rectangle-1a" />
    </div>
  );
}
export default MainPage;

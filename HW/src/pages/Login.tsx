import { useRef, useState, useEffect, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import "./Login.css"; // 공통 스타일 시트

const clientId =
  "Y839642004651-8nvc0cub99p8n1rla04q2r3dg5oiv56q.apps.googleusercontent.com";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("Login Success:", response);
    // 로그인 성공 시 로직 처리
  };

  const onFailure = (response: any) => {
    console.log("Login Failed:", response);
    // 로그인 실패 시 로직 처리
  };

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

  const handleLoginRegisterClick = () => {
    // 로그인/회원가입 페이지로 이동하는 로직
    console.log("로그인/회원가입 클릭");
    // 예: navigate('/login');
  };

  const responseGoogleSuccess = (response) => {
    console.log("Login Success:", response);
    // 여기에서 서버로 토큰을 보내서 검증하고, 로그인 처리를 합니다.
    // 예: 서버에 사용자 정보 요청 -> JWT 토큰 발급 -> 로컬 스토리지에 저장
  };

  const responseGoogleFailure = (response) => {
    console.error("Login Failed:", response);
  };

  return (
    <>
      <div className="main-container">
        <div className="rectangle" onClick={() => handleNavigate("/")}>
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
            <span className="span-mul">
              물품
              <br />
              알리미
            </span>
          </div>
          <span className="span-guho">구호물품 지원</span>
          <span className="span-jae">재해구호 물류센터</span>
          <span className="span-jil">질문하기</span>
        </div>
        <div className="redline"></div>
        {/* 여기에 자식 컴포넌트를 렌더링할 수 있습니다. */}
      </div>

      <div className="flex-row-cf">
        <span className="welcome">WELCOME </span>
        <div className="line" />
        <div className="line-2" />
        <div className="line-3" />
        <span className="simple-login">간편 로그인 </span>
        <span className="view-details">자세히보기</span>
        <div
          className="image"
          onClick={() => {
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=https://bageasy.vercel.app/loading&response_type=code&scope=email+profile`;
          }}
        >
          {/* 이미지 내용 또는 아이콘 */}
        </div>

        <GoogleLogin
          clientId={
            "839642004651-8nvc0cub99p8n1rla04q2r3dg5oiv56q.apps.googleusercontent.com"
          }
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Custom Google Login Button
            </button>
          )}
        />
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

export default Login;

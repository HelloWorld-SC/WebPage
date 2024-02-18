import "./Turkye.css";

export default function Turkye() {
  return (
    <div className="main-container">
      <div className="rectangle">
        <span>로그인/</span>
        <span>회원가입</span>
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

      <div className='flex-row'>
        <div className='rectangle-a'>
          <span className='disaster-relief-center-b'>재해 구호 물류센터</span>
        </div>
        <div className='logistics-center' />
      </div>

      <div className='flex-row-a'>
        <div className='line' />
        <div className='line-c' />
      </div>
      <div className='flex-row-cdc'>
        <div className='line-d' />
        <div className='line-e' />
      </div>

      <div className='flex-row-dbf'>
        <span className='eagle-logistics'>
          이글종합물류
          <br />
        </span>
        <span className='view-details'>자세히보기</span>
      </div>

      <div className='flex-row-f'>
        <div className='eagle-comprehensive' />
        <div className='rectangle-10'>
          <button className='rectangle-11' />
          <div className='line-12' />
        </div>
        <div className='eagle-logistics-13' />
        <span className='turkiye'>튀르키예 </span>
        <span className='gyeongin-gangwon'>경인, 강원 </span>
        <span className='jeju-jeolla-gyeongsang-chungcheong'>
          제주, 전라, 경상, 충청
        </span>
      </div>
      <span className='sending-address'>
        | 발송주소: 인천시 중구 자유무역로 107번길 20, 304-306호
        <br />
        | 받는이: 이글종합물류
        <br />
        | ARS : 010-8146-5291 박찬영 전무
        <br />
      </span>
      <div className='flex-row-ef'>
        <span className='caution'>
          구호물품 발송 시 주의사항
          <br />
        </span>
        <span className='caution-item'>ㅇ구호물품 발송 시 주의사항</span>
        <div className='shipping-guidelines'>
          <span className='weather-protection'>
            눈/비가 많은 지역, 시기라 배송 중 오염을 막기 위해
          </span>
          <span className='vinyl-packaging'>비닐로 포장해서 박스</span>
          <span className='weather-protection-14'>
            에 넣기
            <br />
            빠른 세관통과를 위해
          </span>
          <span className='vinyl-packaging-15'>
            박스 겉면에 ‘Aid Material / Turkiye’
          </span>
          <span className='weather-protection-16'>
            라고 적기
            <br />
            빠른 분류를 위해 어떤 물품이 들어있는지 영어로 간략하게 내용을 표기
            <br />
            이슬람국가라 식품류를 보낼 때
          </span>
          <span className='vinyl-packaging-17'>
            돼지고기 가공품은 피하기
            <br />
          </span>
          <span className='food-preparation'>
            식품 발송 시 유통기한/소비기한 넉넉한 제품으로 준비
          </span>
        </div>
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
    </div>
  );
}

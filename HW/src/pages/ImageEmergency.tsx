import { useEffect } from 'react';

function ImageEmergency() {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 적용할 전역 스타일
    const originalOverflowX = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';

    // 컴포넌트가 언마운트될 때 원래 스타일로 되돌리기
    return () => {
      document.body.style.overflowX = originalOverflowX;
    };
  }, []);

  // 스크롤 가능한 컨테이너에 직접 배경 이미지를 설정
  const scrollableContainerStyle = {
    minHeight: '100vh',
    overflow: 'auto',
    backgroundImage: `url(/images/capture/emergency.png)`,
    backgroundPosition: 'top center', // 이미지를 상단 중앙에 위치시킵니다.
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat', // 이미지가 반복되지 않도록 설정합니다.
    backgroundAttachment: 'local', // 이미지가 스크롤에 따라 움직이게 합니다.
  };

  return (
    <div style={scrollableContainerStyle}>
      <h1></h1>
      {/* 스크롤을 생성하기 위한 추가 컨텐츠 */}
      <div style={{ height: '2000px' }}></div> {/* 예시로 높이를 설정하여 스크롤 생성 */}
    </div>
  );
}

export default ImageEmergency;

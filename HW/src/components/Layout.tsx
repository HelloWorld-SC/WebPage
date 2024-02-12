import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* 헤더 */}
      <div className="header">여기에 헤더 내용</div>

      {/* 페이지 고유 내용 */}
      <main>{children}</main>

      {/* 푸터 */}
      <div className="footer">여기에 푸터 내용</div>
    </>
  );
};

export default Layout;

// App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // MainPage 대신 IndexPage를 import
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Center from "./pages/Center";
import Support from "./pages/Support";
import Help from "./pages/Help";
import Turkye from "./pages/Turkye";
import Questions from "./pages/Questions";
import Ukraine from "./pages/Ukraine";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />{" "}
        {/* MainPage를 IndexPage로 변경 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/center/:section" element={<Center />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help" element={<Help />} />
        <Route path="/turkye" element={<Turkye />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/ukraine" element={<Ukraine />} />
        {/* 추가할 다른 페이지들에 대한 라우트도 여기에 포함시킵니다. */}
      </Routes>
    </Router>
  );
}

export default App;

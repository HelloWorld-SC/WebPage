// App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Center from "./pages/Center";
import Support from "./pages/Support";
import Help from "./pages/Help";
import Turkye from "./pages/Turkye";
import Questions from "./pages/Questions";
import Ukraine from "./pages/Ukraine";

import ImageMain from './pages/ImageMain';
import ImageCenter from './pages/ImageCenter';
import ImageCenter2 from './pages/ImageCenter2';
import ImageCenter3 from './pages/ImageCenter3';

import ImageEmergency from './pages/ImageEmergency';
import ImageEmergency2 from './pages/ImageEmergency2';
import ImageSupport from './pages/ImageSupport';
import ImageGoogleLogin from './pages/ImageGoogleLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageMain />} />
        <Route path="/imagecenter" element={<ImageCenter />} />
        <Route path="/imagecenter2" element={<ImageCenter2 />} />
        <Route path="/imagecenter3" element={<ImageCenter3 />} />

        <Route path="/imageemergency" element={<ImageEmergency />} />
        <Route path="/imageemergency2" element={<ImageEmergency2 />} />
        <Route path="/imagesupport" element={<ImageSupport />} />
        <Route path="/imageGoogleLogin" element={<ImageGoogleLogin />} />
        


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

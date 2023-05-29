import "./App.css";

import{BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';

import Navigation from './pages/Navigation';
import Regular from './pages/Regular';
import HotContainer from "./pages/Hot";
import StartPage from "./pages/Start";
import MainPage from "./components/MainPage";
import Error404 from "./pages/Error404";


function App() {
  const location = useLocation();
  const isRegularPage = location.pathname === "/regular";
  const isHotPage = location.pathname === "/hot";

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/regular" element={<Regular />} />
          <Route path="/hot" element={<HotContainer />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>

      {!isRegularPage && !isHotPage && MainPage}
        <footer>
          <img
            src="troll-troll-face.gif"
            alt="logo"
            width="70px"
            height="70px"
          />
          <h1 className="Bejba">
            Kajna Krejza
            <hr />
            Memes
          </h1>
        </footer>
      
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
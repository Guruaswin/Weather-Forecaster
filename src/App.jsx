import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/js/Earth";
import WelcomePage from "./components/js/WelcomePage";
import LoginPage from "./components/js/LoginPage";
import SideBar from "./components/js/SideBar";
import Sample from "./components/js/Sample";
import FeedbackPage from "./components/js/FeebackPage";
import CreateAccountPage from "./components/js/CreateAccountPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 95%;
  opaciy: 0.2;
  z-index: 0;
  top: 50px;
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Sample />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
    // <>
    // {/* <Sample /> */}
    // <LoginPage />
    // {/* <FeedbackPage /> */}
    // {/* <CreateAccountPage /> */}
    //   {/* <CanvasContainer>
    //     <Canvas>
    //      <Suspense fallback={null}>
    //       <Earth />
    //      </Suspense>
    //    </Canvas> 
    //  </CanvasContainer>  */}
    // </>
  );
}

export default App;

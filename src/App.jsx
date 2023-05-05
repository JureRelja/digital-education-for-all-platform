import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LanguageProvider from "./store/LanguageProvider";
import UserProvider from "./store/UserProvider";
import LandingPage from "./pages/LandingPage";
import HollTestInfoPage from "./pages/hollandTest/HollTestInfoPage";
import TakeHollTestPage from "./pages/hollandTest/TakeHollTestPage";
import RootComponent from "./pages/RootComponent";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/holland-test", element: <HollTestInfoPage /> },
      { path: "/take-holland-test", element: <TakeHollTestPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <LanguageProvider>
        <UserProvider>
          <div className="center">
            <div className="router-container">
              <RouterProvider router={BrowserRouter} />
            </div>
            <div className={"footer-banner"}>
              <img
                src="../src/images/partners-banner.jpg"
                alt="Erasmus Partners Banner"
              />
            </div>
          </div>
        </UserProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;

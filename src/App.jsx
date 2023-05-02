import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LanguageProvider from "./store/LanguageProvider";
import LandingPage from "./pages/LandingPage";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
]);

function App() {
  return (
    <div className="app">
      <LanguageProvider>
        <div className="router-container">
          <RouterProvider router={BrowserRouter} />
        </div>
      </LanguageProvider>
    </div>
  );
}

export default App;

import { useRoutes } from "react-router-dom";
import TopMenu from "../layouts/TopMenu";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import InitialTestPage from "../pages/InitialTestPage";
import CoursesPage from "../pages/CoursesPage";
import CourseContent from "../pages/CourseContent";
import JobSuggestionsPage from "../pages/JobSuggestionsPage";

function Router() {
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <TopMenu />,
      children: [
        {
          path: "initial-test",
          element: <InitialTestPage />,
        },
        {
          path: "courses",
          children: [
            {
              index: true,
              element: <CoursesPage />,
            },
            {
              path: ":courseID",
              element: <CourseContent />,
            },
          ],
        },
        {
          path: "job-suggestions",
          element: <JobSuggestionsPage />,
        },
      ],
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;

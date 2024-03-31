// import React from "react";
// import { useRoutes } from "react-router-dom";
// import Home from "pages/Home";
// import NotFound from "pages/NotFound";
// import WeekOne from "pages/WeekOne";
// import WeekTwo from "pages/WeekTwo";

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "*", element: <NotFound /> },
//     {
//       path: "weekone",
//       element: <WeekOne />,
//     },
//     {
//       path: "weektwo",
//       element: <WeekTwo />,
//     },
//   ]);

//   return element;
// };

// export default ProjectRoutes;

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import WeekOne from "pages/WeekOne";
import WeekTwo from "pages/WeekTwo";
import IndexPageWeekOne from "pages/WeekOne/index";
import IndexPageWeekTwo from "pages/WeekTwo/index";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "weekone",
      element: <WeekOne />,
      children: [
        { path: "", element: <IndexPageWeekOne /> } // Use relative path for child route
      ]
    },
    {
      path: "weektwo",
      element: <WeekTwo />,
      children: [
        { path: "", element: <IndexPageWeekTwo /> } // Use relative path for child route
      ]
    },
  ]);

  return element;
};

export default ProjectRoutes;

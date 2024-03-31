import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import WeekOnePage from "./pages/WeekOne";
// import WeekTwoPage from "./pages/WeekTwo";
// // Import other pages as needed

// function App() {
//   return (
//     <Router>
//       <Switch>
//         {/* Define your routes */}
//         <Route exact path="/" component={WeekOnePage} />
//         <Route path="/week2" component={WeekTwoPage} />
//         {/* Add more routes as needed */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statement
// import WeekOnePage from "./pages/WeekOne/index.jsx";
// import WeekTwoPage from "./pages/WeekTwo/index.jsx";

// // Import other pages as needed

// function App() {
//   return (
//     <Router>
//       <Routes> {/* Use <Routes> instead of <Switch> */}
//         {/* Define your routes */}
//         <Route path="/" element={<WeekOnePage />} /> {/* Use 'element' prop instead of 'component' */}
//         <Route path="/week2" element={<WeekTwoPage />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
//       <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
//       <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        
//         Quickly use below links to navigate through all pages.
//       </p>
//       <ul style={{ listStyle: "none", padding: "0" }}>
//         <li style={{ marginBottom: "10px" }}>
//           <Link to="/weekone" style={{ color: "#87CEFA", textDecoration: "none" }}>
//             Slide1/WeekOne
//           </Link>
//         </li>
//         <li style={{ marginBottom: "10px" }}>
          
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default Home;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to WeekOne/index.jsx when Home component mountss
    navigate("/weekone");
  }, [navigate]);

  // Empty render function
  return null;
};

export default Home;


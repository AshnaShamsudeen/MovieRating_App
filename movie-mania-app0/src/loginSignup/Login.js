import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Import your CSS file
import SignupModal from "./SignUpModal"; // Import the SignupModal component
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignupModal, setShowSignupModal] = useState(false); // State to control the signup modal
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setShowSignupModal(false);
  };
  const handleLogin = async () => {
    if (!username || !password) {
        setErrorMessage("Credentials Cannot be Blank");
        return; // Don't proceed with login if fields are blank
      }
    // Create the login credentials object
    const loginCredentials = {
      username,
      password,
    };
    try {
      // Make a POST request to the login API
      const response = await fetch("http://localhost:8002/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginCredentials),
      });
      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();
        // Check the role in the response
        if (data.role === "USER") {
          // Redirect to UserHomePage for USER role
          navigate("/");
        } else if (data.role === "ADMIN") {
          // Redirect to AdminHomePage for ADMIN role
          navigate("/admin");
        } else {
          // Handle unknown role or other scenarios
          alert("Unknown role or error in response");
        }
      } else {
        // Handle authentication error
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Invalid username or password");
    }
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>
          Don't have an account?{" "}
          <span
            className="signup-link"
            onClick={() => setShowSignupModal(true)}
          >
            Sign Up
          </span>
        </p>
      </div>
      {/* Render the SignupModal component */}
      <SignupModal
        show={showSignupModal}
        onClose={(handleCloseModal) => setShowSignupModal(false)}
      />
    </div>
  );
};
export default Login;

 

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css"; // Import your CSS file
// import SignupModal from "./SignUpModal"; // Import the SignupModal component
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showSignupModal, setShowSignupModal] = useState(false); // State to control the signup modal
//   const navigate = useNavigate();
 

// const handleCloseModal = () => {
//   setShowSignupModal(false);
// };
//   const handleLogin = () => {
//     // Implement your authentication logic here
//     // For simplicity, we'll assume a successful login goes to UserHomePage
//     if (username === "user" && password === "password") {
//       navigate("/user");
//     } else if (username === "admin" && password === "adminpassword") {
//       navigate("/admin");
//     } else {
//       // Handle invalid credentials
//       alert("Invalid username or password");
//     }
//   };
//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <h2><strong>Login</strong></h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button onClick={handleLogin}>Login</button><br/>
//         <p>
//           Don't have an account?{" "}
//           <span
//             className="signup-link"
//             onClick={() => setShowSignupModal(true)}
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//       {/* Render the SignupModal component */}
//       <SignupModal
//         show={showSignupModal}
//         onClose={(handleCloseModal) => setShowSignupModal(false)}
//       />
//     </div>
//   );
// };
// export default Login;
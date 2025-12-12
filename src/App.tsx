import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext.tsx";
import "./App.css";
// import Form from "./components/form";
// import animation from "../src/assets/Money.json";
// import Lottie from "lottie-react";

function App() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* <Form />
      <Lottie
        style={{ position: "absolute", top: "0", width: "280px" }}
        animationData={animation}
      /> */}
      <div
        style={{
          backgroundColor: theme === "light" ? "#ffffff" : "#0a003b",
          color: theme === "light" ? "#000000" : "#ffffff",
          height: "100vh",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "cenetr",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
            backgroundColor: "#2b00ffff",
          }}
        >
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>
                <a href="/contact">Contact</a>
              </li>
            </Link>
            <li>
              <button
                onClick={toggleTheme}
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#010016ff",
                  color: theme === "light" ? "#02001bff" : "#fff",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Theme Toggle {theme === "light" ? "🌞" : "🌜"}
              </button>
            </li>
          </ul>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                Home Page
              </h1>
            }
          />
          <Route
            path="/about"
            element={
              <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                About Page
              </h1>
            }
          />
          <Route
            path="/contact"
            element={
              <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                Contact Page
              </h1>
            }
          />
          <Route
            path="/*"
            element={
              <div>
                <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                  404 Not Found
                </h1>
                <Link to="/">
                  <h2 style={{ textAlign: "center" }}>
                    Go back to{" "}
                    <span
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Home
                    </span>
                  </h2>
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext.tsx";
import "./App.css";
import { PostsContext } from "./contexts/postsContext.tsx";
import Post from "./components/Post.tsx";
// import Form from "./components/form";
// import animation from "../src/assets/Money.json";
// import Lottie from "lottie-react";

function App() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      desc: "High quality Bluetooth headphones with noise canceling.",
    },
    {
      id: 2,
      title: "Gaming Mouse",
      desc: "Ergonomic RGB gaming mouse with 6 programmable buttons.",
    },
    {
      id: 3,
      title: "Smartwatch",
      desc: "Lightweight smartwatch with heart-rate tracking and GPS.",
    },
    {
      id: 4,
      title: "Portable Speaker",
      desc: "Compact speaker with deep bass and long battery life.",
    },
    {
      id: 5,
      title: "USB-C Charger",
      desc: "Fast charging 30W USB-C wall adapter for all devices.",
    },
  ];

  const { theme, toggleTheme } = useContext(ThemeContext);
  const posts = useContext(PostsContext);
  console.log("Posts from Context:", posts);


  const postsData = products.map(
    (post: { id: number; title: string; desc: string }) => {
      return (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          style={{
            textDecoration: "none",
            textAlign: "center",
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          <div key={post.id}>{post.title}</div>
        </Link>
      );
    }
  );

  return (
    <>
      {/* <Form />
      <Lottie
        style={{ position: "absolute", top: "0", width: "280px" }}
        animationData={animation}
      /> */}

      <PostsContext.Provider value={products}>
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
                <li>Contact</li>
              </Link>
              <Link to="/posts">
                <li>Posts</li>
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
              path="/posts"
              element={
                <div>
                  <h1 style={{ textAlign: "center" }}>Posts</h1>
                  {postsData}
                </div>
              }
            ></Route>
            <Route path="/posts/:id" element={<Post />}></Route>
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
      </PostsContext.Provider>
    </>
  );
}

export default App;

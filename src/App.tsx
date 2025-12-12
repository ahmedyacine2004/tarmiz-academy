import "./App.css";
import Form from "./components/form";
import animation from "../src/assets/Money.json";
import Lottie from "lottie-react";

function App() {
  return (
    <>
      <Form />
      <Lottie style={{position:"absolute", top: "0" , width: "280px"}} animationData={animation} />
    </>
  );
}

export default App;

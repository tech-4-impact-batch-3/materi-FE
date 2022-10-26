import { useState } from "react";
import "./App.css";
import MemberInfo from "./components/MemberInfo";
import Navbar from "./components/Navbar";

function App() {
  const [name, setName] = useState("dila");
  const [age, setAge] = useState(22);

  return (
    <>
      <Navbar />
      <MemberInfo name={name} age={age} info={"Peserta Bootcamp Frontend Skilvul"} imgUrl={"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"} nameColor={"red"} />

      <br />
      <button onClick={() => setName("mika")}>change name</button>
      <button onClick={() => setAge(age + 1)}>change age</button>
    </>
  );
}

export default App;

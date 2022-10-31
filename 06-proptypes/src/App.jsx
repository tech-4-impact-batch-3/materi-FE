import React from "react";
import StudentInfo from "./components/StudentInfo";

const App = () => {
  return (
    <>
      <h1>Prop Types</h1>
      <StudentInfo name={"dila"} age={22} data={[1, "2"]} info={{ hobby: "membaca", class: 12 }} />
    </>
  );
};

export default App;

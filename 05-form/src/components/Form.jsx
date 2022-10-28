import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [program, setProgram] = useState("");
  const [data, setData] = useState({});

  //   console.log(name, address);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setData({ name, address, program });
    // setName("");
    // setAddress("");
    // setProgram("");

    // proses post data menggunakan axios
    axios
      .post("http://localhost:3000/student", {
        name,
        address,
        program,
      })
      .then(() => {
        setData({ name, address, program });
        setName("");
        setAddress("");
        setProgram("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="address">Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label htmlFor="option">Program</label>
        <select value={program} onChange={(e) => setProgram(e.target.value)}>
          <option value="">select program</option>
          <option value="KM">KM</option>
          <option value="SIC">SIC</option>
          <option value="Amman">Amman</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <br />
      <h2>Name: {data.name}</h2>
      <h2>Address: {data.address}</h2>
      <h2>Program: {data.program}</h2>
    </>
  );
};

export default Form;

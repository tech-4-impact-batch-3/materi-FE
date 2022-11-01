import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  // panggil useNavigate agar bisa digunakan pada function handleDetail
  const navigation = useNavigate();
  let data = [
    {
      id: 1,
      name: "Mika",
    },
    {
      id: 2,
      name: "Reyhan",
    },
    {
      id: 3,
      name: "Asep",
    },
  ];

  const handleDetail = (id) => {
    // untuk pindah halaman ke page detail sekaligus membawa id params
    navigation(`/detail/${id}`);
  };
  return (
    <>
      <h1>Ini Home Page</h1>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h2>Nama: {el.name}</h2>
            <button onClick={() => handleDetail(el.id)}>Detail</button>
          </div>
        );
      })}
      <Link to={"about/student"}>About Student |</Link>
      <Link to={"about/teacher"}>About Teacher</Link>
    </>
  );
};

export default HomePage;

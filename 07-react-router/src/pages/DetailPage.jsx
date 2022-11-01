import { useParams } from "react-router-dom";

const DetailPage = () => {
  // useParams untuk menangkap id yang kita kirim dari halaman home
  const { id } = useParams();
  console.log(id);

  const detailInfo = [
    {
      id: 1,
      name: "Mika",
      address: "jakarta",
      hobby: "menari",
    },
    {
      id: 2,
      name: "Reyhan",
      address: "bandung",
      hobby: "memancing",
    },
    {
      id: 3,
      name: "Asep",
      address: "malang",
      hobby: "membaca",
    },
  ];
  // ide:
  // 1. filter data dari detailInfo dan dicocokkan dengan id yg kita kirim dari home (yg ditangkap di params)
  // 2. Mapping data untuk menampilkan hasil yang sesuai dari data filter
  return (
    <>
      {detailInfo
        .filter((el) => el.id === +id)
        .map((el) => {
          return (
            <div key={el.id}>
              <h2>Name: {el.name}</h2>
              <h2>Address: {el.address}</h2>
              <h2>Hobby: {el.hobby}</h2>
            </div>
          );
        })}
    </>
  );
};

export default DetailPage;

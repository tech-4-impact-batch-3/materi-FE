import axios from "axios";
import { useEffect, useState } from "react";

function ListDigimon() {
  const [isLoading, setIsLoading] = useState(true);
  const [digimons, setDigimons] = useState([]);

  console.log(1, "List Digimon dipanggil");

  useEffect(() => {
    console.log(3, "ListDigimon sudah mount");

    async function getDigimon() {
      const res = await axios("https://digimon-api.vercel.app/api/digimon")
      setDigimons(res.data);
      setIsLoading(false);
    }

    getDigimon()
  }, []);
  // tanpa [] -> dijalaninn berkali2 (mount, update)
  // [] -> dijalaninn 1x aja (mount)

  console.log(digimons);

  const clickDigimon = (item) => {
    console.log("berhasil di click")
    console.log(item);
  }

  if (isLoading) return <span>loading...</span>

  return (
    <>
      {console.log(2, "return (tampilin jsx)")}
      <h1>Hallo</h1>

      {digimons.map((item, index) => (
        <div key={index} onClick={() => clickDigimon(item)}>
          <img src={item.img} alt="" width={200} />
          <h2>{item.name}</h2>
        </div>
      ))}
    </>
  );
}

export default ListDigimon;

import React, { useContext } from "react";
import { KeranjangCountContext } from "../KeranjangCountProvider";

function SummaryPembelian() {
  const { keranjangCount } = useContext(KeranjangCountContext);

  return (
    <div>
      <h1>Summary Pembelian</h1>

      <h2>jumlah barang yg dibeli ada {keranjangCount}</h2>
    </div>
  );
}

export default SummaryPembelian;

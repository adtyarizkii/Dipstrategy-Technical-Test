import React from "react";
import world from "../assets/beranda/world.png";

export default function Esg() {
  return (
    <div style={{ backgroundColor: "#F4F4F4", marginBottom: "-11rem" }}>
      <div className="container p-5">
        <h1 style={{ color: "#364384" }}>ESG</h1>
      </div>
      <div className="container p-5 d-flex">
        <div>
          <h3 style={{ color: "#364384" }}>Kinerja Lingkungan</h3>
          <br />
          <h5>Kinerja Sosial</h5>
          <h5>Kinerja Tata Ekonomi</h5>
        </div>
        <div
          style={{
            width: "auto",
            marginTop: "-10rem",
          }}
        >
          <img
            src={world}
            alt=""
            style={{
              objectFit: "cover",
              maxWidth: "500px",
              maxHeight: "500px",
            }}
          />
        </div>
        <div className="ms-5" style={{ width: "30%", marginTop: "-50px" }}>
          <small>
            Upaya pengelolaan lingkungan dilakukan sesuai dengan komitmen
            Perusahaan dalam dokumen Rencana Pengelolaan Lingkungan dan Rencana
            Pemantauan Lingkungan serta dokumen Upaya Pengelolaan Lingkungan dan
            Upaya Pemantauan Lingkungan yang dituangkan dalam Rencana Kerja
            Tahunan Teknis dan Lingkungan
          </small>
          <br />
          <button className="btn-selengkapnya">Selengkapnya</button>
        </div>
      </div>
    </div>
  );
}

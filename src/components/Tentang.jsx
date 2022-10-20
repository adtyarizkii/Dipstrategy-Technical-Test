import React from "react";
import video from "../assets/co-profile/vid.mp4";

export default function Tentang() {
  return (
    <>
      <div className="container d-flex p-5" style={{ marginTop: "-120px" }}>
        <div style={{ width: "50%" }} className="ms-5 me-3">
          <h2 className="my-4" style={{ color: "white", fontWeight: "600" }}>
            TENTANG KAMI
          </h2>
          <small>
            <b>
              Inovasi dan transformasi bagi kami adalah suatu keniscayaan,
              karena kami ingin meraih masa depan. Dari perusahaan pertambangan
              batu bara, kami ingin menjadi perusahaan energi kelas dunia,yang
              peduli lingkungan. Itulah visi kami.
            </b>
          </small>
          <br />
          <button className="btn-selengkapnya p-3 mt-2">LIHAT SEMUA</button>
        </div>
        <div style={{ width: "50%" }}>
          <video width="100%" height="100%" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="container d-flex p-5" style={{ marginTop: "-30px" }}>
        <div
          className="justify-content-center align-items-center me-3 ms-5 karir"
          style={{ width: "32%" }}
        >
          <span>
            KARIR di <b>BUKIT ASAM</b>
          </span>
        </div>
        <div
          className="justify-content-center align-items-center ms-auto penipuan"
          style={{ width: "50%" }}
        >
          <p className="mt-4">
            <b>Waspada Penipuan,</b> Rekrutmen hanya akan diumumkan melalui
            situs resmi perusahaan & surat kabar nasional
          </p>
          <br />
          <button
            className="btn-selengkapnya p-3"
            style={{ marginTop: "-5rem" }}
          >
            Klik Disini
          </button>
        </div>
      </div>
    </>
  );
}

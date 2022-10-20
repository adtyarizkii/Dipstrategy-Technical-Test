import React from "react";
import { Link } from "react-router-dom";
import { anakPerusahaan } from "../dummyData/anakPerusahaan";

export default function AnakPerusahaan() {
  return (
    <div className="py-5">
      <div className="container d-flex">
        <h1 style={{ fontWeight: "900" }}>Anak Perusahaan</h1>
        <button className="btn-selengkapnya ms-auto">Selengkapnya</button>
      </div>
      <div className="containerCard py-5">
        {anakPerusahaan.slice(0, 4).map((item) => (
          <Link to="" key={item.id}>
            <div className="box">
              <div className="imgBx d-flex justify-content-center align-items-center">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { anakPTL } from "../dummyData/anakPTL";

export default function AnakPerusahaanTL() {
  return (
    <div className="py-3" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="container mt-5 d-flex">
        <h1 style={{ fontWeight: "900" }}>Anak Perusahaan Tidak Langsung</h1>
        <button className="btn-selengkapnya ms-auto">Selengkapnya</button>
      </div>
      <div className="containerCardTL py-5">
        {anakPTL.slice(0, 4).map((item) => (
          <Link to="" key={item.id}>
            <div className="boxTL">
              <div className="imgBxTL d-flex justify-content-center align-items-center">
                <img src={item.img} alt="" />
              </div>
              <div className="contentTL">
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

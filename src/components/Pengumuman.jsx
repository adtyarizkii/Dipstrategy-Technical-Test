import React from "react";
import bgImg from "../assets/pengumuman/bg.png";
import ss from "../assets/pengumuman/ss-fb.png";
import paper from "../assets/pengumuman/paper.png";
import date from "../assets/pengumuman/date.png";
import { pengumuman } from "../dummyData/pengumuman";

export default function Pengumuman() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bgImg})`,
        height: "115vh",
        width: "100%",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-5 d-flex justify-content-center align-items-center">
        <div
          style={{ width: "50%" }}
          className="d-flex justify-content-center align-items-center mt-4"
        >
          <img src={ss} alt="" style={{ width: "370px", height: "520px" }} />
        </div>
        <div style={{ width: "50%", color: "white" }} className="mt-4">
          <h1 style={{ fontWeight: "600" }}>PENGUMUMAN</h1>
          {pengumuman.slice(0, 6).map((item) => (
            <div className="d-flex mb-3">
              <div className="d-flex" style={{ width: "15%" }}>
                <img src={paper} alt="" />
              </div>
              <div style={{ width: "100%" }}>
                <img src={date} alt="" />
                <small className="ms-3">{item.date}</small>
                <br />
                <small>{item.desc}</small>
              </div>
            </div>
          ))}
          <button className="btn-selengkapnya p-3">LIHAT SEMUA</button>
        </div>
      </div>
    </div>
  );
}

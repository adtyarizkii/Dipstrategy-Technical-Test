import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import sponsor from "../assets/footer/sponsor.png";
import fb from "../assets/footer/fb.png";
import ig from "../assets/footer/insta.png";
import twit from "../assets/footer/twitter.png";
import linkedin from "../assets/footer/linkedin.png";

export default function Footer() {
  return (
    <section className="py-5 footer">
      <div className="container d-flex">
        <div className="">
          <img
            src={logo}
            alt="logo.png"
            style={{ width: "279px", height: "49px" }}
          />
          <p
            className="mt-4"
            style={{
              maxWidth: "320px",
              maxHeight: "108px",
              textAlign: "justify",
              color: "white",
              fontSize: "10px",
            }}
          >
            Sejalan dengan visi menjadi perusahan energi kelas dunia yang peduli
            lingkungan, Bukit Asam terus melakukan inovasi dalam bisnis energi
            berbasis batu bara, renewable energy, dan proyek hilirisasi batu
            bara.
          </p>
        </div>
        <div className="ms-5" style={{ maxHeight: "0px" }}>
          <Link to="" className="link-footer">
            <p className="mt-4">TENTANG</p>
          </Link>
          <Link to="" className="link-footer">
            <p>BISNIS KAMI</p>
          </Link>
          <Link to="" className="link-footer">
            <p>TATA KELOLA</p>
          </Link>
          <Link to="" className="link-footer">
            <p>ESG</p>
          </Link>
        </div>
        <div className="ms-5" style={{ maxHeight: "0px" }}>
          <Link to="" className="link-footer">
            <p className="mt-4">HUBUNGAN INVESTOR</p>
          </Link>
          <Link to="" className="link-footer">
            <p>LAPORAN</p>
          </Link>
          <Link to="" className="link-footer">
            <p>BERITA</p>
          </Link>
          <Link to="" className="link-footer">
            <p>SDM</p>
          </Link>
        </div>
        <div className="ms-5" style={{ maxHeight: "0px" }}>
          <p className="mt-4 link-footer">CONTACT</p>
          <p className="link-footer" style={{ maxWidth: "200px" }}>
            Jl. Parigi No.1, Tanjung Enim 31716 Sumatera Selatan
            <br />
            (021) 734 451 096
            <br />
            Email: corsec@ptba.co.id
          </p>
        </div>
        <div className="mt-5">
          <Link to="">
            <img src={sponsor} alt="" />
          </Link>
        </div>
      </div>
      <div className="container border-top">
        <div className="d-flex justify-content-center align-items-center">
          <a href="#">
            <img src={fb} alt="fb" className="mt-2 me-2" />
          </a>
          <a href="#">
            <img src={ig} alt="fb" className="mt-2 me-2" />
          </a>
          <a href="#">
            <img src={twit} alt="fb" className="mt-2 me-2" />
          </a>
          <a href="#">
            <img src={linkedin} alt="fb" className="mt-2" />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <span className="link-footer me-auto">
            ©Copyright 2022 PT Bukit Asam Tbk All Rights Reserved
          </span>
          <a href="" className="link-footer">
            <span>Privacy Policy</span>
          </a>
        </div>
      </div>
    </section>
  );
}

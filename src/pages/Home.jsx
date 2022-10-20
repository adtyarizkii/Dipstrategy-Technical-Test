import React, { useState } from "react";
import { NavbarHome } from "../components/NavbarHome";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import sp from "../assets/beranda/sistem-pengaduan.png";
import ep from "../assets/beranda/e-procure.png";
import lt from "../assets/beranda/laporan-tahunan.png";
import siarp from "../assets/beranda/siaran-pers.png";
import hk from "../assets/beranda/hari-kesaktian.png";
import lineHk from "../assets/beranda/line-hk.png";
import pengembangan from "../assets/beranda/pengembangan-bisnis.png";
import { Link } from "react-router-dom";
import { Button, Collapse } from "react-bootstrap";
import plus from "../assets/beranda/plus.png";
import min from "../assets/beranda/min.png";
import scroll from "../assets/beranda/scroll.png";
import Esg from "../components/Esg";
import Berita from "../components/Berita";

export default function Home() {
  const title = "Beranda";
  document.title = "PTBA | " + title;

  const [generik, setGenerik] = useState(false);
  const [pembangkit, setPembangkit] = useState(false);
  const [benefisasi, setBenefisasi] = useState(false);

  return (
    <div>
      <NavbarHome />
      <Jumbotron />
      {/* SISTEM PENGADUAN */}
      <div className="container d-flex py-5">
        <div className="p-5" style={{ width: "38%" }}>
          <div className="d-flex mb-4 image">
            <img src={sp} alt="" style={{ width: "50px", height: "60px" }} />
            <h5 className="p-3 ms-2 image-desc">Sistem Pengaduan</h5>
          </div>
          <div className="d-flex mb-4 image">
            <img src={ep} alt="" style={{ width: "50px", height: "60px" }} />
            <h5 className="p-3 ms-2 image-desc">E Procurement</h5>
          </div>
          <div className="d-flex mb-4 image">
            <img src={lt} alt="" style={{ width: "50px", height: "60px" }} />
            <h5 className="p-3 ms-2 image-desc">Laporan Tahunan</h5>
          </div>
          <div className="d-flex mb-4 image">
            <img src={siarp} alt="" style={{ width: "50px", height: "60px" }} />
            <h5 className="p-3 ms-2 image-desc">Siaran Pers</h5>
          </div>
        </div>
        <div
          className="p-5 mt-5 d-flex"
          style={{ width: "75%", height: "20rem", backgroundColor: "#F4F4F4" }}
        >
          <img src={hk} alt="" />
          <div className="ms-4">
            <h5 className="mb-4">
              <b>
                <u>Hari Kesaktian Pancasila</u>
              </b>
            </h5>
            <small className="text-muted">
              Hari Kesaktian Pancasila adalah hari nasional dan diperingati
              setelah Peristiwa Gerakan 30 September atau yang lebih dikenal
              sebagai G30S/PKI.{" "}
            </small>
            <br />
            <br />
            <br />
            <Link to="" style={{ color: "red" }}>
              <p>
                <i>Selengkapnya</i>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={lineHk}
        alt=""
        style={{ marginLeft: "37%", marginTop: "-230px", width: "63%" }}
      />
      {/* PENGEMBANGAN BISNIS */}
      <div className="container mb-4">
        <h1 className="mb-3" style={{ fontWeight: "700" }}>
          PENGEMBANGAN BISNIS
        </h1>
        <p className="text-muted" style={{ width: "85%", fontSize: "18px" }}>
          Pengembangan bisnis kami terdiri Generik (Tambang & Infrastruktur),
          pengembangan bisnis pembangkit, hilirisasi batubara dan bisnis
          pendukung
        </p>
        <div className="d-flex">
          <div>
            <img src={pengembangan} alt="" />
          </div>
          <div className="d-block" style={{ width: "100%" }}>
            <Button
              className="btn-pengembangan"
              style={{ width: "100%" }}
              onClick={() => setGenerik(!generik)}
              aria-controls="example-collapse-text"
              aria-expanded={generik}
            >
              <img src={generik ? min : plus} alt="" className="me-5" />
              <span style={{ color: generik ? "#364384" : "black" }}>
                GENERIK
              </span>
            </Button>
            <Collapse in={generik}>
              <div id="example-collapse-text" className="border">
                <small>
                  Pengembangan bisnis pembangkit listrik (Investasi,
                  Engineering, Procurement, Construction (EPC), Operation &
                  Maintenance (O&M)) dalam lingkup nasional & regional, serta
                  pengembangan kompetensi perusahaan di bidang kelistrikan,
                  melalui investasi dan kerja sama strategis untuk pengembangan
                  pembangkit & usaha EPC dan O&M.
                </small>
                <button className="btn-selengkapnya mt-2">Selengkapnya</button>
              </div>
            </Collapse>
            <Button
              className="btn-pengembangan"
              onClick={() => setPembangkit(!pembangkit)}
              aria-controls="example-collapse-text"
              aria-expanded={pembangkit}
            >
              <img src={pembangkit ? min : plus} alt="" className="me-5" />
              <span style={{ color: pembangkit ? "#364384" : "black" }}>
                PEMBANGKIT
              </span>
            </Button>
            <Collapse in={pembangkit}>
              <div id="example-collapse-text" className="border">
                <small>
                  Pengembangan bisnis pembangkit listrik (Investasi,
                  Engineering, Procurement, Construction (EPC), Operation &
                  Maintenance (O&M)) dalam lingkup nasional & regional, serta
                  pengembangan kompetensi perusahaan di bidang kelistrikan,
                  melalui investasi dan kerja sama strategis untuk pengembangan
                  pembangkit & usaha EPC dan O&M.
                </small>
                <button className="btn-selengkapnya mt-2">Selengkapnya</button>
              </div>
            </Collapse>
            <Button
              className="btn-pengembangan"
              onClick={() => setBenefisasi(!benefisasi)}
              aria-controls="example-collapse-text"
              aria-expanded={benefisasi}
            >
              <img src={benefisasi ? min : plus} alt="" className="me-5" />
              <span style={{ color: benefisasi ? "#364384" : "black" }}>
                BENEFISASI
              </span>
            </Button>
            <Collapse in={benefisasi}>
              <div id="example-collapse-text" className="border">
                <small>
                  Pengembangan bisnis pembangkit listrik (Investasi,
                  Engineering, Procurement, Construction (EPC), Operation &
                  Maintenance (O&M)) dalam lingkup nasional & regional, serta
                  pengembangan kompetensi perusahaan di bidang kelistrikan,
                  melalui investasi dan kerja sama strategis untuk pengembangan
                  pembangkit & usaha EPC dan O&M.
                </small>
                <button className="btn-selengkapnya mt-2">Selengkapnya</button>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      {/* SCROLL IMAGE */}
      <div>
        <marquee behavior="scroll" direction="left" scrollamount="25">
          <img src={scroll} width="100%" height="40" alt="Natural" />
        </marquee>
      </div>
      {/* ESG */}
      <Esg />
      {/* BERITA */}
      <Berita />
      <Footer />
    </div>
  );
}

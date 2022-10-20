import React from "react";
import { Card } from "react-bootstrap";
import date from "../assets/berita/date.png";

import { news } from "../dummyData/berita";

export default function Berita() {
  return (
    <div style={{ marginTop: "4rem", backgroundColor: "white" }}>
      <div className="container">
        <div className="d-flex mb-4">
          <h1>BERITA</h1>
          <button className="btn-selengkapnya ms-auto">Selengkapnya</button>
        </div>
        <div className="mb-5 d-flex ">
          {news.slice(0, 4).map((berita) => (
            <div key={berita?.id} className="me-3" style={{ width: "18rem" }}>
              <Card.Body>
                <img
                  src={berita?.img}
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Subtitle className="mt-2 mb-2 text-muted">
                  <img src={date} alt="" className="date" />
                  <small>{berita?.date}</small>
                </Card.Subtitle>
                <small>{berita?.desc}</small>
              </Card.Body>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

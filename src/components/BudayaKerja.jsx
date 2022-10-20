import React from "react";
import cerdas from "../assets/co-profile/cerdas.png";
import keras from "../assets/co-profile/keras.png";
import ikhlas from "../assets/co-profile/ikhlas.png";
import tuntas from "../assets/co-profile/tuntas.png";
import { Card } from "react-bootstrap";

export default function BudayaKerja() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }} className="py-5">
      <div className="container">
        <div>
          <h1 style={{ fontWeight: "900" }}>Budaya Kerja</h1>
        </div>
        <div className="d-flex">
          <div className="mt-5 me-3 image" style={{ width: "18rem" }}>
            <Card.Body>
              <img
                src={cerdas}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4 className="mt-3 kerja">Kerja Cerdas</h4>
            </Card.Body>
          </div>
          <div className="mt-5 me-3 image" style={{ width: "18rem" }}>
            <Card.Body>
              <img
                src={keras}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4 className="mt-3 kerja">Kerja Keras</h4>
            </Card.Body>
          </div>
          <div className="mt-5 me-3 image" style={{ width: "18rem" }}>
            <Card.Body>
              <img
                src={ikhlas}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4 className="mt-3 kerja">Kerja Ikhlas</h4>
            </Card.Body>
          </div>
          <div className="mt-5 me-3 image" style={{ width: "18rem" }}>
            <Card.Body>
              <img
                src={tuntas}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4 className="mt-3 kerja">Kerja Tuntas</h4>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  );
}

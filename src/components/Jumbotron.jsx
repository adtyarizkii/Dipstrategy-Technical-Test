import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import bg1 from "../assets/bghome/bg1.png";
import bg2 from "../assets/bghome/bg2.png";
import bg3 from "../assets/bghome/bg3.png";

export default function Jumbotron() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={bg1} alt="First slide" />
          <Carousel.Caption className="capt">
            <h1>
              Untuk Ketahanan Energi Nasional Dan Kesejahteraan Masyarakat
            </h1>
            <Link to="/" className="selengkapnya">
              <span>Selengkapnya</span>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={bg2} alt="Second slide" />
          <Carousel.Caption className="capt">
            <h1>Mendukung Net Zero Mission</h1>
            <Link to="/" className="selengkapnya">
              <span>Selengkapnya</span>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={bg3} alt="Third slide" />
          <Carousel.Caption className="capt">
            <h1>
              Pembangunan Berkelanjutan Dilandasi Filosopi Tumbuh Bersama
              Lingkungan
            </h1>
            <Link to="/" className="selengkapnya">
              <span>Selengkapnya</span>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

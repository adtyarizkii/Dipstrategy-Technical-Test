import React from "react";
import Footer from "../components/Footer";
import { NavbarHome } from "../components/NavbarHome";
import bgImg from "../assets/bg-tentang.png";
import video from "../assets/co-profile/vid.mp4";
import visi from "../assets/co-profile/visi.png";
import misi from "../assets/co-profile/misi.png";
import sejarah from "../assets/co-profile/sejarah.png";
import tatanilai from "../assets/co-profile/tata-nilai.png";
import BudayaKerja from "../components/BudayaKerja";
import AnakPerusahaan from "../components/AnakPerusahaan";
import AnakPerusahaanTL from "../components/AnakPerusahaanTL";

export default function CompanyProfile() {
  const title = "Profil Perusahaan";
  document.title = "PTBA | " + title;

  return (
    <div>
      <NavbarHome />
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImg})`,
          height: "110vh",
          width: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="route">
        <p className="p-2">
          Home / Tentang /{" "}
          <span style={{ color: "#364384" }}>Profil Perusahaan</span>
        </p>
      </div>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div className="container py-5">
          <h4>
            Kami terus transparan untuk membangun energi bersih untuk{" "}
            <b>
              <i>Peradaban, Kemakmuran,</i>
            </b>{" "}
            dan{" "}
            <b>
              <i>Masa Depan yang Lebih Cerah </i>
            </b>
            melalui inovasi, kualitas, dan keberlanjutan.
          </h4>
          <p className="mt-5">
            Inovasi dan transformasi adalah kunci kami untuk merangkul masa
            depan. Bukit Asam semakin memperkuat fondasi untuk mencapai visinya
            menjadi perusahaan energi kelas dunia yang peduli lingkungan.
          </p>
          <video width="100%" height="100%" controls>
            <source src={video} type="video/mp4" />
          </video>
          <div className="container p-5">
            <div className="d-flex">
              <img
                src={visi}
                alt="visi"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ms-4">
                <h4 style={{ fontWeight: "700" }}>Visi</h4>
                <p style={{ fontWeight: "500" }}>
                  Perusahaan energi kelas dunia yang peduli lingkungan.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={misi}
                alt="misi"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ms-4">
                <h4 style={{ fontWeight: "700" }}>Visi</h4>
                <p style={{ fontWeight: "500" }}>
                  Mengelola sumber energi dengan mengembangkan kompetensi
                  perusahaan dan keunggulan manusia untuk memberikan nilai
                  tambah yang maksimal bagi pemangku kepentingan dan lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${sejarah})`,
          height: "128vh",
          width: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${tatanilai})`,
          height: "110vh",
          width: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <BudayaKerja />
      <AnakPerusahaan />
      <AnakPerusahaanTL />
      <Footer />
    </div>
  );
}

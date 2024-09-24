"use client";

import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const workList = [
  {
    img: "/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg",
    title: "Livestreaming – Kursinhalte nachhaltig verfügbar",
    content: "",
  },
];

export function initializeFullHeight() {
  if (typeof window !== "undefined") {
    const setFullHeight = () => {
      const elements =
        document.querySelectorAll < HTMLElement > ".js-fullheight";
      Array.from(elements).forEach((element) => {
        element.style.height = `${window.innerHeight}px`;
      });
    };

    setFullHeight();
    window.addEventListener("resize", setFullHeight);
  }
}

export function initializeCarousel() {
  if (typeof window !== "undefined") {
    const $ = require("jquery");
    require("owl.carousel");

    $(document).ready(function () {
      $(".featured-carousel").owlCarousel({
        loop: true,
        autoWidth: true,
        autoplay: true,
        margin: 30,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: true,
        dots: true,
        video: true,
        autoplayHoverPause: false,
        items: 1,
        lazyLoad: true,
        center: true,
        navText: [
          "<span class='ion-ios-arrow-back text-dark'></span>",
          "<span class='ion-ios-arrow-forward  text-dark'></span>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    });
  }
}

const ReactCarouselComponent = ({ data }) => {
  useEffect(() => {
    initializeFullHeight();
    initializeCarousel();
  }, []);

  return (
    <div className="featured-carousel owl-carousel">
      <div className="item">
        <div className="work" style={{ width: "30rem" }}>
          <img
            src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg"
            className="img-fluid imgFit"
            height="320px"
            alt=""
          />

          <div className="text-block text-white bgGradient text p-5">
            <h4 className="text-center py-3 fw-bold">
              {" "}
              Livestreaming – Kursinhalte nachhaltig verfügbar{" "}
            </h4>
            <p className="text-start fw-bold text-wrap">
              Auf unserer digitalen Lernplattform erhalten die UMCH-Stu
              dierenden an einem Ort gebündelt alle Informationen und
              Neuigkeiten rund um das Studium und den Campus. Sie bildet die
              Grundlage für das digitale Lernen und die Kom munikation unter den
              Studierenden und Dozentinnen und Dozenten des UMCH. Hier werden
              alle Kurse für die Stu dierenden verwaltet und sämtliche
              Lehrmaterialien hoch geladen. Diese sind – ebenso wie die
              Videoaufzeichnungen – jederzeit über Computer, Laptop oder
              Smartphone abruf bar. Über die digitale Lernplattform können sich
              die Studie renden außerdem für die Student Clubs oder ReachHigher
              Veranstaltungen registrieren sowie das Student Counseling durch
              das Dekanat in Anspruch nehmen.
            </p>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="work" style={{ width: "30rem" }}>
          <img
            src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg"
            className="img-fluid imgFit"
            height="320px"
            alt=""
          />

          <div className="text-block text-white bgGradient text p-5">
            <h4 className="text-center py-3 fw-bold">
              Digitale Lernplattform – kollaborativ lernen und effektiv
              kommunizieren{" "}
            </h4>
            <p className="text-start fw-bold text-wrap">
              Auf unserer digitalen Lernplattform erhalten die UMCH-Stu
              dierenden an einem Ort gebündelt alle Informationen und
              Neuigkeiten rund um das Studium und den Campus. Sie bildet die
              Grundlage für das digitale Lernen und die Kom munikation unter den
              Studierenden und Dozentinnen und Dozenten des UMCH. Hier werden
              alle Kurse für die Stu dierenden verwaltet und sämtliche
              Lehrmaterialien hoch geladen. Diese sind – ebenso wie die
              Videoaufzeichnungen – jederzeit über Computer, Laptop oder
              Smartphone abruf bar. Über die digitale Lernplattform können sich
              die Studie renden außerdem für die Student Clubs oder ReachHigher
              Veranstaltungen registrieren sowie das Student Counseling durch
              das Dekanat in Anspruch nehmen.
            </p>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="work" style={{ width: "30rem" }}>
          <img
            src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg"
            className="img-fluid imgFit"
            height="320px"
            alt=""
          />

          <div className="text-block text-white bgGradient text p-5">
            <h4 className="text-center py-3 fw-bold">
              Digitale Lernplattform – kollaborativ lernen und effektiv
              kommunizieren{" "}
            </h4>
            <p className="text-start fw-bold text-wrap">
              Auf unserer digitalen Lernplattform erhalten die UMCH-Stu
              dierenden an einem Ort gebündelt alle Informationen und
              Neuigkeiten rund um das Studium und den Campus. Sie bildet die
              Grundlage für das digitale Lernen und die Kom munikation unter den
              Studierenden und Dozentinnen und Dozenten des UMCH. Hier werden
              alle Kurse für die Stu dierenden verwaltet und sämtliche
              Lehrmaterialien hoch geladen. Diese sind – ebenso wie die
              Videoaufzeichnungen – jederzeit über Computer, Laptop oder
              Smartphone abruf bar. Über die digitale Lernplattform können sich
              die Studie renden außerdem für die Student Clubs oder ReachHigher
              Veranstaltungen registrieren sowie das Student Counseling durch
              das Dekanat in Anspruch nehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCarouselComponent;

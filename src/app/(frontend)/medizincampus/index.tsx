'use strict';

import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCarouselComponent from "@/components/carousel/Index";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './index.css';

function Index() {
    return (
        <div className='campus-container'>
            <div className="campus-banner">
                <div className="campus-title">
                    <h1></h1>
                </div>
                <div className="campus-banner-bg">
                    <img
                        src="/background/umch.jpg"
                        alt="umch.jpg"
                    />
                </div>
            </div>

            <div className='campus-introduction'>
                <div className="intro-container py-5 px-5-pro">
                    <nav className="py-5">
                        <ol className="breadcrumb position-relative">
                            <li className="px-2"><FontAwesomeIcon icon={faHome} width={18} height={15} /></li>
                            <li className="breadcrumb-item"><a href="#" className="link-underline link-underline-opacity-0 text-black fw-bold">universität</a></li>
                            <li className="breadcrumb-item fw-bold active" aria-current="page">Campus Hamburg</li>
                        </ol>
                    </nav>

                    <div className="text-center fw-bold ">
                        <p className="text-secondary">Technologie trifft Medizin</p>
                        <h2 className="fw-bold"> Modernste Ausstattung und hochdigitaler
                            Universitätscampus in Hamburg</h2>
                    </div>

                    <div className="my-5">
                        <img src="/background/certificate.jpg" className="w-100" alt="certificate" />
                    </div>


                </div >

                <div className='campus-future-container px-5-pro'>
                    <div className="text-center fw-bold ">
                        <p className="text-secondary"> Digitales Studium am Puls der Zeit</p>
                        <h2 className="fw-bold"> Medizincampus der Zukunft</h2>
                    </div>

                    <div className="card border-0">
                        <div className="row g-0">
                            <div className="col-md-6 text-start bgGradient p-5 h-100 text-white">

                                <img src="/icon/Icon%20Hightec.svg" className="img-fluid mx-auto d-block" width="60px" alt="" />

                                <h2 className="fw-bold my-4">
                                    Entdecke eine hochmoderne
                                    medizinische Ausbildung
                                    in einem internationalen
                                    Umfeld.
                                </h2>

                                <p> Mit dem digitalen Campus geht der UMCH neue Wege in der
                                    Ausbildung der Ärztinnen und Ärzte von morgen. Die Bereitstel
                                    lung einer hochmodernen digitalen Infrastruktur wurde bereits
                                    frühzeitig im Rahmen der Campuserrichtung im Jahr 2019 be
                                    gonnen umzusetzen. Der UMCH verfügt über eine umfassende
                                    digitale Ausstattung, die stetig nachgerüstet wird und virtuell
                                    basierte Lehr- und Lernprozesse ermöglicht. Damit bieten wir
                                    unseren Studierenden herausragende Studienbedingungen. </p>
                            </div>
                            <div className="col-md-6">
                                <img src="/links/klinikum-luedenscheid-gebaeude-website.jpg" className="img-fluid h-100" width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div >

                <div className='campus-practise-slider position-relative py-5 my-5 px-5-pro'>
                    <ReactCarouselComponent />
                </div >

                <div className='campus-practise-slider2 py-5 px-5-pro'>
                    <div className="text-center fw-bold ">
                        <p className="text-secondary"> Praxis trifft Theorie </p>
                        <h2 className="fw-bold"> Laborexperimente für herausragende Ausbildung
                        </h2>
                    </div>

                    <div className="container py-5 position-relative">

                        <div className="positionAbsolute">
                            <div className="featured-carousel owl-carousel owl-theme">
                                <div className="item">
                                    <div className="work" style={{ width: "35rem" }}>
                                        <img src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg" className="img-fluid imgFit" height="320px" alt="" />

                                        <div className="text-block text-white bgGradient text p-5">
                                            <h4 className="text-center py-3 fw-bold"> Livestreaming – Kursinhalte
                                                nachhaltig verfügbar </h4>
                                            <p className="text-start fw-bold text-wrap">
                                                Der Campus ist mit Technik zum Livestreaming ausgestat
                                                tet. Sämtliche Vorlesungs- und Seminarräume sind mit
                                                mehreren High Definition-Kameras bestückt, mit denen die
                                                Lehrveranstaltungen aus verschiedenen Perspektiven live
                                                übertragen und aufgezeichnet werden. Gleichzeitig kön
                                                nen die Studierende, die online am Unterricht teilnehmen,
                                                zudem die Präsentationen einsehen und den schriftlichen
                                                Anmerkungen folgen, die per interaktivem Smartboard von
                                                den Dozentinnen und Dozenten vorgenommen werden.
                                                Nach Ende der Lehrveranstaltungen werden die Aufzeich
                                                nungen auf der digitalen Lernplattform des UMCH zur Ver
                                                fügung gestellt. Diese können von den Studierenden an
                                                schließend zeit- und ortsunabhängig für die Nachbereitung
                                                der Unterrichtsinhalte genutzt werden. Die Unterrichtsin
                                                halte werden darüber hinaus indexiert und können somit
                                                bequem nach Stichwörtern durchsucht werden.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="work" style={{ width: "35rem" }}>
                                        <img src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg" className="img-fluid imgFit" height="320px" alt="" />

                                        <div className="text-block text-white bgGradient text p-5">
                                            <h4 className="text-center py-3 fw-bold">Digitale Lernplattform –
                                                kollaborativ lernen und effektiv
                                                kommunizieren </h4>
                                            <p className="text-start fw-bold text-wrap">
                                                Der Campus ist mit Technik zum Livestreaming ausgestat
                                                tet. Sämtliche Vorlesungs- und Seminarräume sind mit
                                                mehreren High Definition-Kameras bestückt, mit denen die
                                                Lehrveranstaltungen aus verschiedenen Perspektiven live
                                                übertragen und aufgezeichnet werden. Gleichzeitig kön
                                                nen die Studierende, die online am Unterricht teilnehmen,
                                                zudem die Präsentationen einsehen und den schriftlichen
                                                Anmerkungen folgen, die per interaktivem Smartboard von
                                                den Dozentinnen und Dozenten vorgenommen werden.
                                                Nach Ende der Lehrveranstaltungen werden die Aufzeich
                                                nungen auf der digitalen Lernplattform des UMCH zur Ver
                                                fügung gestellt. Diese können von den Studierenden an
                                                schließend zeit- und ortsunabhängig für die Nachbereitung
                                                der Unterrichtsinhalte genutzt werden. Die Unterrichtsin
                                                halte werden darüber hinaus indexiert und können somit
                                                bequem nach Stichwörtern durchsucht werden.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="work" style={{ width: "35rem" }}>
                                        <img src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg" className="img-fluid imgFit" height="320px" alt="" />

                                        <div className="text-block text-white bgGradient text p-5">
                                            <h4 className="text-center py-3 fw-bold">Digitale Lernplattform –
                                                kollaborativ lernen und effektiv
                                                kommunizieren  </h4>
                                            <p className="text-start fw-bold text-wrap">
                                                Der Campus ist mit Technik zum Livestreaming ausgestat
                                                tet. Sämtliche Vorlesungs- und Seminarräume sind mit
                                                mehreren High Definition-Kameras bestückt, mit denen die
                                                Lehrveranstaltungen aus verschiedenen Perspektiven live
                                                übertragen und aufgezeichnet werden. Gleichzeitig kön
                                                nen die Studierende, die online am Unterricht teilnehmen,
                                                zudem die Präsentationen einsehen und den schriftlichen
                                                Anmerkungen folgen, die per interaktivem Smartboard von
                                                den Dozentinnen und Dozenten vorgenommen werden.
                                                Nach Ende der Lehrveranstaltungen werden die Aufzeich
                                                nungen auf der digitalen Lernplattform des UMCH zur Ver
                                                fügung gestellt. Diese können von den Studierenden an
                                                schließend zeit- und ortsunabhängig für die Nachbereitung
                                                der Unterrichtsinhalte genutzt werden. Die Unterrichtsin
                                                halte werden darüber hinaus indexiert und können somit
                                                bequem nach Stichwörtern durchsucht werden.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default Index

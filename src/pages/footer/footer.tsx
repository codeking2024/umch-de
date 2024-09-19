import React from "react";
import styles from "./footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer: React.FC = () => {
    return (
        <footer>

            <Container className="py-5">
                <Row className="justify-content-between">
                    <Col md={7}>
                        <p className={`fw-bold h5 pt-2`}>
                            Vereinbaren Sie kostenlos und unverbindlich einen
                            Online-Beratungstermin inklusive virtueller Campustour.
                        </p>
                    </Col>
                    <Col md={4}>
                        <a href="#" className={`${styles.btnYellow} btn btn-lg px-5 py-3 rounded-start-pill rounded-end-pill fw-medium`}>
                            <img src="icon/Icon Camera.svg" className={`${styles.iconBlack} pe-3`} width={48} height={48} alt="camera.svg" />

                            Online Beratungstermin
                        </a>
                    </Col>
                </Row>
            </Container>


            <div className={`${styles.bgDark} py-5`}>
                <Container>
                    <Row className="justify-content-between text-white">
                        <Col md={3} className="h-100">
                            <img src="/logos/umch_blanco-opt.png" className="w-100 mb-4" />

                            <p>
                                Universitätsmedizin Neumarkt
                                am Mieresch Campus Hamburg
                            </p>
                        </Col>
                        <Col md={3} className="h-100">
                            <ul className={`list-unstyled`}>
                                <li className={`text-white`}>Albert-Einstein-Ring 11-15</li>
                                <li className={`text-white`}>22761 Hamburg, Deutschland</li>
                                <li className={`text-white`}>Tel.: +49 (0) 40-2093485-00</li>
                                <li className={`text-white`}>Fax.: +49 (0) 40-2093485-09</li>
                                <li className={`text-white`}>E-Mail: info@edu.umch.de</li>
                            </ul>
                        </Col>
                        <Col md={2} className="h-100">
                            <img src="/logos/UMCH rund.svg" className="rounded mx-auto d-block mb-2" width={92} height={92} alt="" />
                            <p className="text-center fw-medium">
                                <a href="#" className="text-white d-block  link-underline link-underline-opacity-0">Impressum</a>
                                <a href="#" className="text-white d-block  link-underline link-underline-opacity-0">Datenschutz</a>
                            </p>
                        </Col>
                        <Col md={2} className="h-100">

                            <img src="/logos/Medaille.png" className="d-block mb-2" width={92} height={92} alt="" />
                            <p className="text-start fw-medium">
                                George Emil Palade <br />
                                Nobelpreisgewinner <br />
                                und Namensgeber <br />
                                der Universität
                            </p>
                        </Col>
                    </Row>

                    <div className="text-white">
                        <Row>
                            <Col md={2}>
                                Eine Niederlassung der
                            </Col>
                            <Col md={7}>
                                <hr className={`opacity-100`} />
                            </Col>
                        </Row>
                    </div>

                    <Row className="justify-content-between text-white mt-3">
                        <Col md={3}>
                            <img src="/logos/umfst-logo-neu_whiteENG-01-1-768x231.png" className="w-100 mb-4" />

                            <p>
                                Universität für Medizin, Pharmazie,
                                Naturwissenschaften und Technik
                                Neumarkt am Mieresch
                            </p>
                        </Col>
                        <Col md={3}>
                            <ul className={`list-unstyled mt-5`}>
                                <li className={`text-white`}>Gheorghe Marinescu, 38</li>
                                <li className={`text-white`}>540139 Neumarkt am Mieresch, Rumänien</li>
                                <li className={`text-white`}>Tel.: +40 (0) 265-215-551</li>
                                <li className={`text-white`}>Fax.: +40 (0) 265-210-407</li>
                                <li className={`text-white`}>E-Mail: administrativ@umftgm.ro</li>
                            </ul>

                        </Col>
                        <Col md={2}>

                            <ul className="list-group list-unstyled list-group-horizontal text-center" style={{ marginTop: 140 }}>
                                <li>
                                    <a href="#" className="list-group-item bg-transparent border-0 text-white px-3">
                                        <FontAwesomeIcon icon={["fab", "instagram"]} width={32} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="list-group-item bg-transparent border-0 text-white px-3">
                                        <FontAwesomeIcon icon={["fab", "tiktok"]} width={32} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="list-group-item bg-transparent border-0 text-white px-3">
                                        <FontAwesomeIcon icon={["fab", "facebook"]} width={32} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="list-group-item bg-transparent border-0 text-white px-3">
                                        <FontAwesomeIcon icon={["fab", "youtube"]} width={38} />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <img src="/bilder/Samy_Hoddie_outline.png" className="mb-4" width={100} />
                        </Col>
                    </Row>

                    <hr className={`opacity-100 border-light`} />
                    <p className="text-end">
                        <a href="#" className="px-2 text-light link-underline link-underline-opacity-0">DE</a>
                        <a href="#" className="px-2 text-light link-underline link-underline-opacity-0">ENG</a>
                    </p>

                    <Row className=" fw-medium">
                        <p className="d-inline text-white text-start  w-50">
                            <small>@2024 – UMCH – Universitätsmedizin Neumarkt am Mieresch Campus Hamburg</small>
                        </p>

                        <p className="d-inline text-end w-50">
                            <a href="#" className="px-2 text-light link-underline link-underline-opacity-0"><small>UMCH Shop</small></a>
                            <a href="#" className="px-2 text-light link-underline link-underline-opacity-0"><small>UMCH Medical Foundation Track</small></a>
                            <a href="#" className="px-2 text-light link-underline link-underline-opacity-0"><small> Contact us</small></a>
                        </p>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;

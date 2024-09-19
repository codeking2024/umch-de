import React from "react";
import styles from "./sectionEight.module.css";
import { Container, Row, Col } from "react-bootstrap";



const SectionEight: React.FC = () => {
    return (
        <div className={`bg-white py-5`}>
            <Container className="my-5">
                <div className="fw-medium mb-5">
                    <p>
                        Besonderheiten auf einen Blick
                    </p>
                    <h2 className="fw-bold">Klinische Lehre, Forschung & ganzheitliche Ausbildung</h2>
                </div>

                <div className="card rounded-0 border-0 mx-2">
                    <Row>
                        <Col md={6} className={`${styles.bgGradient}`}>
                        <div className="card-body text-white p-5">
                                <h4 className="card-title fw-bold">Lehrkrankenhäuser &
                                    Lehrpraxen</h4>
                                <p className={`fw-medium`}>Unser Netzwerk an Lehrkrankenhäusern
                                    und Lehrpraxen</p>
                                <p className="card-text text-sm">Profitieren Sie von unserem weiten Netzwerk an
                                    Lehrkrankenhäusern, Lehrpraxen und medizinischen
                                    Einrichtungen in Deutschland und Europa.
                                    Unsere Studierenden erlangen umfassende Praxis-
                                    kompetenzen und absolvieren ihre klinisch-praktische
                                    Ausbildung in bundesweiten Krankenhäusern und
                                    anderen medizinischen Einrichtungen. Sie üben den
                                    Umgang mit Patientinnen und Patienten, lernen ihren
                                    künftigen Arbeitsalltag kennen und gewinnen so an
                                    Routine</p>
                                <div className={`text-center mt-5`}>
                                    <a className={`btn btn-sm btn-light rounded-start-pill rounded-end-pill px-4`}>Jetzt
                                        informieren</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="p-0">
                        <img src="/links/UMFST-UMCH-CS-23-Erste-Hilfe-276A0826.jpg"
                                    className={`${styles.imgObjectFit} img-fluid w-100 h-100`} alt="..."/>
                        </Col>
                    </Row>
              
                </div>

                <Row className="mt-5 justify-content-between">
                    <Col lg={4}>
                        <div className={`${styles.bgDark} card border-0 rounded-0 text-white h-100`}>
                            <img src="/links/assoc-prof-cosmin-popa-receives-certificate-from-the-beck-institute.jpg"
                                 className={`${styles.imgObjectFit} card-img-top rounded-0`} height={250} alt="..."/>
                            <div className="card-body p-5">
                                <h5 className="card-title fw-bold mb-3">Unsere Medical
                                    Foundation Tracks –
                                    Vorbereitungskurse für
                                    das Medizinstudium</h5>
                                <p className="card-text fw-medium">Vor Studienbeginn werden kostenpflich-
                                    tige Vorbereitungskurse, auf Englisch
                                    angeboten, die gezielt auf das Medizin-
                                    studium vorbereiten.</p>

                                <img src="/logos/Logo MFT.svg" className={`w-50`} alt=""/>

                            </div>

                            <div className="card-footer border-0 text-center pb-5">
                                <a className={`btn btn-sm btn-light rounded-start-pill rounded-end-pill px-4`}>Jetzt
                                    informieren</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} >
                        <div className={`${styles.bgDark} card border-0 rounded-0 text-white h-100`}>
                            <img src="/links/Junior-Researcher-Academy.jpg"
                                 className={`${styles.imgObjectFit} card-img-top rounded-0`} height={250} alt="..."/>
                            <div className="card-body p-5">
                                <h5 className="card-title fw-bold mb-3">Unsere Medical
                                    Foundation Tracks –
                                    Vorbereitungskurse für
                                    das Medizinstudium</h5>
                                <p className="card-text fw-medium">Vor Studienbeginn werden kostenpflich-
                                    tige Vorbereitungskurse, auf Englisch
                                    angeboten, die gezielt auf das Medizin-
                                    studium vorbereiten.</p>

                            </div>
                            <div className="card-footer border-0 text-center pb-5">
                                <a className={`btn btn-sm btn-light rounded-start-pill rounded-end-pill px-4`}>Jetzt
                                    informieren</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={`${styles.bgDark} card border-0 rounded-0 text-white h-100`}>
                            <img src="/links/klinikum-luedenscheid-gebaeude-website.jpg"
                                 className={`${styles.imgObjectFit} card-img-top rounded-0`} height={250} alt="..."/>
                            <div className="card-body p-5">
                                <h5 className="card-title fw-bold mb-3">Unsere Medical
                                    Foundation Tracks –
                                    Vorbereitungskurse für
                                    das Medizinstudium</h5>
                                <p className="card-text fw-medium">Vor Studienbeginn werden kostenpflich-
                                    tige Vorbereitungskurse, auf Englisch
                                    angeboten, die gezielt auf das Medizin-
                                    studium vorbereiten.</p>
                            </div>

                            <div className="card-footer border-0 text-center pb-5">
                                <a className={`btn btn-sm btn-light rounded-start-pill rounded-end-pill px-4`}>Jetzt
                                    informieren</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SectionEight;

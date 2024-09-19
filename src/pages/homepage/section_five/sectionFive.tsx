import React from "react";
import styles from "./sectionFive.module.css";
import { Container, Row, Col } from "react-bootstrap";

const SectionFive: React.FC = () => {
    return (
        <div className={`bg-light`}>
            <Container className="py-5">
                <div className="fw-medium mb-5">
                    <p>
                        Alle Neuigkeiten über den UMCH im Überblick
                    </p>
                    <h2 className="fw-bold">Aktuelles</h2>
                </div>
                <Row className="justify-content-between mb-5">
                    <Col md={4}>
                        <div className={`${styles.bgDark} card border-0 rounded-0 h-100`}>
                            <img src="links/news.jpg" className={`${styles.imgObjectFit} card-img-top rounded-0`} alt="..."/>

                            <div className={`card-body text-white p-4`}>
                               <span className={`${styles.btnYellow} rounded-end-pill rounded-start-pill px-4 fw-bold py-2 my-4`}> 12.01.2024 </span>
                                <h3 className={`my-4 fw-bold h4`}>Neues Lehrkrankenhaus Helios Klinikum Hildesheim</h3>

                                <p>Der UMFST-UMCH bekommt mit dem
                                    Helios Klinikum Hildesheim ein weiteres
                                    Lehrkrankenhaus und geht damit einen
                                    weiteren Weg bei der Gewinnung von
                                    qualifizierten Nachwuchskräften. Die
                                    Jung-Mediziner sollen Klinik und Stadt
                                    früh...</p>
                            </div>
                            <div className={` text-center mt-3  mb-5`}>
                                <a href="#" className={`btn btn-sm btn-light rounded-start-pill rounded-end-pill px-4 fw-bold`}> Jetzt informieren</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row className={`justify-content-around  h-100`}>
                            <Col md={6} className={`mb-5`}>
                                <div className="card  border-0 rounded-0  h-100">
                                    <img src="/links/16_9-website.jpg" height={250} className={`${styles.imgObjectFit} card-img-top rounded-0`} alt="..."/>
                                    <div className="card-body">
                                        <h5 className="fw-bold card-title">03.01.2024</h5>
                                        <p className=" fw-medium card-text">Some quick example text to build on the card
                                            title and
                                            make up
                                            the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className={`mb-5`}>
                                <div className="card  border-0 rounded-0  h-100">
                                    <img
                                        src="/links/umch-charity-club-uebergibt-spendenscheck-an-hamburger-krebsgesellschaft-ev.jpg"
                                        height={250} className={`${styles.imgObjectFit} card-img-top rounded-0`}
                                        alt="..."/>
                                    <div className="card-body">
                                        <h5 className="fw-bold card-title">03.01.2024</h5>
                                        <p className=" fw-medium card-text">Some quick example text to build on the card
                                            title and
                                            make up
                                            the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="card border-0 rounded-0  h-100">
                                    <img src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg"
                                         height={250} className={`${styles.imgObjectFit} card-img-top rounded-0`}
                                         alt="..."/>
                                    <div className="card-body">
                                        <h5 className="fw-bold card-title">03.01.2024</h5>
                                        <p className=" fw-medium card-text">Some quick example text to build on the card
                                            title and
                                            make up
                                            the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="card  border-0 rounded-0 h-100">
                                    <img
                                        src="/links/hon-prof-dr-med-dirk-jentschura-gibt-workshop-am-umch-in-hamburg.jpg"
                                        height={250} className={`${styles.imgObjectFit} card-img-top rounded-0`} alt="..."/>
                                    <div className="card-body">
                                        <h5 className="fw-bold card-title">03.01.2024</h5>
                                        <p className=" fw-medium card-text">Some quick example text to build on the card title and
                                            make up
                                            the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SectionFive;

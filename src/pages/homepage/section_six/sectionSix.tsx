import React from "react";
import styles from "./sectionSix.module.css";
import { Container, Row, Col } from "react-bootstrap";



const SectionSix: React.FC = () => {
    return (
        <div className={`${styles.bgWithImage}`}>
            <Container className={`py-5`}>
                <div className="fw-medium mb-5">
                    <h2 className="fw-bold h3">Campus. Forschung. Lehre.</h2>
                    <p>
                        Wichtige Termine und universitäre Veranstaltungen.
                    </p>
                </div>
                <Row className="justify-content-between mb-5">
                    <Col md={4}>
                        <div className={`${styles.bgDark} card border-0 rounded-0 h-100`}>
                            <div className={`card-header text-white border-0 bg-transparent p-4 pb-0`}>
                                <span className={`fw-medium`}>Unsere Veranstaltungen</span>
                                <h4 className={`fw-bold`}>Lernen Sie uns kennen</h4>
                            </div>
                            <div className={`card-body text-white px-4`}  style={{
                                boxShadow: "inset 0px -9px 26px -17px #000"
                            }}>
                                <ul className={`list-group`}>
                                    <li className={`${styles.ListItemCustom} list-group-item bg-transparent border-0 text-white text-sm mb-2`}>
                                        <small>
                                            <strong>17.02.2024</strong> <span
                                            className={`d-block`}>Open Campus Day</span>
                                            <span className={`d-block`}>UMCH</span>
                                        </small>28

                                        2860
                                    </li>

                                    <li className={`${styles.ListItemCustom} list-group-item bg-transparent border-0 text-white  text-sm mb-2`}>
                                        <small>
                                            <strong>26.02.2024</strong> <span
                                            className={`d-block`}>Info Event</span>
                                            <span className={`d-block`}>Online</span>
                                        </small>
                                    </li>

                                    <li className={`${styles.ListItemCustom} list-group-item bg-transparent border-0 text-white  text-sm mb-2`}>
                                        <small>
                                            <strong>29.02.2024</strong> <span
                                            className={`d-block`}>ReachHigher mit Dr. Afscharian</span>
                                            <span className={`d-block`}>UMCH</span>
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            <div className={`card-footer text-center py-5`}>
                            <a href="#" className={`btn btn-sm btn-outline-light rounded-start-pill rounded-end-pill px-4`}> Mehr +</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={`${styles.bgGray} card border-0 rounded-0  h-100`}>
                            <div className={`card-body fw-medium`}>
                                <Row className={`justify-content-center mt-4`}>
                                    <Col md={6}>
                                    <div className="mb-5">
                                        <span
                                        className={` ${styles.btnYellow} rounded-start-pill rounded-end-pill fw-bold px-3`}> Tip </span>
                                    </div>
                                        <span>26.01.2024</span>
                                        <h2 className={`h4 fw-bold`}>
                                            Workshop „Imaging of the
                                            Brain“ mit Assoc. Prof. Lorand
                                            Denes
                                        </h2>
                                        <p className={`py-4`}>
                                            Während dieses Workshops mit dem
                                            Titel „Bildgebung des Gehirns“, den
                                            Prof. Lorand Denes am Montag, den
                                            26. Januar 2024, für Studierende im...
                                        </p>
                                    </Col>
                                    <Col md={5}>
                                        <img src="/links/Workshop%20Dr.%20Meyer-Marcotty.png" className={`w-100 h-100 mx-auto d-block`}  alt=""/>
                                    </Col>
                                </Row>
                            </div>
                            <div className={`card-footer p-5 border-0  bg-transparent`}>
                                <a href="#" className={`btn btn-sm btn-light rounded-start-pill rounded-end-pill px-4 border fw-medium border-1 border-black text-black`}> Mehr erfahren
                                    +</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SectionSix;

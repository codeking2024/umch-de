import React from "react";
import styles from "./sectionThree.module.css";
import { Container, Row, Col } from "react-bootstrap";
import {PhoneCallIcon} from "lucide-react";

const SectionThree: React.FC = () => {
    return (
        <div className={`bg-light`}>
            <Container className="py-5">
                <div className="text-center fw-medium mb-5">
                    <p>
                        Alle Informationen zur Studienbewerbung
                    </p>
                    <h2 className="fw-bold">Das UMCH Bewerbungsverfahren</h2>
                </div>

                <Row className="justify-content-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={7}>
                                <div className="card text-white rounded-0 border-0 mb-5">
                                    <div className="row g-0">

                                        <div className="col-md-6">
                                            <div className="card-body bgGradient px-5 pt-5 pb-4 h-100">
                                                <h5 className="card-title fw-bold">
                                                    Sichern Sie sich ihren
                                                    Studienplatz für Ihr
                                                    Traumstudium zum
                                                    Wintersemester
                                                    24/25 oder 25/26
                                                    noch heute.
                                                </h5>

                                                <div className={`text-center mt-4`}>
                                                    <a href="#"
                                                       className={`btn btn-sm px-4 fw-medium btn-light rounded-end-pill rounded-start-pill`}> Jetzt
                                                        bewerben </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <img src="/links/UMFST-UMCH-Days-23-OL1A5038-2.jpg"
                                                 className={`${styles.imgObjectFit} img-fluid rounded-start rounded-0 h-100`}
                                                 alt="..."/>
                                        </div>
                                    </div>
                                </div>


                                <div className={`${styles.bgWithImage} card rounded-0 border-0 mt-5`}>
                                            <div className="card-body px-5 pt-5 pb-4 h-100">
                                                <h5 className="card-title fw-bold">
                                                    So einfach funktioniert das <br />
                                                    Bewerbungsverfahren am UMCH
                                                </h5>

                                                <ul className={`list-group list-group-numbered list-group-horizontal my-5`}>
                                                    <li className={`${styles.ListItemCustom} list-group-item border-0`}>
                                                        <img src="/icon/Icon%20registration.svg" width={64} alt=""/>
                                                        <small className={`d-block my-3`}>
                                                            Registrieren Sie
                                                            sich über unser Online-
                                                            Bewerbungsportal.
                                                        </small>
                                                    </li>
                                                    <li className={`${styles.ListItemCustom} list-group-item  border-0`}>
                                                        <img src="/icon/Icon%20Cloud.svg" width={64} alt=""/>
                                                        <small className={`d-block my-4 pt-1`}>
                                                            Laden Sie Ihre
                                                            Bewerbungsunterlagen
                                                            hoch.
                                                        </small>
                                                    </li>
                                                    <li className={`${styles.ListItemCustom} list-group-item  border-0`}>
                                                        <img src="/icon/Icon%20Interview.svg" width={64} alt=""/>
                                                        <small className={`d-block my-3`}>
                                                            Motivationsbasiertes
                                                            Interview und
                                                            Kurz-Evaluation
                                                        </small>
                                                    </li>
                                                </ul>

                                                <p className={`py-1`}>
                                                    Das Online-Bewerbungsportal steht Ihnen rund um die Uhr zur
                                                    Verfügung, um
                                                    den Beginn Ihres Studiums zu erleichtern. Wir möchten sicherstellen,
                                                    dass der
                                                    Prozess für Sie so unkompliziert und zugänglich wie möglich ist.
                                                    Sobald Sie dort alle
                                                    nötigen Bewerbungsunterlagen hochgeladen haben, erhalten Sie eine Einladung
                                                    zur Teilnahme an unserem Bewerbungsverfahren, das aus einer <strong>Kurz-Evaluation </strong>
                                                    sowie einem <strong>motivationsbasierten Interview</strong> besteht. Bis auf Weiteres können Sie
                                                    das Verfahren bequem und sicher <strong>per Videotelefonie von Zuhause</strong> aus durchlaufen.
                                                    Kontaktieren Sie uns bitte nach Hochladen Ihrer Unterlagen und Erhalt der
                                                    Einladung durch den
                                                </p>

                                                <p className={`py-2`}>
                                                    Weitere Hinweise zur Bewerbung und zum genauen Ablauf des
                                                    Zulassungsverfahrens finden Sie <a href="#" className={`link link-dark link-underline-opacity-0 fw-bold`}> <u>hier</u></a>.
                                                </p>

                                            </div>
                                </div>
                            </Col>
                            <Col md={"auto"}></Col>
                            <Col md={4}>
                                <div className="card text-white rounded-0 border-0  mb-5">
                                    <img src="/logos/TMS.png" className="card-img-top" alt="..."/>
                                    <div className={`${styles.bgDark} card-body px-5 py-4`}>
                                        <h6 className={`fw-bold mb-3`}>
                                            <Row>
                                                <Col md={10}>
                                                    Sofortzulassung am UMCH
                                                    durch TMS-Teilnahme
                                                </Col>
                                                <Col md={2}>
                                                    <img src="/icon/Icon%20ok.svg" alt=""/>
                                                </Col>
                                            </Row>
                                        </h6>
                                        <p className="card-text fw-medium">
                                            Sie haben bereits am TMS teilgenommen
                                            und dennoch keinen Studienplatz
                                            erhalten? Bei einem Ergebnis von
                                            mindestens 70 Punkten erhalten Sie
                                            eine Sofortzulassung für den UMCH.
                                        </p>

                                        <div className={`text-center mt-4`}>
                                            <a href="#"
                                               className={`btn btn-sm px-4 fw-medium btn-light rounded-end-pill rounded-start-pill`}> Anrechnen lassen</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card text-white rounded-0 border-0 ">
                                    <img src="/bilder/Uni%20change.svg" className="card-img-top" alt="..."/>
                                    <div className={`${styles.bgDark} card-body px-5 py-4`}>
                                        <h6 className={`fw-bold mb-3`}>
                                            <Row>
                                                <Col md={10}>
                                                    Universitätswechsel an
                                                    den UMCH
                                                </Col>
                                                <Col md={2}>
                                                    <img src="/icon/Icon%20ok.svg" alt=""/>
                                                </Col>
                                            </Row>
                                        </h6>
                                        <p className="card-text fw-medium">
                                            Haben Sie bereits ein Medizinstudium an
                                            einer anderen Universität begonnen?
                                            Am UMCH können Sie Ihr Studium ab
                                            dem 2. Studienjahr fortführen.
                                        </p>

                                        <div className={`text-center mt-4`}>
                                            <a href="#"
                                               className={`btn btn-sm px-4 fw-medium btn-light rounded-end-pill rounded-start-pill`}> Mehr
                                                +</a>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                            <Col md={11} className="mt-5 px-0">
                                <div className={`${styles.bgGradient}`}>
                                    <div className="card-body text-white py-5 px-0">
                                        <Row>
                                            <Col md={8} className={`ps-5`}>
                                                <h3 className={`text-white`}>
                                                    Nächste Bewerbungstermine
                                                </h3>
                                                <ul className={`list-group list-group-horizontal text-white my-3`}>
                                                    <li className={`list-group-item border-0 text-white bg-transparent`}>
                                                        <img src="/icon/Icon%20Calender.svg" width={24} alt=""/>
                                                        <h5 className={`fw-bold mt-2`}>25.01.2024</h5>
                                                        <small className={`d-block my-3`}>
                                                            Bewerbungsverfahren
                                                            jetzt online
                                                            durchlaufen
                                                        </small>
                                                    </li>
                                                    <li className={`list-group-item text-white  border-0 bg-transparent`}>
                                                        <img src="/icon/Icon%20Calender.svg" width={24} alt=""/>
                                                        <h5 className={`fw-bold mt-2`}>08.02.2024</h5>
                                                        <small className={`d-block my-3`}>
                                                            Bewerbungsverfahren
                                                            jetzt online
                                                            durchlaufen
                                                        </small>
                                                    </li>
                                                    <li className={`list-group-item text-white  list-group-item  border-0 bg-transparent`}>
                                                        <img src="/icon/Icon%20Calender.svg" width={24} alt=""/>
                                                        <h5 className={`fw-bold mt-2`}>
                                                            03.02.2024
                                                            <a className={`${styles.btnYellow} btn btn-sm rounded-start-pill rounded-end-pill mx-3 fw-bold px-3 py-0`}> Neu!</a>
                                                        </h5>
                                                        <small className={`d-block my-3`}>
                                                            Samstags Bewerbungstermin
                                                            Bewerbungsverfahren
                                                            jetzt online durchlaufen
                                                        </small>
                                                    </li>
                                                </ul>

                                                <div className={`text-center mt-4`}>
                                                    <a href="#"
                                                       className={`btn btn-sm px-3 fw-medium btn-light rounded-end-pill rounded-start-pill px-4`}> Online Bewerbungsportal</a>
                                                </div>
                                            </Col>

                                            <Col className={`border-start ps-4 py-4 pe-0`} md={3}>
                                                <h5 className={`card-title text-sm fw-bold`}>
                                                    <Row>
                                                        <Col md={10}>
                                                            Es ist kein passender <br/>
                                                            Termin für Sie dabei?
                                                        </Col>
                                                        <Col md={2}>
                                                            <img src="/icon/Icon%20attention.svg" alt=""/>
                                                        </Col>
                                                    </Row>
                                                </h5>

                                                <p className={`mt-5`}>
                                                    Kein Problem, wir sind flexiebel. Einfach
                                                    einen individuellen Termin vereinbaren.
                                                    Nehmen Sie dazu gerne Kontakt mit uns
                                                    auf.
                                                </p>

                                                <div className={`text-center mt-4`}>
                                                    <a href="#"
                                                       className={`btn btn-sm px-3 fw-medium btn-light rounded-end-pill rounded-start-pill`}> Individuellen
                                                        Termin vereinbaren</a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>

                            <Col md={11} className="mt-5 px-0">
                                <div className={`${styles.bgForCard} card border-0`}>
                                    <div className="card-body py-5 px-0">
                                        <Row>
                                            <Col md={8} className={`ps-5`}>
                                                <h3 className={`fw-bold pb-4`}>
                                                    Haben Sie Fragen zum Ablauf des
                                                    Bewerbungsverfahrens?
                                                </h3>
                                                <p>
                                                    Treffen Sie unser Beratungsteam online oder persönlich auf dem Campus und erfahren Sie
                                                    alles über Ihre Studienoptionen. Nutzen Sie diesen entspannten Rahmen, um sich kostenlos
                                                    und unverbindlich zu informieren. Wir sind für Sie da und freuen uns auf das Gespräch!
                                                </p>
                                            </Col>

                                            <Col md={3}>
                                                <ul className={`list-group list-group-horizontal my-3`}>
                                                    <li className={`${styles.bgDark} ${styles.txtYellow} rounded-circle mx-3 p-4 list-group-item border-0 bg-transparent`}>
                                                        <PhoneCallIcon width={24} height={24} />
                                                    </li>
                                                    <li className={`${styles.bgDark} rounded-circle mx-3 p-4 list-group-item border-0 bg-transparent`}>
                                                        <img src="/icon/Icon%20Camera.svg" width={24} alt=""/>
                                                    </li>
                                                    <li className={`${styles.bgDark} rounded-circle mx-3 p-4 list-group-item border-0 bg-transparent`}>
                                                        <img src="/icon/Icon%20Uni.svg" width={24} alt=""/>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default SectionThree;

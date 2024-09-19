import React from "react";
import styles from "./sectionTwo.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parse from 'html-react-parser';

interface FeatureItemProps {
    img: string;
    text: string;
}

const features: FeatureItemProps[] = [
    {
        img: "/icon/Icon%20Calender.svg",
        text: "6-jähriger Studiengang Medizin in englischer Sprache mit internationalem Campus-Flair",
    },
    {
        img: "/icon/Icon%20Group.svg",
        text: "Praxisorientiertes Studienmodell mit Unterricht in kleinen Gruppen",
    },
    {
        img: "/icon/Icon%20World.svg",
        text: "Lokal studieren. Global agieren. Sei Teil einer großen Community aus über 40 Nationen",
    },
    {
        img: "/icon/Icon%20Hospital.svg",
        text: "Klinisch-praktische Ausbildung in deutschen und internationalen <u> Lehrkrankenhäusern </u>",
    },
    {
        img: "/icon/Icon%20Hightec.svg",
        text: "Hochmoderner und hochdigitaler Universitätscampus in Hamburg",
    },
    {
        img: "/icon/Icon%20Certificat.svg",
        text: "In der EU, dem Vereinigten Königreich, den USA und vielen weiteren Ländern anerkannt",
    },
    {
        img: "/icon/Icon%20Award.svg",
        text: "Qualifizierung nach Abschluss für USMLE, UK GMC usw.",
    },
    {
        img: "/icon/Icon%20stethoskop.svg",
        text: "Promotion zum PhD am UMCH möglich",
    },
    {
        img: "/icon/Icon%20interdisciplinary.svg",
        text: "Forschungsstark, interdisziplinär, praxisnah",
    },
];

const FeatureItem: React.FC<FeatureItemProps> = ({ img, text }) => (
    <li className="list-group-item text-white pb-3">
        <Row className="align-items-center">
            <Col md={1}>
                <img src={img} width={32} height={"auto"} alt="" />
            </Col>
            <Col md={10}>{parse(text)}</Col>
        </Row>
    </li>
);

interface CardProps {
    imgSrc: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, subtitle, children }) => (
    <div className={`${styles.bgGradient} card border-0 rounded-0 text-white h-100`}>
        <img src={imgSrc} className={`${styles.imgObjectFit} card-img-top rounded-0`} width={"auto"} height={400} alt={title} />
        <div className="card-body">
            <h2 className="card-title fw-bold pt-5 ps-5 pe-0">{title}</h2>
            {subtitle && <h5 className="card-subtitle fw-bold pt-3 ps-5">{subtitle}</h5>}
            <div className="card-text fw-medium p-5">{children}</div>
        </div>
    </div>
);

const NewsCard: React.FC = () => (
    <div className={`${styles.bgDark} card border-0 rounded-0 text-white mb-5`}>
        <img src="/links/news.jpg" className={`${styles.imgFit} card-img-top rounded-0 img-fluid h-25`} alt="News" />
        <div className="card-body text-white px-5">
            <div className="my-4">
                <Row>
                    <Col md={6}>
                        <a href="#" className={`${styles.btnYellow} btn btn-sm btn-warning rounded-pill px-3 fw-bold`}>News</a>
                    </Col>
                    <Col md={6} className="text-end py-1"><strong>12.01.2024</strong></Col>
                </Row>
            </div>
            <h5 className="card-title fw-bold mb-4">Neues Lehrkrankenhaus – Helios Klinikum Hildesheim</h5>
            <p className="card-text text-justify fw-medium">
                Der UMFST-UMCH bekommt mit dem Helios Klinikum Hildesheim ein weiteres Lehrkrankenhaus und geht damit einen weiteren Weg bei der Gewinnung von qualifizierten Nachwuchskräften.
            </p>
            <div className="text-center py-4">
                <a href="#" className="btn btn-light btn-sm rounded-pill fw-medium px-3">Zu unseren News</a>
            </div>
            <hr className="border-1 pt-2 border-white opacity-100" />
            <div>
                <h6 className="text-center pb-2">Don’t be a stranger. Let’s be friends.</h6>
                <ul className="list-group list-group-horizontal ms-4">
                    <li className="list-group-item bg-transparent border-0 text-white px-3">
                        <a href="#"  className="link-underline link-underline-opacity-0 text-white">
                            <FontAwesomeIcon icon={["fab", "instagram"]} width={32} />
                        </a>
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-white px-3">
                        <a href="#"  className="link-underline link-underline-opacity-0 text-white">
                            <FontAwesomeIcon icon={["fab", "tiktok"]} width={32} />
                        </a>
                    </li>
                    <li  className="list-group-item bg-transparent border-0 text-white px-3">
                        <a href="#" className="link-underline link-underline-opacity-0 text-white">
                            <FontAwesomeIcon icon={["fab", "facebook"]} width={32} />
                        </a>
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-white px-3">
                        <a href="#" className="link-underline link-underline-opacity-0 text-white" >
                            <FontAwesomeIcon icon={["fab", "youtube"]} width={38} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

const PreparationCourseCard: React.FC = () => (
    <div className={`${styles.bgDark} card border-0 rounded-0 text-white`}>
        <div className="card-body px-5">
            <img src="/logos/Logo%20MFT.svg" className="mt-3 mb-4" height={64} alt="Logo MFT" />
            <h5 className="card-title fw-bold mb-4">
                Ihr medizinischer Vorbereitungskurs in nur 3 Wochen oder 3 Monaten.
            </h5>
            <p className="card-text">
                Ihr erfolgreicher Start ins Medizinstudium beginnt hier. Mit unseren Vorbereitungskursen erwerben Sie das grundlegende Wissen, um ein Medizinstudium an der UMCH zu beginnen.
            </p>
            <div className="text-center py-3">
                <a href="#" className="btn btn-light btn-sm rounded-pill fw-medium px-3">Jetzt informieren</a>
            </div>
        </div>
    </div>
);

const OpenCampusCard: React.FC = () => (
    <div className={`${styles.bgGradient} card mb-3 border-0 rounded-0 text-white`}>
        <div className="row g-0">
            <div className="col-md-3">
                <img src="/links/2023-07-13-Pre-Medical-Course-Welcome-Day-UMCH-7157.jpg" className={`${styles.imgObjectFit} img-fluid rounded-0 h-100`} alt="Open Campus Days" />
            </div>
            <div className="col-md-9">
                <div className="card-body px-5 pt-5">
                    <Row>
                        <Col md={6}>
                            <p className="card-subtitle">Besuchen Sie uns auf dem Campus</p>
                            <h5 className="card-title">Open Campus Days</h5>
                            <p className="card-text py-2">
                                Lernen Sie uns kennen und besuchen Sie uns auf dem UMCH Campus für Medizin in Hamburg. Nehmen Sie an unserem nächsten Tag der offenen Tür teil, erleben Sie die Campusatmosphäre hautnah und treten Sie in Dialog mit unseren aktuellen Studierenden!
                            </p>
                            <div className="text-center">
                                <a href="#" className="btn btn-light btn-sm rounded-pill fw-medium px-3 my-4">Jetzt informieren</a>
                            </div>
                        </Col>
                        <Col md={6} className="border-start">
                            <img src="/bilder/Samy.png" className="figure-img mx-auto d-block" width={186} height={"auto"} alt="Samy" />
                            <ul className="list-unstyled">
                                <li>
                                    <Row className="justify-content-center">
                                        <Col md="auto">
                                            <img src="/icon/Icon%20Calender.svg" width={32} height={32} alt="Calendar Icon" />
                                        </Col>
                                        <Col md="auto">
                                            Next Open Campus Day <br />
                                            <strong>17.02.2024</strong>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                            <div className="text-center">
                                <a href="#" className="btn btn-light btn-sm rounded-pill fw-medium px-3 my-3">Jetzt informieren</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
);

const SectionTwo: React.FC = () => {
    return (
        <div className={`${styles.mainBg} h-100`}>
            <Container className="py-5">
                <div className="text-center fw-medium mb-5">
                    <p>
                        Ohne Numerus clausus. Ohne Wartezeit. <strong><u>Jetzt bewerben</u></strong>
                    </p>
                    <h2 className="fw-bold">Erster englischsprachiger Studiengang in Medizin in Hamburg</h2>
                </div>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Card imgSrc="/links/OL1A4152.jpg" title="Deutschlands erster internationaler Medizinstudiengang in Hamburg" subtitle="Exclusiv. Persönlich. Individuell.">
                            <ul className="pe-3 ps-0">
                                {features.map((feature, index) => (
                                    <FeatureItem key={index} {...feature} />
                                ))}
                            </ul>
                        </Card>
                    </Col>
                    <Col md={"auto"}></Col>
                    <Col md={4}>
                        <NewsCard />
                        <PreparationCourseCard />
                    </Col>
                    <Col md={11} className="mt-5 px-0">
                        <OpenCampusCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SectionTwo;

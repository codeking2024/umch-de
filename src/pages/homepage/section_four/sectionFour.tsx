import React from "react";
import styles from "./sectionFour.module.css";
import { Container, Row } from "react-bootstrap";
import CarouselComponent from "@/pages/homepage/section_four/carousel.component";

const SectionFour: React.FC = () => {
    return (
        <div className={`${styles.bgWithImage} py-5`}>
            <Container className="position-relative">
                <Row className={`justify-content-between`}>
                    <div className="col-md-4 ">
                        <h6 className={`pe-5`}>Studenten teilen ihre Erfahrungen und geben exklusive Einblicke</h6>
                        <h3 className={`fw-bold`}>Der UMCH inside</h3>
                        <p className={`text-sm pe-5`} style={{ fontSize: 14 }}>
                            Studierende berichten über den modernen Medizinampus und teilen ihre Erfahrungen mit der
                            erstklassigen Ausstattung, der praxisnahen Ausbildung, den vielfältigen Freizeitmöglichkeiten und der
                            attraktiven Lage des Campus.
                            Sehen Sie sich die Clips an und erhalten Sie exklusive Einblicke sowie nützliche
                            Ratschläge. Erfahren Sie direkt von unseren
                            Studierenden, warum der UMCH der perfekte Ort zum Studieren und Leben ist. Verschaffen
                            Sie sich ein umfassendes Bild vom Campusleben
                            und sammeln Sie wertvolle Tipps.
                        </p>
                    </div>
                    <div className={`${styles.positionAbsolute} ${styles.rightExtended} col-md-8`}>
                        <CarouselComponent />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default SectionFour;

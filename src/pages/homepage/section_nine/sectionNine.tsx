import React from "react";
import styles from "./sectionNine.module.css";
import { Container } from "react-bootstrap";



const SectionNine: React.FC = () => {
    return ( 
        <div className={`${styles.bgGradient} text-white`}>
            <Container className="py-5">
                <div className="fw-medium mb-5">
                    <p>
                        Die Antworten auf die häufigsten Fragen haben wir hier für Sie zusammengestellt.
                    </p>
                    <h2 className="fw-bold">Sie haben Fragen zum Medizinstudium am UMFST-UMCH?</h2>
                </div>
               
                    <div className={`${styles.bgDark} accordion accordion-flush px-5 pt-4`} id="accordionFlushExample">
                        <div className="accordion-item bg-transparent text-white mb-4">
                            <h2 className="accordion-header">
                            <button className={`accordion-button ${styles.accordionButton} collapsed fw-bold bg-transparent text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                Wann beginnt das Wintersemester am UMFST-UMCH?
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body  fw-medium me-5 pb-5">Das genaue Datum, an dem das Wintersemester beginnt, wird jedes Jahr neu festgelegt. Es
                                handelt sich allerdings stets um ein Datum im Zeitraum zwischen Ende September und Mitte
                                Oktober. Das entsprechende Datum für das jeweilige Wintersemester wird stets rechtzeitig –
                                sobald es feststeht – bekannt gegeben und online veröffentlicht.</div>
                            </div>
                        </div>
                        <div className="accordion-item  bg-transparent text-white mb-4">
                            <h2 className="accordion-header">
                            <button className={`accordion-button ${styles.accordionButton} collapsed fw-bold bg-transparent text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Beende ich mein Studium am UMFST-UMCH mit dem Staatsexamen?
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fw-medium pe-5 pb-5">Sie beenden Ihr Studium am UMFST-UMCH mit einem universitätsinternen Abschlussexamen
                                statt dem Staatsexamen. Das hat den Vorteil, dass Sie von Dozentinnen und Dozenten auf eine
                                Prüfung vorbereitet werden, die von ihnen selbst konzipiert worden ist. Somit werden Sie im
                                Hinblick auf das Abschlussexamen optimal und maßgeschneidert unterrichtet.</div>
                            </div>
                        </div>
                        <div className="accordion-item  bg-transparent text-white">
                            <h2 className="accordion-header  bg-transparent text-white">
                        <button className={`accordion-button ${styles.accordionButton} collapsed fw-bold bg-transparent text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Kann ich das Zulassungsverfahren auch online absolvieren?
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body  fw-medium pe-5 pb-5">Sie können jederzeit und unkompliziert am Zulassungsverfahren
                                teilnehmen. Eine Anreise zu einem unserer Zulassungstermine in Hamburg ist nicht zwingend
                                notwendig. Es besteht die Möglichkeit, online – über Video Call – an der Kurzevaluation und dem
                                motivationsbasierten Interview teilzunehmen.</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center my-5">
                            <a href="" className="btn btn-sm btn-outline-light rounded-end-pill rounded-start-pill px-4">Mehr FAQ‘s +</a>
                    </div>
            </Container>
        </div>
    );
};

export default SectionNine;

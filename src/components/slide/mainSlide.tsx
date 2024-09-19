"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import styles from "./mainSlide.module.css";
import { eventType } from "@/utils/interface";
import { getEventData } from "@/utils/fetchData";
import { dateConvertor } from "@/utils/dateConvertor";
import EventItem from './EventItem';
import CarouselItem from './CarouselItem';

const MainSlide: React.FC = () => {
    const [eventValues, setEventValues] = useState<eventType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const eventData = await getEventData("title, slug, typeEvent, onSiteDate, onlineDate", "[0..3]");
                setEventValues(eventData);
            } catch (err) {
                setError('Failed to fetch event data.');
            } finally {
                setLoading(false);
            }
        };

        fetchEventData();
    }, []);

    const renderEvents = () => {
        const maxEvents = 4;
        let counter = 0;

        return eventValues.map((item, index) => {
            if (counter >= maxEvents) return null;

            const hasOnSiteDate = item.onSiteDate && dateConvertor(item.onSiteDate.startDate);
            const hasOnlineDate = item.onlineDate && dateConvertor(item.onlineDate.startDate);

            if (hasOnSiteDate || hasOnlineDate) {
                counter++;
                return (
                    <EventItem key={index} item={item} isOnline={!!(!hasOnSiteDate && hasOnlineDate)} />
                );
            }

            return null;
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Row className={`${styles.positionRelative} w-100 p-0 m-0`}>
                <Col lg={7} md={6} sm={12} className={`${styles.slideContainer} p-0 m-0`}>
                    <div id="carouselExampleCaptions" className="carousel carousel-light slide" data-bs-ride="carousel">
                        <div className={` carousel-indicators rounded-start-pill  rounded-start-pill`}>
                            <span className={`${styles.bgDark} p-1 px-4 rounded-start-pill  rounded-end-pill`}>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className={`${styles.dotSlide} rounded-circle active`} aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    className={`${styles.dotSlide} rounded-circle`} aria-current="false" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    className={`${styles.dotSlide} rounded-circle`} aria-current="false" aria-label="Slide 3"></button>
                            </span>
                        </div>
                        <div className="carousel-inner">
                            <CarouselItem
                                src="/links/2023-05-05-UMFST-UMCH-Days-2023-5201-3.jpg"
                                alt="UMCH Event"
                                caption={
                                    <>
                                        <img src="https:placehold.co/150x150" className="rounded-circle mb-4" alt="Placeholder" />
                                        <h1 className="display-4 fw-bold text-wrap mb-3">Willkommen <br /> am UMCH</h1>
                                        <p className="mb-5 fw-medium">Studieren Sie Humanmedizin auf <br /> Englisch in Hamburg</p>
                                        <button className={`${styles.btnYellow} btn btn-lg btn-warning rounded-start-5 rounded-end-5 px-5`}>Jetzt bewerben</button>
                                    </>
                                }
                                enable="active"
                            />


                            <CarouselItem
                                src="/links/2022-12-14-Workshop-RPG-Anatomy-UMFST-UMCH-2585.jpg"
                                alt="UMCH Event"
                                caption={
                                    <>
                                        <h1 className="display-4 fw-bold text-wrap mb-5">Unser
                                            Netzwerk an <br />
                                            Lehrkrankenhäusern</h1>
                                        <p className="mb-5 fw-medium">Profitieren Sie von unserem Netzwerk <br />
                                            an Lehrkrankenhäusern, Lehrpraxen <br />
                                            und medizinischen Einrichtungen in <br />
                                            Deutschland und Europa. </p>
                                        <button className={`${styles.btnYellow} btn btn-lg btn-warning rounded-start-5 rounded-end-5 px-5`}>Jetzt bewerben</button>
                                    </>
                                }
                                enable=""
                            />


                            <CarouselItem
                                src="/links/hon-prof-dr-med-dirk-jentschura-gibt-workshop-am-umch-in-hamburg.jpg"
                                alt="UMCH Event"
                                caption={
                                    <>
                                        <h1 className="display-4 fw-bold text-wrap mb-5">Universitäre <br />
                                            Forschung</h1>
                                        <p className="mb-5 fw-medium">Enge Verzahnung von Forschung und <br />
                                            Lehre – Gemeinsam die Zukunft der <br />
                                            Medizin gestalten. </p>
                                        <button className={`${styles.btnYellow} btn btn-lg btn-warning rounded-start-5 rounded-end-5 px-5`}>Jetzt bewerben</button>
                                    </>
                                }
                                enable=""
                            />
                        </div>
                    </div >
                </Col>

                <Col lg={7} md={6} sm={12} className={styles.imageContainer}>
                    <img className={styles.coverImage} src="./bilder/b-header.svg" alt="Header" />
                    <div className={`${styles.centeredList} text-white`}>
                        <h3 className="text-center">Jetzt für Studienbeginn</h3>
                        <h4 className="text-center">2024/25 bewerben</h4>
                        <ul className={`${styles.centeredList} list-group list-group-horizontal`}>
                            {renderEvents()}
                        </ul>
                        <div className="text-center">
                            <p className="fw-bold  mb-5" style={{ marginTop: '80%' }}>Erfahren Sie mehr – online oder live vor Ort</p>
                            <a className="btn btn-sm btn-light rounded-start-5 rounded-end-5 px-5 fw-medium py-2"><small>Jetzt anmelden</small></a>
                            <p className="text-sm fw-medium  mt-1"><small>Kostenlos und unverbindlich</small></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default MainSlide;

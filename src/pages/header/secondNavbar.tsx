import React, { CSSProperties } from 'react';
import styles from './secondNavbar.module.css';
import { Container } from "react-bootstrap";
import Image from 'next/image';
import { PhoneCall, Video, Search } from "lucide-react";

interface SecondNavbarProps {
    style?: CSSProperties;
}

const SecondNavbar: React.FC<SecondNavbarProps> = ({ style }) => {
    return (
        <>
            <header className={`${styles.navbar}  d-none d-md-block `}>
                <Container>
                    <div className="d-flex flex-wrap py-3">
                        <ul className="nav me-auto" style={{fontSize: "14px"}}>
                            <li className="nav-item"><a href="#" className="nav-link link-light px-3">News</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-light px-3">Events</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-light px-3">Press</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-light px-3">Karriere</a></li>
                            <span className="border-end border-1"></span>
                            <li className="nav-item">
                                <a href="tel:" className="nav-link link-light">
                                    <span className="border rounded-circle p-1">
                                        <PhoneCall className="p-0 m-0" style={{width: "17px"}}/>
                                    </span>
                                    <span className="px-2">Admissions +49 (0) 40-2093485-00</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="tel:" className="nav-link link-light px-3">
                                    <span className="border rounded-circle p-1">
                                        <PhoneCall className="p-0 m-0" style={{width: "17px"}}/>
                                    </span>
                                    <span className="px-2">Students +49 (0) 40-2093485-00</span>
                                </a>
                            </li>
                            <span className="border-end border-1"></span>
                            <li className="nav-item">
                                <a href="#" className="btn btn-sm btn-outline-light border-2 rounded-circle mx-3">
                                    <Video style={{width: "18px"}}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="tel:" className="nav-link p-0">
                                    <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
                                         style={{height: "36px"}} alt="WhatsApp"/>
                                </a>
                            </li>
                        </ul>

                        <ul className="nav">
                            <li className="nav-item px-3">
                            <div className="dropdown text-end py-1">
                                    <a href="#" className="d-block link-light text-decoration-none dropdown-toggle"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        <img
                                            src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3695729/1820/1214/m1/fpnw/wm0/germany-.jpg?1512567401&s=b073983c5c75802d336fe3deee337275"
                                            alt="Flag" width="32" height="32"
                                            className="border" style={{ height: "25px" }} />
                                    </a>
                                <ul className="dropdown-menu text-small">
                                    <li><a className="dropdown-item" href="#"><img
                                        src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3695729/1820/1214/m1/fpnw/wm0/germany-.jpg?1512567401&s=b073983c5c75802d336fe3deee337275"
                                        alt="Flag" width="32" height="32"
                                        className="border" style={{height: "25px"}}/> Deutsche</a></li>

                                    <li><a className="dropdown-item" href="#"><img
                                        src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
                                        alt="Flag" width="32" height="32"
                                        className="border" style={{height: "25px"}}/> English</a></li>
                                </ul>
                            </div>
                            </li>
                            <span className="border-end border-1"></span>
                            <li className="nav-item px-3">
                                <div className="dropdown text-end py-1">
                                    <a href="#" className="d-block link-light text-decoration-none dropdown-toggle"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="User" width="32" height="32"
                                             className="rounded-circle border" />
                                        <span className="px-2">Sign in</span>
                                    </a>
                                    <ul className="dropdown-menu text-small">
                                        <li><a className="dropdown-item" href="#">New project...</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </header>

            <header className={`${styles.lsBar} py-5`}>
                <Container className="d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <Image className="px-3" src="/logos/umfst-logo-neu_whiteENG-01-1-768x231.png" width={192} height={50} alt="UMFST Logo" />
                        <Image className="px-3" src="/logos/umch_blanco-opt.png" width={320} height={46} alt="UMCH Logo" />
                    </a>
                    <form className="col-12 row col-lg-auto mb-3 mb-lg-0" role="search">
                        <div className="col-auto">
                            <div className="input-group has-validation">
                                <input type="search"
                                       className={`form-control bg-transparent rounded-start-pill border-end-0 text-white`}
                                       aria-label="Search" />
                                <span className={`input-group-text bg-transparent rounded-end-pill text-white border-start-0`}>
                                    <Search />
                                </span>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button className={`${styles.btnYellow} btn btn-warning rounded-start-pill rounded-end-pill btn-yellow px-4`}>
                                Jetzt bewerben
                            </button>
                        </div>
                    </form>
                </Container>
            </header>
        </>
    );
}

export default SecondNavbar;

'use client';

import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./sectionSeven.module.css";
import {PlayIcon} from "lucide-react";


export function initializeFullHeight() {
    if (typeof window !== 'undefined') {
        const setFullHeight = () => {
            const elements = document.querySelectorAll<HTMLElement>('.js-fullheight');
            elements.forEach(element => {
                element.style.height = `${window.innerHeight}px`;
            });
        };

        setFullHeight();
        window.addEventListener('resize', setFullHeight);
    }
}

export function initializeCarousel() {
    if (typeof window !== 'undefined') {
        const $ = require('jquery');
        require('owl.carousel');

        $(document).ready(function () {
            ($('.featured-carousel') as any).owlCarousel({
                loop: true,
                autoWidth:true,
                autoplay: true,
                margin: 30,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                dots: true,
                video:true,
                autoplayHoverPause: false,
                items: 1,
                lazyLoad:true,
                center:true,
                navText: [
                    "<span class='ion-ios-arrow-back text-dark'></span>",
                    "<span class='ion-ios-arrow-forward  text-dark'></span>"
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        });
    }
}

const CarouselComponent = () => {
    useEffect(() => {
        initializeFullHeight();
        initializeCarousel();
    }, []);

    return (
                <div className="featured-carousel owl-carousel">
                    <div className="item">
                        <div className="work">
                            <div
                                className={`${styles.bgSlide5} ${styles.bgSlide} img d-flex align-items-end justify-content-center position-relative`}>
                                <div
                                    className={`${styles.playIconContainer} position-absolute d-flex align-items-center justify-content-center w-100 h-100`}>
                                    <PlayIcon className={`bg-dark rounded-circle px-4 m-5 z-1`} style={{
                                        width: 96,
                                        height: 96,
                                        color: "white"
                                    }}/>
                                </div>
                                <div className={`text w-100  bg-dark opacity-75 text-white p-3 d-block z-0`}>
                                    <p className="text-center fw-bold text-white">Paolina Mia, 3. Semester aus Paris,
                                        Frankreich</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="work">
                            <div
                                className={`${styles.bgSlide5} ${styles.bgSlide} img d-flex align-items-end justify-content-center position-relative`}>
                                <div
                                    className={`${styles.playIconContainer} position-absolute d-flex align-items-center justify-content-center w-100 h-100`}>
                                    <PlayIcon className={`bg-dark rounded-circle px-4 m-5 z-1`} style={{
                                        width: 96,
                                        height: 96,
                                        color: "white"
                                    }}/>
                                </div>
                                <div className={`text w-100 bg-dark opacity-75 text-white p-3 d-block z-0`}>
                                    <p className="text-center fw-bold text-white">Paolina Mia, 3. Semester aus Paris,
                                        Frankreich</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="work">
                            <div
                                className={`${styles.bgSlide5} ${styles.bgSlide} img d-flex align-items-end justify-content-center position-relative`}>
                                <div
                                    className={`${styles.playIconContainer} position-absolute d-flex align-items-center justify-content-center w-100 h-100`}>
                                    <PlayIcon className={`bg-dark rounded-circle px-4 m-5 z-1`} style={{
                                        width: 96,
                                        height: 96,
                                        color: "white"
                                    }}/>
                                </div>
                                <div className={`text w-100  bg-dark opacity-75 text-white p-3 d-block z-0`}>
                                    <p className="text-center fw-bold text-white">Paolina Mia, 3. Semester aus Paris,
                                        Frankreich</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="work">
                            <div
                                className={`${styles.bgSlide5} ${styles.bgSlide} img d-flex align-items-end justify-content-center position-relative`}>
                                <div
                                    className={`${styles.playIconContainer} position-absolute d-flex align-items-center justify-content-center w-100 h-100`}>
                                    <PlayIcon className={`bg-dark rounded-circle px-4 m-5 z-1`} style={{
                                        width: 96,
                                        height: 96,
                                        color: "white"
                                    }}/>
                                </div>
                                <div className={`text w-100  bg-dark opacity-75 text-white p-3 d-block z-0`}>
                                    <p className="text-center fw-bold text-white">Paolina Mia, 3. Semester aus Paris,
                                        Frankreich</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="work">
                            <div
                                className={`${styles.bgSlide5} ${styles.bgSlide} img d-flex align-items-end justify-content-center position-relative`}>
                                <div
                                    className={`${styles.playIconContainer} position-absolute d-flex align-items-center justify-content-center w-100 h-100`}>
                                    <PlayIcon className={`bg-dark rounded-circle px-4 m-5 z-1`} style={{
                                        width: 96,
                                        height: 96,
                                        color: "white"
                                    }}/>
                                </div>
                                <div className={`text w-100  bg-dark opacity-75 text-white p-3 d-block z-0`}>
                                    <p className="text-center fw-bold text-white">Paolina Mia, 3. Semester aus Paris,
                                        Frankreich</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default CarouselComponent;

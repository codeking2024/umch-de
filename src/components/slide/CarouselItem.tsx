import React from 'react';
import Image from "next/image";
import styles from "./mainSlide.module.css";

interface CarouselItemProps {
    src: string;
    alt: string;
    caption: React.ReactNode;
    enable: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ src, alt, caption, enable }) => (
    <div className={`carousel-item ${enable}`}>
        <Image src={src} width={1024} height={680} className={`${styles.iFit} d-block w-100 carousel-dark`} alt={alt} />
        <div className="carousel-caption d-none d-md-block m-5">
            {caption}
        </div>
    </div>
);

export default CarouselItem;
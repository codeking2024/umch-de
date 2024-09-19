import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselComponent from "@/pages/homepage/section_seven/carousel.component";



const SectionSeven: React.FC = () => {
    return (
        <div className={`bg-light`}>

                <div className="text-center mb-5 pt-5">
                    <p className={`fw-medium`}>
                        Vom Hörsaal bis ins Krankenhaus
                    </p>
                    <h2 className="fw-bold">Unser Vlog führt Sie durchs Studienleben!</h2>
                </div>
                <div>
                    <CarouselComponent />

                    <div className="text-center py-4">
                    <FontAwesomeIcon className={`text-danger pb-2`} icon={["fab", "youtube"]} width={48} height={48} />
                    <p className={"text-sm h6 text-center d-block"}>Hier geht es direkt zu unseren Youtube Clips</p>
                    </div>
                </div>

        </div>
    );
};

export default SectionSeven;

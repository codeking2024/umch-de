import React from "react";
import SectionTwo from "@/pages/homepage/section_two/sectionTwo";
import SectionThree from "@/pages/homepage/section_three/sectionThree";
import SectionFour from "@/pages/homepage/section_four/sectionFour";
import SectionFive from "@/pages/homepage/section_five/sectionFive";
import SectionSix from "@/pages/homepage/section_six/sectionSix";
import SectionSeven from "@/pages/homepage/section_seven/sectionSeven";
import SectionEight from "@/pages/homepage/section_eight/sectionEight";
import SectionNine from "@/pages/homepage/section_nine/sectionNine";
import MainSlide from "@/components/slide/mainSlide";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/pages/footer/footer";


const HomePage: React.FC = () => {
    return (
        <div className={"bg-white"}>
            <MainSlide />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <SectionNine />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default HomePage;

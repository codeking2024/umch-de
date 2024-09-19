import Header from "../../../pages/header/header";
import Footer from "../../../pages/footer/footer";
import News from "./news";
import Sidebar from "@/components/sidebar/sidebar";

export default function Page() {
    return (
        <div className={"bg-white"}>
            <Header />
            <News />
            <Sidebar />
            <Footer />
        </div>
    );
}

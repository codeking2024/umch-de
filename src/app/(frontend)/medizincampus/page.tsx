import Header from "../../../pages/header/header";
import Footer from "../../../pages/footer/footer";
import Campus from "./index";
import Sidebar from "@/components/sidebar/sidebar";

export default function Page() {
    return (
        <div className={"bg-white"}>
            <Header />
            <Campus />
            <Sidebar />
            <Footer />
        </div>
    );
}

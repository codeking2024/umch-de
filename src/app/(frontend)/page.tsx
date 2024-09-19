import Header from "../../pages/header/header";
import Footer from "../../pages/footer/footer";
import Sidebar from "@/components/sidebar/sidebar";
import HomePage from "@/pages/homepage/homepage";

export default function Page() {
  return (
    <div className={"bg-white"}>
      <Header />
      <HomePage />
      <Sidebar />
      <Footer />
    </div>
  );
}

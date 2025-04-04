import CenterLayout from "@/components/landingPage/CenterLayout";
import FooterImg from "@/components/landingPage/FooterImg";
import Navbar from "@/components/landingPage/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen h-screen">
      {/* Navbar layer */}
      <div className="lg:border-b  lg:shadow-xs ">
        <Navbar />
      </div>
      <CenterLayout />

      <FooterImg />
    </div>
  );
};

export default LandingPage;

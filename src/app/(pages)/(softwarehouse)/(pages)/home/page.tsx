
import { useRouter } from "next/navigation";
import WhyChooseOurTeam from "../../components/WhyChooseOurTeam";
import OurProjectSection from "../../components/OurProjectSection";
import HomeFrontTopSection from "../../components/HomeFrontTopSection";
import OurServicesCard from "../../components/OurServices";
import StatsSection from "../../components/StatsSection";
import HireDevCard from "../../components/HireDevCard";
import Testimonies from "../../components/Testimonies";
import FAQ from "../../components/FAQ";
import ContactUs from "../../components/ContactusForm";
import FooterSection from "../../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeFrontTopSection />

      {/* Services Card Section */}
      <div className="mt-5">
        {/* clickup tech services section */}
        <OurServicesCard />

        {/* Animated stats section */}
        <StatsSection />

        {/* our developers section */}

        <HireDevCard />

        {/* contact us form */}
        {/* <hr className="my-8 border-gray-300" /> */}

        <WhyChooseOurTeam />

        <OurProjectSection />
        <ContactUs/>

        {/* Testimonial section */}
        <Testimonies />

        <FAQ />
      </div>
    </>
  );
};

export default HomePage;

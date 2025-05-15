import TopSection from "./components/TopSection";
import OurCourses from "./components/OurCourses";
import WhyChooseInstitude from "./components/WhyChooseInstitude";
import StepsProcessSection from "./components/StepsProcessSection";
import StatsSection from "./components/StatsSection";
import StaticCard from './components/StaticCard'
import OurProjectSection from "./components/OurProjectSection";

export default function Institude() {
    return (
        <>
        <TopSection />
        <OurCourses />
        <StatsSection/>
        <OurProjectSection/>
        {/* <WhyChooseInstitude /> */}
        {/* <StaticCard/> */}
        <StepsProcessSection />
        </>
    );
}
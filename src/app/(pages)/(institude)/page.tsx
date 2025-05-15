import TopSection from "./components/TopSection";
import OurCourses from "./components/OurCourses";
import StepsProcessSection from "./components/StepsProcessSection";
import StatsSection from "./components/StatsSection";
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
import TopSection from "./components/TopSection";
import OurCourses from "./components/OurCourses";
import StepsProcessSection from "./components/StepsProcessSection";
import StatsSection from "./components/StatsSection";
import OurProjectSection from "./components/OurProjectSection";
import TabsSection from './components/TabsSection'

export default function Institude() {
    return (
        <>
        <TopSection />
        <OurCourses />
        <StatsSection/>
        <TabsSection />
        <OurProjectSection/>
        {/* <WhyChooseInstitude /> */}
        {/* <StaticCard/> */}
        <StepsProcessSection />
        </>
    );
}
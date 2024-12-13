import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/Sponsors";
import contactsData from "../components/Team/TeamList.json"; // Adjust the path as necessary
import { Contacts } from "../components/Team/Contacts";
import AboutUs from "../components/AboutUs";
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/stars-background";
import Blog from "../components/Blog";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Statistics from "../components/Stats/Statistics";
import PartnersMarquee from "../components/Partners/Partners";

function Home() {
  return (
    <main className="home area">
        {/* <ShootingStars minDelay={1000} maxSpeed={20} starWidth={40} />
        <StarsBackground starDensity={0.0009} /> */}
        <Hero />
        <AboutUs />
        <PartnersMarquee />
        <SponsorsMarquee />
        <Blog />
        <MemberCards contacts={contactsData as Contacts} />
        {/* disabled due to lack of Notion/SDS event sync */}
        {/* <InfoCards />  */}
        <Statistics />
    </main>
  );
}

export default Home;

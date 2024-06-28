//Import Needed Components
import HeroSection from "../../components/HeroSection";
import Details from "../../components/campaignDetails/Details";

//Import Needed Images
import viewImg from "/images/view.svg";
import viewImg1 from "/images/flipView.svg";


const CampaignDetails = () => {
    return ( 
        <main>
            <HeroSection imageUrl={viewImg} imageUrl1={viewImg1} heading="Time to Shine!" subHeading="Showcase Your Creativity!"/>
            <Details />
        </main>
     );
}
 
export default CampaignDetails;
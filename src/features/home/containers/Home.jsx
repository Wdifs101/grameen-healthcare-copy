import Banner from "../components/Banner/Banner";
import Partners from "../components/Partners/Partners";
import ImpactfulMission from "../components/ImpactfulMission/ImpactfulMission";
import HomePageBlogs from "../components/HomePageBlogs/HomePageBlogs";
import HomePageNewsLetter from "../components/HomePageNewsLetter/HomePageNewsLetter";
import HomePageOurEvents from "../components/HomePageOurEvents/HomePageOurEvents";
import HomePageSocialBusiness from "../components/HomePageSocialBusiness/HomePageSocialBusiness";
import HomePageSpeech from "../components/HomePageSpeech/HomePageSpeech";
import HomePageWelcome from "../components/HomePageWelcome/HomePageWelcome";
import HomePageEmpowering from "../components/HomePageEmpowering/HomePageEmpowering";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      <HomePageSpeech></HomePageSpeech>
      <HomePageWelcome></HomePageWelcome>
      <HomePageEmpowering></HomePageEmpowering>
      <HomePageSocialBusiness></HomePageSocialBusiness>
      <HomePageOurEvents></HomePageOurEvents>
      <HomePageNewsLetter></HomePageNewsLetter>
      <HomePageBlogs></HomePageBlogs>
      <ImpactfulMission></ImpactfulMission>
      <Partners></Partners>
    </div>
  );
};

export default Home;

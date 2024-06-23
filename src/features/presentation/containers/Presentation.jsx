import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import PresentationCard from "../../../shared/components/PresentationCard/PresentationCard";
import bannerImage from "../assets/bannerImage.png";
const Presentation = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="bg-[#F6F6F6] py-8  px-4">
      <div className="space-y-7 max-w-7xl mx-auto">
        <GlobalBanner image="https://www.bigissue.com/wp-content/uploads/2017/10/Muhammad-Yunus_hero.jpg">Presentation</GlobalBanner>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {arra.map((item) => (
            <PresentationCard key={item}></PresentationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;

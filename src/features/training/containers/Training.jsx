import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import PresentationCard from "../../../shared/components/PresentationCard/PresentationCard";
import bannerImage from "../assets/training.jpg";
import cardPic from "../assets/training.jpg";

const Training = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="bg-[#F6F6F6] py-8  px-4">
      <div className="space-y-7 max-w-7xl mx-auto">
        <GlobalBanner image={bannerImage}>Training</GlobalBanner>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {arra.map((item) => (
            <PresentationCard
              key={item}
              cardPic={cardPic}
              detail=""
              title="Training camp"
            ></PresentationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;

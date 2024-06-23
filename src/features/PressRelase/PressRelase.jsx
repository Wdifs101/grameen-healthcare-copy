import GlobalBanner from "../../shared/components/GlobalBanner/GlobalBanner";
import PresentationCard from "../../shared/components/PresentationCard/PresentationCard";
import bannerImage from "./assets/bannerImage.png";
const PressRelase = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {" "}
      <div className="bg-[#F6F6F6] py-8  px-4">
        <div className="space-y-7 max-w-7xl mx-auto">
          <GlobalBanner image="https://grameenhealthcareservices.org/templates/ghs/images/YCPT070224-Image-2.jpg">Press Release</GlobalBanner>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {arra.map((item) => (
              <PresentationCard key={item}></PresentationCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRelase;

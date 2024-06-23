import GlobalBanner from "../../shared/components/GlobalBanner/GlobalBanner";
import PresentationCard from "../../shared/components/PresentationCard/PresentationCard";
import bannerImage from "./assets/bannerImage.png";
import cardPic from "./assets/eye-camp.png";
const EyeCamp = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {" "}
      <div className="bg-[#F6F6F6] py-8  px-4">
        <div className="space-y-7 max-w-7xl mx-auto">
          <GlobalBanner image={bannerImage}>Eye Camp</GlobalBanner>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {arra.map((item) => (
              <PresentationCard
                key={item}
                cardPic={cardPic}
                detail="The free screening camp for school children in and around Bogra and
        Barisal are being undertaken by Grameen GC Eye Hospital since the year
        2007."
                title="School eye camp"
              ></PresentationCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EyeCamp;

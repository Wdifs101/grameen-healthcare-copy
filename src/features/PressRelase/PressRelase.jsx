import GlobalBanner from "../../shared/components/GlobalBanner/GlobalBanner";
import PresentationCard from "../../shared/components/PresentationCard/PresentationCard";
import bannerImage from "./assets/bannerImage.png";
import img1 from "../../shared/assets/forGallery/a6.png"
import img2 from "../../shared/assets/forGallery/a1a8.png"
import img3 from "../../shared/assets/forGallery/a2.png"
const PressRelase = () => {
  
  const presses=[
    {
      "id": 1,
      "img": img1,
      "title": "The changes in the way we see science",
      "description": "An insightful look into how scientific perspectives have evolved over the years and what this means for future research."
    },
    {
      "id": 2,
      "img": img2,
      "title": "Exploring the Universe: New Discoveries",
      "description": "A deep dive into the latest astronomical findings and their implications for our understanding of the cosmos."
    },
    {
      "id": 3,
      "img": img3,
      "title": "Advancements in Biotechnology",
      "description": "An overview of recent breakthroughs in biotechnology and how they are revolutionizing medicine and agriculture."
    }
  ]
  
  return (
    <div>
      {" "}
      <div className="bg-[#F6F6F6] py-8  px-4">
        <div className="space-y-7 max-w-7xl mx-auto">
          <GlobalBanner image="https://grameenhealthcareservices.org/templates/ghs/images/YCPT070224-Image-2.jpg">Press Release</GlobalBanner>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {presses.map((item) => (
              <PresentationCard key={item} cardPic={item.img} title={item.title} detail={item.description}></PresentationCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRelase;

import Gallery from "../../../shared/components/Gallery/Gallery";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import UpComingSlider from "../../../shared/components/UpComingSlider/UpComingSlider";
import eventImage from "../assets/eventImage.png";

const Events = () => {
  return (
    <div className="bg-[#F6F6F6] px-2 md:space-y-8  sm:space-y-4 space-y-2">
      <div className="max-w-7xl m-auto md:py-8  py-5    ">
        <GlobalBanner image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/muhammad-yunus-bangladesh-024805448-16x9_0.jpg?VersionId=WSd5oyWh.4zTxEwpjz5S4yVfoMtMK45W&size=690:388">Events</GlobalBanner>
      </div>
      <div className="">
        <UpComingSlider>Up Coming </UpComingSlider>
      </div>
      <div className="">
        <UpComingSlider color="bg-[#EBF5F0]">Latest </UpComingSlider>
      </div>

      <div className="py-5 max-w-7xl mx-auto">
        <Typography className="font-semibold  flex mb-5 " variant="h3">
          All Events
          <h1 className=" border-b-4 - border-[#163D01] w-[20px]"></h1>
        </Typography>

        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Events;

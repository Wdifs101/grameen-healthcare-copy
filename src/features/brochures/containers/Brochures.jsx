
import Typography from "../../../shared/components/Typography/Typography";
import bannerPicture from "../assets/Screenshot (11).png";
const Brochures = () => {
  
  return (
  
    <div className="bg-[#F6F6F6] py-8  px-4">
      <div className="space-y-7 ">
        <div className="relative ">
          <img
            src={bannerPicture}
            alt="Banner"
            className="object-cover  lg:h-[500px] md:h-[380px] sm:h-[320px] h-[280px] w-full"
          />
          <div className="absolute inset-0 bg-slate-700 opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <Typography
                className="text-white text-center font-heading font-semibold"
                variant="h2"
              >
                Discover the comprehensive details and features in our latest
                brochure.
              </Typography>
              <div>
                <div className="flex space-x-4 mt-5 justify-center">
                  <a
                    href="https://drive.google.com/file/d/15elkBQvVNBJM274alAPgiyweiySAt47U/view"
                    className="inline-block md:px-6 md:py-2  px-3 py-2 bg-[#0CD21D] text-white font-semibold rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochures;

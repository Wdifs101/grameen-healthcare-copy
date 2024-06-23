import eyeCenterImage from "../../assets/demoPic/eyeCenter.png"
import Typography from "../Typography/Typography";

const EyeCenter = () => {
    return (
        <div className="flex border border-[#B7B7B7] md:flex-row flex-col bg-white rounded-xl justify-around md:gap-7 md:p-5 sm:p-4 p-3">
            <div>
                <img className="object-cover h-[245px] w-full " src={eyeCenterImage} alt="eyeCenterPicture" />

            </div>

            <div className="md:mt-7 mt-3">
                  <Typography className="font-semibold " variant="h6">Grameen Eye Care Center- Kalaiz</Typography>
                  <Typography variant='h7' className="mt-1">Grameen Eye Care Center at Kalai in Joypurhat District launched on 30 December 2021.The Eye Care Center is being Operated by Grameen GC Eye Hospital,Bogura.</Typography>
            </div>
        </div>
    );
};

export default EyeCenter;
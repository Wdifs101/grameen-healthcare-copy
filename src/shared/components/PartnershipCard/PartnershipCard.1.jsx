
import brandLogo from "../../assets/Logo/brandLogo.png";
import Typography from "../Typography/Typography";

export const PartnershipCard = ({name,children,image}) => {

  return (
    <div className="flex justify-between border-2 rounded-xl lg:p-10 md:p-6 p-3 gap-4 items-center bg-secondary">
      <div className="w-2/5">
        <img src={image} className="object-cover" alt="brandLogo" />
      </div>
      <div className="w-4/5">
        <Typography className="font-semibold font-heading mb-2" variant="h4">
         {name}
        </Typography>

        <Typography variant="p" className="font-medium ">
         {children}
        </Typography>

        <div className="flex items-center gap-2">
          <Typography variant="p" className="font-medium">
            For more details .
          </Typography>
          <Typography
            variant="p"
            className="font-medium cursor-pointer"
            color="text-[#08A316]"
          >
            Click here
          </Typography>
        </div>
      </div>
    </div>
  );
};

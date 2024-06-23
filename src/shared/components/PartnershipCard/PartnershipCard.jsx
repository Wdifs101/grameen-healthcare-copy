import { useEffect, useState } from "react";
import brandLogo from "../../assets/Logo/brandLogo.png";
import Typography from "../Typography/Typography";

const PartnershipCard = () => {
  const text =
    "The concept of Orbis began in the late 1960s when Dr. David Paton, a renowned US ophthalmologist, was a faculty member of The Wilmer Eye Institute at John Hopkins. After extended experiences abroad, Dr. Paton recognized the lack of eye care and ophthalmic teaching in developing nations where blindness was widespread. It concerned him because 90% of the worlds avoidable blindness occurs in the developing world, so someone needed to try to close this gap. But the high costs of tuition, international travel and accommodations prevented most doctors and nurses in low-income countries from coming to the USA for training";

  const [displayText, setDisplayText] = useState("");
  const updateText = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setDisplayText(text.slice(0, 200));
    } else if (width < 768) {
      setDisplayText(text.slice(0, 300));
    } else if (width < 900) {
      setDisplayText(text.slice(0, 400));
    } else {
      setDisplayText(text);
    }
  };
  useEffect(() => {
    updateText();
    window.addEventListener("resize", updateText);
    return () => {
      window.removeEventListener("resize", updateText);
    };
  }, [text]);

  return (
    <div className="flex justify-between border-2 rounded-xl lg:p-10 md:p-6 p-3 gap-4 items-center">
      <div className="w-2/5">
        <img src={brandLogo} className="object-cover" alt="brandLogo" />
      </div>
      <div className="w-4/5">
        <Typography className="font-semibold" variant="h5">
          Orbis International
        </Typography>

        <Typography variant="p" className="font-medium  ">
          {displayText}
        </Typography>

        <div className="flex items-center gap-2">
          <Typography variant="p" className="font-medium">
            For more details .
          </Typography>
          <Typography
            variant="p"
            className="font-medium"
            color="text-[#08A316]"
          >
            Click here
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCard;

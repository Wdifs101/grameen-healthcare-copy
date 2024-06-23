import { primaryCenters } from "../../../fakeAPi/primaryEyeCenter";
import EyeCenter from "../../../shared/components/EyeCenter/EyeCenter";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";

import bannerPicture from "../../EyeCamp/assets/eye-camp.png";

const PrimaryEyeCare = () => {
  return (
    <div className="bg-background-primary ">
      <div className="max-w-7xl mx-auto py-8">
        <GlobalBanner image={bannerPicture}>
          {" "}
          Primary Eye Care center (vision center)
        </GlobalBanner>

        <div className="lg:p-8 md:p-6 sm:p-5 p-4 ">
          <Typography variant="h5">
            Welcome to{" "}
            <span className="font-bold">Grameen Health Care Services Ltd.</span>
          </Typography>
          <Typography
            className="font-semibold lg:mt-[18px] md:mt-[12px] sm:mt-[10px] mt-[8px] "
            variant="h6"
          >
            Grameen Eye Care Center (Vision Center)
          </Typography>
          <Typography className="mt-" variant="p">
            Grameen Eye Care Center is a primary eye care center. These centers
            are providing eye care services through telemedicine system.
            Patients from remote and rural areas are getting eye care services
            where ophthalmologist is not available. The Patients coming in the
            Grameen Eye Care Center are examined by optometrist and connected
            with the ophthalmologist via Video call. Ophthalmologist consults
            with the patients and sends prescription via internet. The
            optometrist of Grameen Eye Care Center prints the prescription and
            handover it to the patients. Critical patients are being referred to
            Grameen base hospital.{" "}
          </Typography>
          <Typography className="font-semibold mt-2" variant="h6">
            Services Offered by Grameen Eye Care Center (Vision Center):
          </Typography>
          <ul className="list-disc pl-5">
            <li>Primary eye care</li>
            <li>Tele-consultation with opthalmologist</li>
            <li>Refractive error correction</li>
            <li>
              PBasic eye investigation such as SPT, IOP, Blood Sugar, Urine
              Sugar etc.
            </li>
            <li>Supplying Eye Glasses</li>
            <li>Selling Medicines</li>
          </ul>
          <Typography className="font-semibold mt-2" variant="h6">
            GHS has setup Fifteen Primary Eye Care Centers (Vision Center) :-
          </Typography>
        </div>
        <div className="space-y-3">
          {primaryCenters.map((center) => (
            <EyeCenter key={center.id} title={center.title} img={center.image}>
              {center.details}
            </EyeCenter>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimaryEyeCare;

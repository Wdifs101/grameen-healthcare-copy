import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import pic1 from "../assets/eyeService1.png";
import pic2 from "../assets/eyeService2.png";
import pic3 from "../assets/eyeService3.png";
import pic4 from "../assets/eyeService4.png";

import serviceEye from "../../doctorProfile/assets/doctor.jpg";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";

import HistoryDetails from "../../../shared/components/historyDetails/HIstoryDetails";

const ServicesOfEye = () => {
  return (
    <div className="bg-background-primary ">
      <div className="max-w-7xl mx-auto py-8">
        <GlobalBanner image={serviceEye}>
          {" "}
          Services of eye Hospital
        </GlobalBanner>

        <div className="lg:p-8 md:p-6 lg:space-y-16 md:space-x-14 sm:space-y-12 space-y-10 sm:p-5 p-4 ">
          <HeadingLine variant="h5">Our Services</HeadingLine>

          <HistoryDetails image={pic1} title="OPD Services">
            We are providing Consultations, Counseling, Investigation, Lab&
            pathology, Glaucoma, Laser, Low Vision & Perimetry (Visual Field)
            services.
          </HistoryDetails>

          <HistoryDetails order="right" image={pic2} title="Surgery">
            At Grameen Health Care Services Ltd., we offer cataract, SICS,
            Phaco, DCT, DCR, and other minor eye surgeries. With our skilled
            surgeons and advanced facilities, we prioritize patient safety and
            comfort throughout the surgical journey. From routine cataract
            procedures to specialized interventions like DCR, we provide
            comprehensive solutions tailored to individual needs. You can trust
            us to deliver optimal outcomes and personalized care to enhance your
            vision and quality of life.
          </HistoryDetails>

          <HistoryDetails image={pic3} title="Out Reach Program">
            At Grameen Health Care Services Ltd., our commitment to eye care
            extends beyond our facility walls. We conduct regular eye camps in
            rural areas, mobilizing our team of doctors and nurses to provide
            essential services to underserved communities. Additionally, our
            school sight programs aim to detect and address vision issues in
            children, ensuring their academic success and overall well-being. We
            also prioritize the health and safety of factory workers by
            conducting targeted screenings to identify and manage eye health
            concerns. Beyond clinical services, our outreach efforts include
            community engagement activities such as educational initiatives and
            workshops, fostering awareness and empowerment.
          </HistoryDetails>

          <HistoryDetails order="right" image={pic4} title="Support Services">
            In addition to our clinical offerings, each of our hospitals is
            equipped with essential support services to enhance the patient
            experience. Our on-site spectacle and medicine dispensing shops
            ensure convenient access to eyewear and prescribed medications,
            promoting continuity of care. Our dedicated housekeeping team
            maintains a clean and comfortable environment, prioritizing patient
            safety and well-being. For nourishment and refreshment, our food
            service and cafeteria provide a variety of nutritious meals and
            snacks, catering to the dietary needs and preferences of our
            patients and visitors.
          </HistoryDetails>
        </div>
      </div>
    </div>
  );
};

export default ServicesOfEye;

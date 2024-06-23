import Button from "../../../shared/components/Button/Button";
import DoctorCard from "../../../shared/components/DoctorCard/DoctorCard";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import Typography from "../../../shared/components/Typography/Typography";
import HistoryBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import image from "../assets/doctor.jpg";
import { IoSearch } from "react-icons/io5";
import doctorProfileInfo from "../../../fakeAPi";

const DoctorProfile = () => {
  return (
    <div className="bg-[#F8FAFF] py-8">
      <HistoryBanner image={image}></HistoryBanner>
      <div className="p-5 max-w-screen-xl mx-auto">
        <div className="flex sm:flex-row flex-col  justify-between">
          <div className="flex mb-5">
            <HeadingLine variant="h3">Doctors</HeadingLine>
          </div>
          <div className="bg-white  p-5 shadow-2xl rounded-xl md:-mt-32 z-20 mb-6  sm:w-[400px] w-full">
            <form className="space-y-4" action="">
              <Typography variant="h3">Find the doctor</Typography>

              <div className="relative">
                <input
                  type="text"
                  className="outline-none w-full border rounded-lg p-2 pl-10 focus:ring-1 focus:ring-[#0CD21D] focus:ring-offset-4"
                  placeholder="Doctor’s Name"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoSearch className=" text-[#B0A9A9]" />
                </div>
              </div>

              <div className="relative ">
                <select
                  className="outline-none border w-full text-[#B0A9A9] rounded-lg p-2  focus:ring-1 focus:ring-[#0CD21D] focus:ring-offset-4"
                  name="location"
                  id=""
                >
                  <option selected value="">
                    Select Brach
                  </option>
                  <option value="">Dhaka</option>
                  <option value="">Tangail</option>
                  <option value="">Rajshahi</option>
                  <option value="">Pabna</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="outline-none border w-full rounded-lg p-2 pl-10 focus:ring-1 focus:ring-[#0CD21D] focus:ring-offset-4"
                  placeholder="Search Department"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoSearch className=" text-[#B0A9A9]" />
                </div>
              </div>
              <div className="flex  justify-center ">
                <Button className="rounded-md mt-2" variant="donateBtn">
                  {" "}
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 mt-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {doctorProfileInfo.map((item) => (
            <DoctorCard key={item} item={item}></DoctorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

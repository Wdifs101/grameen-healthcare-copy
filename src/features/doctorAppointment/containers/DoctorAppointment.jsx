import { useParams } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import DoctorDetails from "../components/DoctorDetails";
import doctorProfileInfo from "../../../fakeAPi";

const DoctorAppointment = () => {
  const { id } = useParams();
  // console.log(id);
  const filterDoctor = doctorProfileInfo.find((item) => item._id == id);
  // console.log(filterDoctor);
  return (
    <div className="bg-background-primary px-3 py-8">
      <div className="max-w-7xl mx-auto">
        <DoctorDetails item={filterDoctor}></DoctorDetails>

        <AppointmentForm></AppointmentForm>
      </div>
    </div>
  );
};

export default DoctorAppointment;

import AppointmentForm from "../../doctorAppointment/components/AppointmentForm";

const HospitalAppointment = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto py-8 px-3">
        <AppointmentForm status={true}> </AppointmentForm>
      </div>
    </div>
  );
};

export default HospitalAppointment;

import { useState } from "react";
import Typography from "../../../shared/components/Typography/Typography";
import TimeSlot from "./TimeSlot";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from "../../../shared/components/Button/Button";

// eslint-disable-next-line react/prop-types
const AppointmentForm = ({status}) => {
  const [value, onChange] = useState(new Date());
  const [checkboxes, setCheckboxes] = useState()
  const handleCheckboxChange = (option) => {
    setCheckboxes(option);
  };

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM' ,"11:00pm", "9:00pm"
  ];

  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="md:mt-8 sm:mt-7  mt-6">
      <Typography variant="h3">Make an Appointment</Typography>

      <div className="mt-5">
        <form action="">
          <div className=" grid md:gap-11 gap-8 md:grid-cols-3  grid-cols-2">
            <div className="form-control">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Patient Name<span className="text-red-400 ">*</span>
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg  p-2 focus:border-[#08A316]"
                placeholder="Full name"
                name="patientName"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Next of Kin
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="Full name of kin"
                name="nextKin"
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Gender
                </Typography>
              </label>
              <select
                name="gender"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                id=""
              >
                <option hidden selected value="">
                  Select Gender
                </option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Age
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="Ender Your Age"
                name="age"
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Date of birth
                </Typography>
              </label>
              <input
                type="datetime-local"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="MM/DD/YYYY"
                name="date"
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Mobile<span className="text-red-400">*</span>
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="01457893256"
                name="mobile"
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Address Village
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="Ender Your Village name"
                name="address"
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Pourosova
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="Ender Your Pourosova name"
                name="pourosova"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Upzila
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="Ender Your upozila name"
                name=""
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  District
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="Ender Your District name"
                name=""
              />
            </div>
            {
              status == true &&<> <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                Hospital
                </Typography>
              </label>
              <select
                name="gender"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                id=""
              >
                <option hidden selected value="">
                Select Hospital
                </option>
                <option value="">Mirpur Hospital</option>
                <option value="">Mohakhali Hospital</option>
              </select>
            </div>
            <div className="form-control ">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                Doctor
                </Typography>
              </label>
              <select
                name="gender"
                className="outline-none w-full border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                id=""
              >
                <option hidden selected value="">
                Select Doctor
                </option>
                <option value="">Doctor Ramim</option>
                <option value="">Doctor Rejuan</option>
              </select>
            </div></>
             

            }
          </div>

          {/* patient status */}
    
            <div className="flex gap-3 md:flex-row flex-col  sm:items-center  mt-14  ">
              <div className="">
              <Typography className="label-text text-lg font-medium">
                Patient status :
              </Typography>
              </div>
            
              <div className="flex sm:flex-row flex-col sm:gap-6 gap-4   sm:items-center ">
              <div className="space-x-4   h-fit">
               <label className="inline-flex items-center sm:gap-0 gap-2 sm:space-x-2">
                  <input
                    type="checkbox"
                    className="hidden"
                  
                    checked={checkboxes =="newPatient"}
                    onChange={() => handleCheckboxChange("newPatient")}
                  />
                  <span
                    className={`w-4 h-4 inline-block rounded-full border-2 ${
                      checkboxes == "newPatient"
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-500"
                    } flex items-center justify-center`}
                  >
                  </span>
                  <span className="text-gray-700">New Patients</span>
                </label>

                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="hidden"
                  
                    checked={checkboxes =="newPatient"}
                    onChange={() => handleCheckboxChange("oldPatient")}
                  />
                  <span
                    className={`w-4 h-4 inline-block rounded-full border-2 ${
                      checkboxes == "oldPatient"
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-500"
                    } flex items-center justify-center`}
                  >
                 
                  </span>
                  <span className="text-gray-700">Old Patients</span>
                </label>
               </div>
               
              <div className="form-control  flex items-center gap-3">
              <label className="label">
                <Typography className="label-text ">
                MRD Number:
                </Typography>
              </label>
              <input
                type="text"
                className="outline-none  border border-gray-500 rounded-lg p-2 focus:border-[#08A316]"
                placeholder="Ender Your MRD Number"
                name="date"
              />
            </div>
              </div>

          </div>


          {/* Problem Discretion* */}

        
          <div className="form-control mt-9">
              <label className="label">
                <Typography className="label-text text-lg font-medium">
                  Problem Discretion<span className="text-red-400 ">*</span>
                </Typography>
              </label>
              <textarea
               placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints." 
                className="outline-none w-full border border-gray-500 rounded-lg  p-2 focus:border-[#08A316]" name="" id="" cols="30" rows="5"></textarea>
            
          </div>

         {/* data  time picker */}
          <div className="flex sm:flex-row flex-col justify-between mt-9 p-2">
          <div className="">
      <h2 className="text-2xl font-bold mb-4">Pick Time:</h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-3  gap-5">
        {timeSlots.map((time) => (
          <TimeSlot
            key={time}
            time={time}
            selected={time === selectedTime}
            onClick={() => handleTimeSlotClick(time)}
          />
        ))}
      </div>
    </div>

    <div>
    <div className="mt-4 ">
      <Calendar className="w-full sm:w-96" onChange={onChange} value={value} />
    </div>
    </div>
          </div>
     
    <div className="flex  lg:mt-16 md:mt-10 sm:mt-8 mt-6 justify-center">
    <Button variant="donateBtn"> Appointment</Button>
    </div>

        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;

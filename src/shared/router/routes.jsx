import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";

import TestingPage from "../components/TestingPage/TestingPage";
import PrimaryEyeCare from "../../features/primaryEyeCare/containers/PrimaryEyeCare";
import ServicesOfEye from "../../features/servicesOfEye/containers/ServicesOfEye";
import Subspeciality from "../../features/subspeciality/containers/Subspeciality";

import DoctorProfile from "../../features/doctorProfile/containers/DoctorProfile";
import SurgeryPackage from "../../features/surygeryPackage/containers/SurgeryPackage";
import SurgeryPackageBudget from "../../features/surgeryPackageBudget/containers/SurgeryPackageBudget";
import DoctorAppointment from "../../features/doctorAppointment/containers/DoctorAppointment";

import History from "../../features/history/containers/History";

import Events from "../../features/events/containers/Events";

import Background from "../../features/background/containers/Background";
import OurMission from "../../features/ourMission/containers/OurMission";
import OurVision from "../../features/ourVision/containers/OurVision";
import BoardOfDirectors from "../../features/boardOfDirectors/containers/BoardOfDirectors";
import ManagingDirectorMessage from "../../features/managingDirectorMessage/containers/ManagingDirectorMessage";
import ProfileOfMdYounus from "../../features/profileMdYounus/containers/ProfileOfMdYounus";

import Blogs from "../../features/blogs/containers/Blogs";
import SingleBlog from "../../features/singleBlog/containers/SingleBlog";
import SingleNews from "../../features/singleNews/containers/SingleNews";
import HospitalAppointment from "../../features/hospitalAppointment/containers/HospitalAppointment";
import News from "../../features/news/containers/News";
import Brochures from "../../features/brochures/containers/Brochures";
import Presentation from "../../features/presentation/containers/Presentation";
import Training from "../../features/training/containers/Training";

import ContactUs from "../../features/contactUs/containers/ContactUs";
import SecondaryHospitalList from "../../features/secondaryHospitalList/containers/SecondaryHospitalList";
import SocialBusiness from "../../features/socialBusiness/containers/SocialBusiness";
import JobPortal from "../../features/jobPortal/containers/JobPortal";
import CareerDetails from "../../features/careerDetails/containers/CareerDetails";
import CareerDetailsForm from "../../features/careerDetailsForm/containers/CareerDetailsForm";
import Contribute from "../../features/contribute/containers/Contribute";
import PartnerAndPatrons from "../../features/partnersAndPatrons/containers/PartnerAndPatrons";
import PhotoAndVideoGallery from "../../features/Gallery/containers/PhotoAndVideoGallery";
import Home from "../../features/home/containers/Home";
import EyeCamp from "../../features/EyeCamp/EyeCamp";
import PressRelase from "../../features/PressRelase/PressRelase";
import Values from "../../features/OurValues/Values";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
      {
        path: "/background",
        element: <Background></Background>,
      },
      {
        path: "/vision",
        element: <OurVision></OurVision>,
      },
      {
        path: "/value",
        element: <Values />,
      },
      {
        path: "/mission",
        element: <OurMission></OurMission>,
      },
      {
        path: "/boards-of-directors",
        element: <BoardOfDirectors></BoardOfDirectors>,
      },
      {
        path: "/message-of-managing-director",
        element: <ManagingDirectorMessage></ManagingDirectorMessage>,
      },
      {
        path: "/about-the-chairman",
        element: <ProfileOfMdYounus></ProfileOfMdYounus>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/secondary-eye-hospital",
        element: <SecondaryHospitalList></SecondaryHospitalList>,
      },
      {
        path: "/social-business",
        element: <SocialBusiness></SocialBusiness>,
      },
      {
        path: "/testingPage",
        element: <TestingPage></TestingPage>,
      },
      {
        path: "/career",
        element: <JobPortal></JobPortal>,
      },
      {
        path: "/career/:id",
        element: <CareerDetails></CareerDetails>,
      },
      {
        path: "/career-details-form",
        element: <CareerDetailsForm></CareerDetailsForm>,
      },
      {
        path: "/contribute",
        element: <Contribute></Contribute>,
      },
      {
        path: "/partners-and-patrons",
        element: <PartnerAndPatrons></PartnerAndPatrons>,
      },
      {
        path: "/gallery",
        element: <PhotoAndVideoGallery></PhotoAndVideoGallery>,
      },
      {
        path: "/primary-eye-care-center",
        element: <PrimaryEyeCare></PrimaryEyeCare>,
      },
      {
        path: "/other-eye-services",
        element: <ServicesOfEye></ServicesOfEye>,
      },
      {
        path: "/sub-speciality",
        element: <Subspeciality></Subspeciality>,
      },
      {
        path: "/doctor-profile",
        element: <DoctorProfile></DoctorProfile>,
      },
      {
        path: "/surgery-package",
        element: <SurgeryPackage></SurgeryPackage>,
      },
      {
        path: "/surgery-package-budget",
        element: <SurgeryPackageBudget></SurgeryPackageBudget>,
      },
      {
        path: "/doctor-appointment/:id",
        element: <DoctorAppointment></DoctorAppointment>,
      },
      {
        path: "/doctor-appointment",
        element: <DoctorAppointment></DoctorAppointment>,
      },
      {
        path: "/sub-speciality",

        element: <Subspeciality></Subspeciality>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: "/news/:id",
        element: <SingleNews></SingleNews>,
      },
      {
        path: "/appointment",
        element: <HospitalAppointment></HospitalAppointment>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/brochures",
        element: <Brochures></Brochures>,
      },
      {
        path: "/presentation",
        element: <Presentation></Presentation>,
      },
      {
        path: "/training",
        element: <Training></Training>,
      },
      {
        path: "/eye-camp",
        element: <EyeCamp />,
      },
      {
        path: "/press-release",
        element: <PressRelase />,
      },
    ],
  },
]);

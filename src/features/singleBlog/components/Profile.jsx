import Typography from "../../../shared/components/Typography/Typography";
import profileImage from "../assets/profileImage.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
const Profile = () => {
    return (
        <div>
            <div className="flex items-end gap-4">
            {/* <img className="border w-[100px] h-[100px] border-black" src={profileImage} alt="" /> */}
            <BsPersonSquare className="text-[#0077B5] text-3xl size-24" />
            <IoLogoLinkedin className="text-[#0077B5] text-3xl" />
            </div>
            <Typography className="mt-3"  variant="h4">Tamás Hám-Szabó</Typography>
            <Typography className='font-medium ' variant="h5">Founder of SAAS First - the Best AI and Data-Driven Customer Engagement Tool</Typography>
            <Typography className="font-light mt-3" variant="h5">With 11 years in SaaS, Ive built MillionVerifier and SAAS First. Passionate about SaaS, data, and AI. Lets connect if you share the same drive for success!</Typography>
        </div>
    );
};

export default Profile;
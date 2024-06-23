import Typography from "../Typography/Typography";
import OfficeHeading from "./OfficeHeading";

const OfficeLocation = ({ name, address, phone, mobile, email }) => {
  return (
    <div>
      <Typography className="mt-2 font-body" variant="h5">
        {name}
      </Typography>

      <Typography className="mt-1">{address}</Typography>
      <Typography className="mt-1">
        <span>Phone: </span>
        {phone}
      </Typography>
      <Typography className="mt-1">
        {" "}
        <span>Mobile: </span>
        {mobile}
      </Typography>
      <Typography className="flex mt-1 gap-2">
        e-mail: <Typography color="text-[#08A316] "> {email}</Typography>
      </Typography>
    </div>
  );
};

export default OfficeLocation;

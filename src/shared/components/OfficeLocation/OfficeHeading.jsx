import Typography from "../Typography/Typography";

const OfficeHeading = ({title}) => {
  return (
    <div>
      <Typography
        className="font-semibold"
        color="text-[#015E09] border-b-2 border-black w-fit"
        variant="h3"
      >
        {title}
      </Typography>
    </div>
  );
};

export default OfficeHeading;

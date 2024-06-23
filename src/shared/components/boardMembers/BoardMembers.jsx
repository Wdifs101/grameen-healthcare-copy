import Typography from "../Typography/Typography";

const BoardMembers = ({ image, name, designation }) => {
  return (
    <div>
      <img className=" w-full h-72 object-fill" src={image} alt="" />
      <Typography className="mt-1 font-normal" variant="h3">
        {name}
      </Typography>
      <Typography className="mt-1" variant="p">
        {designation}
      </Typography>
    </div>
  );
};

export default BoardMembers;

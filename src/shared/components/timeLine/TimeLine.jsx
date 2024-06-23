import PropTypes from "prop-types";
import Typography from "../Typography/Typography";

const TimeLine = ({ children, className }) => {
  return (
    <Typography
      className={`flex items-center font-medium text-[#EDA713] gap-2 ${className}`}
      variant="body2"
    >
      {children}
      <span className="border-[2px] inline-block h-[0px] w-[60px] border-[#0CD21D]"></span>
    </Typography>
  );
};

TimeLine.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TimeLine;

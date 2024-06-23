import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
const HeadingLine = ({ variant, children, className }) => {
  return (
    <Typography
      className={`font-semibold px-2 md:px-0 ${className} flex items-end`}
      variant={variant}
    >
      {children}
      <div>
        <span className=" h-[2px] lg:w-[80px] inline-block md:w-[70px] sm:w-[62px] w-[55px] bg-[#0CD21D]"></span>
      </div>
    </Typography>
  );
};

HeadingLine.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
};

export default HeadingLine;

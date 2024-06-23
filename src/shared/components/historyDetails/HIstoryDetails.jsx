import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import cn from "../../utils/cn/Cn";
const HistoryDetails = ({ image, order, title, children, className }) => {
  const classes = cn(order == "right" ? "lg:order-1" : "", "col-span-1");

  return (
    <div
      className={`grid md:grid-cols-3 items-center grid-cols-1 lg:gap-8 gap-y-3 lg:mt-0 ${className}`}
    >
      <div className={`${classes}`}>
        <img
          className="md:h-64 h-60 rounded-md w-full object-cover"
          src={image}
          alt="history Details"
        />
      </div>
      <div className="col-span-2 ">
        <Typography className="font-semibold md:mt-3" variant="h3">
          {title}
        </Typography>
        <Typography className="md:mt-2 mt-1 text-justify" variant="p">
          {children}
        </Typography>
      </div>
    </div>
  );
};

HistoryDetails.propTypes = {
  order: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  image: PropTypes.any,
  className: PropTypes.any
};

export default HistoryDetails;

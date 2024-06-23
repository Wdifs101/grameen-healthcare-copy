import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
const GlobalBanner = ({ children, image }) => {
  return (
    <div className="relative  lg:h-[333px] md:h-[300px] h-[200px]">
      <img
        src={image}
        alt="Banner"
        className="object-cover w-full lg:h-[333px] md:h-[300px] h-[200px]"
      />
      <div className="absolute inset-0 bg-slate-700 opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Typography
          className="text-white font-heading font-semibold"
          variant="h2"
        >
          {children}
        </Typography>
      </div>
    </div>
  );
};

GlobalBanner.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
};

export default GlobalBanner;

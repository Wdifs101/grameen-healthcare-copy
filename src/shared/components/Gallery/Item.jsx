import cn from "../../utils/cn/Cn";
import PropTypes from "prop-types";

const Item = ({ date, text, imgSrc , className}) => {
  const classes = cn(
    "object-cover",
    className || ""
  );

    return (
        <div>
             <div className="relative group">
        <img src={imgSrc} alt="Banner" className={classes} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <div className="text-white">
            {date && (
              <div className="flex items-center mb-2">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 8v9a1 1 0 001 1h10a1 1 0 001-1V8H4zm11-2V4H5v2h10z" />
                </svg>
                {date}
              </div>
            )}
            <div className="text-sm">{text}</div>
          </div>
        </div>
      </div>
            
        </div>
    );
};


Item.propTypes = {
  date: PropTypes.string,
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Item;
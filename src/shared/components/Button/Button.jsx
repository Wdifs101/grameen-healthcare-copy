import cn from "../../utils/cn/Cn";
import PropTypes from "prop-types";
import donateLogo from "../../assets/buttonLogo/donateLogo.png";
import btnarrow from "../../assets/icon/arrow_icon.png";
const Button = ({ children, className, variant, onClick, ...rest }) => {
  const variantButton = {
    generalBtn:
      "lg:py-[5px] md:py-[4px] sm:py-[3px] py-[2px] bg-black lg:px-[20px] md:px-[17px] px-[14px]  rounded hover:bg-[#0CD21D] duration-300",
    applyBtn:
      "lg:py-[5px] md:py-[4px] py-[3px] bg-[#0077B5] lg:px-[30px] md:px-[25px] px-[20px] rounded-lg hover:bg-[#0CD21D] duration-300",
    bigBtn:
      "lg:py-[10px] md:py-[7px] py-[5px]   bg-black lg:px-[25px] md:px-[21px] px-[18px] rounded-lg hover:bg-[#0CD21D] duration-300",
    donateBtn:
      "bg-black lg:px-6 md:px-5 px-4 md:text-[15px] text-[14px]  flex items-center gap-2 lg:py-[7px] md:py-[6px] sm:py-[6px] py-[5px] hover:bg-[#0CD21D] duration-300",
    sendBtn:
      "bg-[#08A316] lg:px-[150px] md:px-[120px] sm:px-[100px] px-[80px] lg:py-[6px] md:py-[4px] sm:py-[3px] py-[2px]  rounded-2xl hover:bg-[#0CD21D] duration-300",
  };

  const classes = cn(
    variant ? variantButton[variant] : variantButton.generalBtn,
    "text-white"
  );

  return (
    <button className={`${classes} ${className}`} {...rest} onClick={onClick}>
      <p className="rounded-lg flex items-center"></p>

      {children}

      {variant == "donateBtn" && <img src={donateLogo} alt="" />}
      {/* {variant == "generalBtn" && <img src={donateLogo} alt="" />} */}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

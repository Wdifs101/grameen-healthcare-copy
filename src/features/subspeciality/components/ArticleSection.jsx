import Typography from "../../../shared/components/Typography/Typography";
import { Link } from "react-scroll";

const ArticleSection = () => {
  return (
    <div className="ml-5">
      <Typography className="font-semibold" variant="h4">
        In this article
      </Typography>
      <Typography
        variant="p"
        className=" mt-4 cursor-pointer border-l-[3px] border-[#08A316] px-4   "
        color="text-[#08A316]"
      >
        <Link
          activeClass="active"
          to="whatIs"
          spy={true}
          smooth={true}
          duration={500}
        >
          {" "}
          What is a Cataract?
        </Link>
      </Typography>
      <div className="space-y-3  mt-3 ml-4">
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="whatIs"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            What causes cataract?
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="whatAre"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            What are the symptoms of cataract?
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="howCan"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            How can the cataract be removed?
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="whatTechniques"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            What surgical techniques are available at LVPEI to remove the cataract?
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="whatLVPEI"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            What are the various lens options available at LVPEI?
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default ArticleSection;

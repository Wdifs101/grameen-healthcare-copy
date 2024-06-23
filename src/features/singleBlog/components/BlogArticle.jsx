
import { Link } from "react-scroll";
import Typography from "../../../shared/components/Typography/Typography";


const BlogArticle = () => {
    return (
        <div>
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
          to="details1"
          spy={true}
          smooth={true}
          duration={500}
        >
          {" "}
          Exploring Generative AI in Content Creation
        </Link>
      </Typography>
      <div className="space-y-3  mt-3 ml-4">
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="details2"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            Steering Clear of Common AI Writing Pitfalls
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="details3"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            Understanding ChatGPT Capabilities - Define Your Style
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="details4"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            Understand Your Readers
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="details5"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            Creating Quality AI-powered Blogs that Stand Out
          </Link>
        </Typography>
        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="details6"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
            Conclusion: Embracing AI in Blog Creation
          </Link>
        </Typography>

        <Typography className="cursor-pointer" variant="p">
          <Link
            activeClass="active"
            to="details7"
            spy={true}
            smooth={true}
           
            duration={500}
          >
            {" "}
           Afterword: The AI Behind This Article
          </Link>
        </Typography>
      </div>
    </div>
            
        </div>
    );
};

export default BlogArticle;
import { Icon } from "@iconify/react/dist/iconify.js";
import Typography from "../Typography/Typography";
import { Link } from "react-router-dom";

const BlogNewsLetter = ({ image, content, link }) => {
  return (
    <div>
      <img
        className="h-[224px]  w-full object-cover group-hover:scale-105 duration-300"
        src={image}
        alt="blogEvent"
      />
      <Typography className="mt-2">Jul 24, 2024</Typography>
      <Typography className="font-semibold mt-1 line-clamp-2 " variant="h6">
        The Change in the way we see science
      </Typography>
      <Typography className="mt-2 line-clamp-2" variant="p">
        {" "}
        {content + "..."}
      </Typography>
      <Link to={link}>
        <Typography
          variant="body1"
          className="flex font-medium  mt-2 items-center gap-1 group-hover:text-brand-primary"
        >
          <Icon icon={"iconoir:plus-circle"}></Icon>
          <span className="hover:translate-x-2 duration-300">
            {" "}
            Continue Reading
          </span>
        </Typography>
      </Link>
    </div>
  );
};

export default BlogNewsLetter;

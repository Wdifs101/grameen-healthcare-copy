import moreBlog from "../../assets/demoPic/moreNews.png";
import Typography from "../Typography/Typography";
const  MoreNews = () => {
  return (
    <div className="flex  gap-7 border-b-2 py-6">
      <div>
        <img className="object-cover w-[250px] h-full" src={moreBlog} alt="blogImage" />
      </div>
      <div>
        <Typography className="font-semibold" variant="h4">U.S. downs suspected Chinese spy balloon</Typography>
        <Typography variant='p' className="line-clamp-2">
          China called the vessel’s downing “an excessive reaction” and said it
          “retains the right to respond
        </Typography>
        <div className="flex items-center">
          <Typography variant="p">Craig Bator -</Typography>
          <Typography className="" color="text-[#B4B7C1]">27 Dec 2020</Typography>
        </div> 
      </div>
    </div>
  );
};

export default MoreNews;

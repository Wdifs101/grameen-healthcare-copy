import InsightsBlog from "../../../shared/components/InsightsBlog/InsightsBlog";
import Typography from "../../../shared/components/Typography/Typography";
import BlogsBanner from "../components/BlogsBanner";
const Blogs = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="bg-[#F6F6F6]   py-8">
      <div className="max-w-[1300px] px-3 mx-auto">
        <BlogsBanner></BlogsBanner>
        <div className="mt-8">
          <Typography variant={"h3"} className={"text-center pb-4"}>
            Insights & Ideas
          </Typography>
          <div className=" flex items-center justify-center gap-5 md:gap-10 mb-9">
            <span className=" w-16 md:w-36 h-[2px] bg-brand-primary"></span>
            <Typography variant={"h4"} className={"text-center"}>
              Our Blogs
            </Typography>
            <span className=" w-16  md:w-36 h-[2px] bg-brand-primary"></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {arra.map((item) => (
            <InsightsBlog
              link="/blogs/1"
              imgSrc="https://foreignpolicy.com/wp-content/uploads/2009/08/yunus_121.jpg?w=625?quality=90"
              label="blog"
              key={item}
            >
              {" "}
            </InsightsBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

{
  /* <Typography variant={"h3"} className={"text-center pb-4"}>
            Transforming Communities, Inspiring Hope
          </Typography>
          <div className=" flex items-center justify-center gap-5 md:gap-10 mb-9">
            <span className=" w-16 md:w-36 h-[2px] bg-brand-primary"></span>
            <Typography variant={"h4"} className={"text-center"}>
              Our Mission
            </Typography>
            <span className=" w-16  md:w-36 h-[2px] bg-brand-primary"></span>
          </div> */
}

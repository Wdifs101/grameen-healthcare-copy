import InsightsBlog from "../../../shared/components/InsightsBlog/InsightsBlog";
import Typography from "../../../shared/components/Typography/Typography";
import NewsBanner from "../components/NewsBanner";
import img from "../assets/news.png"


const News = () => {
    const arra=[1,2,3,4,5,6,7,8]
    return (
        <div className="bg-background-primary   py-8">
         <div className="max-w-[1300px] px-3 mx-auto">
        <NewsBanner></NewsBanner>
          <div className="mt-8">
            <Typography variant={"h3"} className={"text-center pb-4"}>
            Latest Headlines
          </Typography>
          <div className=" flex items-center justify-center gap-5 md:gap-10 mb-9">
            <span className=" w-16 md:w-36 h-[2px] bg-brand-primary"></span>
            <Typography variant={"h4"} className={"text-center"}>
              Our News
            </Typography>
            <span className=" w-16  md:w-36 h-[2px] bg-brand-primary"></span>
          </div>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {
                 arra.map(item=><InsightsBlog link="/news/1" imgSrc={img} label="news" key={item}> </InsightsBlog>)
            }
          </div>
         </div>
        </div>
    );
};

export default News;
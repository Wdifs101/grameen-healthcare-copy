import Typography from "../../../shared/components/Typography/Typography";


const ArticleDetails1 = ({children}) => {
    return (
        <div className="space-y-2">
              <Typography variant="h4">{children}</Typography>
                <Typography className="">
                I am pointing out that capitalist theory stipulated that almost all human beings will have to make living by working for someone else. They’ll be employees or workers. That’s their destiny. This assumption has led to massive problems of unemployment and dependence on capitalists. This suppressed the creative power of human beings. Each human being is packed with unlimited creative power. This is wasted by becoming a job-seeker..
                </Typography>
                <Typography>
                I am arguing that all human beings are entrepreneurs by birth. They cannot actually become so because we have created a job-oriented world. Institutions do not exist to support entrepreneurship.
                </Typography>
        </div>
    );
};

export default ArticleDetails1;
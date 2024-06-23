import Typography from "../Typography/Typography";

const QuotesOfProf = ({children}) => {
  return (
    <div className="bg-[#EBF5F0] py-6 px-9">
      <Typography variant="h5">
        {" "}
        {/* “ Every time I see a problem, it starts tickling me to create a social
        business to solve it. ” */}
        {children}
      </Typography>
      <Typography variant="h6">Prof. Muhammad Yunus</Typography>
      <Typography color="text-[#808080]" variant="h7">
        Chairman
      </Typography>
    </div>
  );
};

export default QuotesOfProf;

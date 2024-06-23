import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import Typography from "../../../shared/components/Typography/Typography";
import HistoryBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import picture from "../../surygeryPackage/assets/surgeryPackage.png";
import Table from "../components/Table";

const SurgeryPackageBudget = () => {
  return (
    <div className="bg-background-primary  ">
      <div className="max-w-7xl py-8 mx-auto space-y-4  md:space-y-8">
        <HistoryBanner image={picture}>Surgery Package</HistoryBanner>
        <div>
          <div className="p-2">
            <Typography className="mt-5 " variant="h3">
              Budget for cataract
            </Typography>
            <HeadingLine variant="h3"> surgery</HeadingLine>
          </div>
        </div>

        <Table></Table>
      </div>
    </div>
  );
};

export default SurgeryPackageBudget;

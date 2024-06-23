import React from "react";
import values from "./assets/values.jpg";
import GlobalBanner from "../../shared/components/GlobalBanner/GlobalBanner";
import HeadingLine from "../../shared/components/HeadingLine/HeadingLine";
import Typography from "../../shared/components/Typography/Typography";

const Values = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <HeadingLine variant={"h3"} className="font-heading my-5 md:my-9">
          Our Values
        </HeadingLine>
        <div className="space-y-3 px-3 flex flex-col items-start">
          <ul className="list-inside list-disc">
            <li className="text-lg font-medium">Commitment</li>
            <li className="text-lg font-medium">Integrity</li>
            <li className="text-lg font-medium">Team work</li>
            <li className="text-lg font-medium">Mutual Trust & Respect</li>
            <li className="text-lg font-medium">Innovation & Continuous Improvement</li>
          </ul>
          <div className="w-full h-[50rem]">
            <img src={values} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

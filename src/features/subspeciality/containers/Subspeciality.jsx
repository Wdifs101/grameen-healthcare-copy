

import ArticleSection from "../components/ArticleSection";
import HowCan from "../components/HowCan";
import SubspecialityBanner from "../components/SubspecialityBanner";
import WhatARe from "../components/WhatARe";
import WhatIs from "../components/WhatIs";
import WhatLVPEI from "../components/WhatLVPEI";
import WhatTechniques from "../components/WhatTechniques";

const Subspeciality = () => {
  return (
    <div className="max-w-[95%] py-8 mx-auto">
       <SubspecialityBanner></SubspecialityBanner>
       <div className="grid gap-6 md:grid-cols-4  mt-5 ">
             <div className="col-span-3 md:order-none order-1">
             <WhatIs></WhatIs>
             <WhatARe></WhatARe>
              <HowCan></HowCan>
               <WhatTechniques></WhatTechniques>

                <WhatLVPEI></WhatLVPEI>


             </div>
             <div className="col-span-1">
             <ArticleSection></ArticleSection>
             </div>
           
       </div>

      
    </div> 
  );
};

export default Subspeciality;

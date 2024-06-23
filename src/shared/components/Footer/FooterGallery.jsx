import React from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

const FooterGallery = () => {
  return (
    <div className="flex justify-center md:justify-end order-2 md:order-3">
      <div>
        <div className=" grid  grid-cols-2 gap-2">
          <div>
            <img src={img1} className=" w-24 h-24 object-cover" />
          </div>
          <div>
            <img src={img2} className=" w-24 h-24 object-cover" />
          </div>
          <div>
            <img src={img3} className=" w-24 h-24 object-cover" />
          </div>
          <div>
            <img src={img4} className=" w-24 h-24 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterGallery;

import a1a8 from "../../assets/forGallery/a1a8.png";
import a2 from "../../assets/forGallery/a2.png";
import a3a7 from "../../assets/forGallery/a3a7.png";
import a4 from "../../assets/forGallery/a4.png";
import a5a9 from "../../assets/forGallery/a5a9.png";
import a6 from "../../assets/forGallery/a6.png";
import Item from "./Item";
const Gallery = () => {
  return (
    <div className="grid grid-cols-1 py-5  md:grid-cols-2 lg:grid-cols-4 gap-2">
      {/* 1 */}
      <div className="col-span-2 ">
        <Item
          date="29-12-2023"
          text="Lorem ipsum dolor . A arcu et adipiscing mattis velit sit"
          imgSrc={a1a8}
          className="h-[255px] w-full"
        />
        <div className="flex gap-2 mt-2">
          <div className="flex-1 ">
            <Item
              date="29-12-2023"
              text="Lorem ipsum dolor sit amet consectetur. A arcu et adipiscing mattis velit sit"
              imgSrc={a3a7}
              className="h-[177px] w-full"
            />
          </div>
          <div className="flex-1">
            <Item
              date="29-12-2023"
              text="Lorem ipsum dolor sit amet consectetur. A arcu et adipiscing mattis velit sit"
              imgSrc={a5a9}
              className="h-[177px] w-full"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 relative gap-2 mt-2">
          <div className="h-fit">
            <Item
              date="29-12-2023"
              text="Lorem ipsum dolor sit amet consectetur. A arcu et adipiscing mattis velit sit"
              imgSrc={a4}
              className="h-[177px] w-full"
            />
          </div>
          <div className=" border border-red-700  ">
            <div className="  lg:absolute   w-full">
              <Item
                date="29-12-2023"
                text="Lorem ipsum dolor . A arcu et adipiscing mattis velit sit"
                imgSrc={a1a8}
                className="w-full h-[177px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="  lg:block lg:row-span-1">
        <Item
          date="29-12-2023"
          text="Lorem ipsum dolor . A arcu et adipiscing mattis velit sit"
          imgSrc={a2}
          className="lg:h-[442px] md:h-[350px] sm:h-[300px] h-[280px]  w-full"
        />
      </div>
      {/* 3 */}
      <div className="lg:space-y-3   w-full  lg:col-span-1 col-span-2 ">
        <div className="lg:space-y-3  gap-2 lg:gap-0  grid lg:grid-cols-1 grid-cols-2 ">
          <Item
            date="29-12-2023"
            text="Lorem ipsum dolor sit amet consectetur. A arcu et adi"
            imgSrc={a6}
            className="w-full  h-[177px] "
          />
          <Item
            date="29-12-2023"
            text="Lorem ipsum dolor . A arcu et adipiscing mattis velit sit"
            imgSrc={a5a9}
            className="w-full h-[177px] "
          />
        </div>
        <div className="mt-3 lg:mt-0 ">
          <Item
            date="29-12-2023"
            text="Lorem ipsum dolor . A arcu et adipiscing mattis velit sit"
            imgSrc={a3a7} // Replace with your image URL
            className="w-full h-[177px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

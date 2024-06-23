import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import InsightsBlog from "../../../shared/components/InsightsBlog/InsightsBlog";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import { Icon } from "@iconify/react";
import "keen-slider/keen-slider.min.css";

const RelatedArticle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 576px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
      "(min-width: 576px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div>
      <section className=" container mx-auto my-3 p-2 md:p-0">
        <div className=" flex items-center justify-between mb-10">
          <HeadingLine variant={"h3"}>Related Articles</HeadingLine>
          {loaded && instanceRef.current && (
            <div className=" flex items-center">
              <Icon
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
                className=" w-7 h-7 cursor-pointer"
                icon="iconamoon:arrow-left-2-thin"
              ></Icon>
              <Icon
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
                className=" w-7 h-7 cursor-pointer"
                icon="iconamoon:arrow-right-2-thin"
              ></Icon>
            </div>
          )}
        </div>
        <div className="navigation-wrapper mb-8">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <InsightsBlog
                link="/blogs/1"
                imgSrc="https://foreignpolicy.com/wp-content/uploads/2009/08/yunus_121.jpg?w=625?quality=90"
                label="blog"
              ></InsightsBlog>
            </div>
            <div className="keen-slider__slide">
              <InsightsBlog
                link="/blogs/1"
                imgSrc="https://foreignpolicy.com/wp-content/uploads/2009/08/yunus_121.jpg?w=625?quality=90"
                label="blog"
              ></InsightsBlog>
            </div>
            <div className="keen-slider__slide">
              <InsightsBlog
                link="/blogs/1"
                imgSrc="https://foreignpolicy.com/wp-content/uploads/2009/08/yunus_121.jpg?w=625?quality=90"
                label="blog"
              ></InsightsBlog>
            </div>
            <div className="keen-slider__slide">
              <InsightsBlog
                link="/blogs/1"
                imgSrc="https://foreignpolicy.com/wp-content/uploads/2009/08/yunus_121.jpg?w=625?quality=90"
                label="blog"
              ></InsightsBlog>
            </div>
            <div className="keen-slider__slide">
              <InsightsBlog
                link="/blogs/1"
                imgSrc="https://foreignpolicy.com/wp-content/uploads/2009/08/yunus_121.jpg?w=625?quality=90"
                label="blog"
              ></InsightsBlog>
            </div>
            <div className="keen-slider__slide">
              <InsightsBlog
                link="/blogs/1"
                imgSrc="https://foreignpolicy.com/wp-content/uploads/2009/08/yunus_121.jpg?w=625?quality=90"
                label="blog"
              ></InsightsBlog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedArticle;

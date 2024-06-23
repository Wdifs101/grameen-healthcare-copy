import AfterWord from "../components/AfterWord";
import ArticleDetails1 from "../components/ArticleDetails1";
import ArticleDetails2 from "../components/ArticleDetails2";
import BlogArticle from "../components/BlogArticle";
import Profile from "../components/Profile";
import RelatedArticle from "../components/RelatedArticle";
import SingleBlogBanner from "../components/SingleBlogBanner";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SingleBlog = () => {
  return (
    <div className="bg-background-primary py-8">
      <div className="max-w-[1330px] px-3 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-1  gap-7">
          <div className="col-span-3 rounded-xl overflow-hidden">
            <SingleBlogBanner></SingleBlogBanner>
          </div>

          <div className="col-span-1  lg:space-y-8 md:space-y-5 space-y-4 ">
            <Profile></Profile>
            <div
              className="p-4 rounded-md "
              style={{
                background: "linear-gradient(90deg, #08A316 0%, #08A316 100%)",
              }}
            >
              <span className="text-white">
                Like what you see? Share with a friend.
              </span>
              <div className="flex mt-2 space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4  mt-4">
          <div className="col-span-3   space-y-5 lg:order-none order-1">
            <div id="details1">
              {/* number 1 */}
              <ArticleDetails1>
              You shared a philosophy that “we are all entrepreneurs”, and we can change the world with one microloan at a time. How can entrepreneurship help reduce inequality, and generate wealth especially for those from least developed countries?
              </ArticleDetails1>
            </div>
            <div id="details2">
              {/* number2 */}
              <ArticleDetails2>
              Microcredits from your bank have often been given to women. What is the connection between poverty reduction and giving economic opportunities to women?
              </ArticleDetails2>
            </div>
            <div id="details3">
              {/* number 3 */}
              <ArticleDetails1>
              How can corporations worldwide support social business and help to reduce poverty?
              </ArticleDetails1>
            </div>
            <div id="details4">
              {/* number 4 */}
              <ArticleDetails2>Understand Your Readers</ArticleDetails2>
            </div>
            <div id="details5">
              {/* number 6 */}
              <ArticleDetails2>
                Understand Your ReaCreating Quality AI-powered Blogs that Stand
                Outders
              </ArticleDetails2>
            </div>
            <div id="details6">
              {/* number 6 */}
              <ArticleDetails1>
                Conclusion: Embracing AI in Blog Creation
              </ArticleDetails1>
            </div>
            <div className="details7">
              <AfterWord></AfterWord>
            </div>

            <div>
              <div
                className="p-4 rounded-md mt-6 flex justify-between items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #08A316 0%, #08A316 100%)",
                }}
              >
                <span className="text-white">
                  Like what you see? Share with a friend.
                </span>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
              <hr className="mt-9 bg-black h-[1px] border-0" />
            </div>
          </div>
          <div className="col-span-1 mt-4 ">
            <BlogArticle></BlogArticle>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] p-5 ml-0 lg:mx-auto ">
        <RelatedArticle></RelatedArticle>
      </div>
    </div>
  );
};

export default SingleBlog;

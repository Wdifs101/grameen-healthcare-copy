import React from "react";
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";
import PictureOfMdYounus from "../assets/ProfileOfMdYounus.png";
import MohammadYounus from "../assets/Muhammad_Younus.png";
import Articles from "../../../shared/components/articles/Articles";
import QuotesOfProf from "../../../shared/components/quotesOfProf/QuotesOfProf";
import Button from "../../../shared/components/Button/Button";
import Background from "../../background/containers/Background";
import OfficeHeading from "../../../shared/components/OfficeLocation/OfficeHeading";
import OfficeLocation from "../../../shared/components/OfficeLocation/OfficeLocation";

const ContactUs = () => {
  return (
    <section className="  bg-[#F8FAFF]">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image="https://static.vecteezy.com/system/resources/previews/008/559/114/non_2x/contact-us-button-contact-us-text-web-template-sign-icon-banner-vector.jpg"></GlobalBanner>
        <section className=" md:px-11">
          <Typography variant={"h3"} className={" py-10"}>
            We love to hear form you
          </Typography>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <OfficeHeading title="Central office"></OfficeHeading>
              <OfficeLocation
                name="Grameen Health Care Services Ltd."
                address="Grameen Telecom Bhaban (9th Floor)
53/1,Box Nagar,Mirpur Zoo Road,Dhaka-1216
Bangladesh"
                phone="+88 44802097,44802096,44802095"
                mobile="+8801712-599434,01916-271117"
                email="info@grameenhealthcareservices.org"
              ></OfficeLocation>
            </div>
            <div>
              <div className="max-w-xl mx-auto flex flex-col  gap-5 p-12 border -mt-80 relative z-50 shadow-md rounded-xl bg-secondary">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    className=" w-full py-3 px-5 border border-primary rounded-xl focus:border-brand-primary transition-all duration-500 outline-none"
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    className=" w-full py-3 px-5 border border-primary rounded-xl focus:border-brand-primary transition-all duration-500 outline-none"
                    type="text"
                    placeholder="Last Name*"
                  />
                </div>
                <input
                  className=" w-full py-3 px-5 border border-primary rounded-xl focus:border-brand-primary transition-all duration-500 outline-none"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className=" w-full py-3 px-5 border border-primary rounded-xl focus:border-brand-primary transition-all duration-500 outline-none"
                  type="phone"
                  placeholder="Phone Number*"
                />
                <textarea
                  className="w-full py-3 px-5 border border-primary rounded-xl focus:border-brand-primary transition-all duration-500 outline-none"
                  placeholder="Your Message"
                ></textarea>
                <Button variant={"sendBtn"}>Send Message</Button>
              </div>
            </div>
          </div>
          <div className=" my-5">
            <OfficeHeading title="Local offices"></OfficeHeading>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-7">
              <OfficeLocation name={"Grameen GC Eye Hospital-Bogura"} address={"Betgari, Bonani, Bogura"} phone={"+88-051-78898,78525"} mobile={"+8801713-493336,01777-792525"} email={"managerbogra@grameenhealthcareservices.org"}></OfficeLocation>
              <OfficeLocation name={"Grameen GC Eye Hospital-Barishal"} address={"Rupatoli, Barishal"} phone={"+88-0431-71740,71741"} mobile={"+8801708-496936,01713-493393"} email={" managerbarisal@grameenhealthcareservices.org"}></OfficeLocation>
              <OfficeLocation name={"Grameen Eye Hospital-Thakurgaon"} address={"Phanchagarh Road, Salondar, Thakurgaon"} phone={""} mobile={"+88-01730-782980,01878-883530,01730-782982"} email={"managerthakurgaon@gmail.com"}></OfficeLocation>
              <OfficeLocation name={"Grameen Eye Hospital,Satkhira"} address={"Kadamtala Bazar, Kashempur, Satkhira"} phone={""} mobile={"+88-01777-792524, 01819-105667"} email={"satkhiramanager@gmail.com"}></OfficeLocation>
            </div>
          </div>
          {/* <div className=" my-5">
            <OfficeHeading></OfficeHeading>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-7">
              <OfficeLocation></OfficeLocation>
              <OfficeLocation></OfficeLocation>
              <OfficeLocation></OfficeLocation>
              <OfficeLocation></OfficeLocation>
              <OfficeLocation></OfficeLocation>
              <OfficeLocation></OfficeLocation>
            </div>
          </div> */}
          {/* <div>
            <Typography variant={"h3"} className={" my-12"}>
              Our Location
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116811.28274226632!2d90.2072579433594!3d23.80605810000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e1609a4609%3A0xe976d75cb1f0633e!2sGrameen%20Health%20Care%20Services%20Ltd.!5e0!3m2!1sen!2sbd!4v1716717692548!5m2!1sen!2sbd"
              className=" w-full h-96"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </section>
      </div>
    </section>
  );
};

export default ContactUs;

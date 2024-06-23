import React from "react";
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import OfficeHeading from "../../../shared/components/OfficeLocation/OfficeHeading";
import OfficeLocation from "../../../shared/components/OfficeLocation/OfficeLocation";
import MasterCard from "../assets/MasterCard.png";
import VisaCard from "../assets/VisaCard.png";
import Button from "../../../shared/components/Button/Button";
import DonationBackground from "../assets/DonationBackground.png";

const Contribute = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={HistoryBannerImage}>Contribute</GlobalBanner>
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-24">
          <div>
            <HeadingLine variant={"h3"} className="mb-7">
              Join the Mission to Restore Vision with GHS Eye Surgery Support
              Fund
            </HeadingLine>
            <Typography variant={"p"}>
              Be a Beacon of Hope
              <br />
              <br />
              Grameen Health Care Services Ltd. (GHS) invites you to partake in
              the noble cause of restoring sight. Embrace the opportunity to be
              a philanthropist with the GHS Eye Surgery Support Fund (ESSF), a
              beacon of hope for those in darkness.
              <br />
              <br />
              Our Commitment to Affordable Eye Care
              <br />
              <br />
              GHS, a social business entity, is dedicated to providing quality
              eye care to the underprivileged at minimal costs. For just Taka
              3,000/-, our eye hospitals offer comprehensive surgery packages
              for the needy, encompassing: Preoperative and post-operative care
              Medications Overnight hospital accommodation Protective dark
              glasses Nutritious meals (5 servings)
              <br />
              <br />
              Your Contribution Makes a Difference
              <br />
              <br />
              Your generosity fuels our mission. Every donation to ESSF is a
              step towards a brighter future for someone in need.
              <br />
              <br />
              ESSF Principles: A Pledge to Transparency and Care
              <br />
              <br />
              Focused Aid: Funds are exclusively utilized for covering surgery
              expenses for the rural poor. Beyond Cataracts: The fund also
              supports other essential eye surgeries. Rigorous Selection:
              Patients are chosen through a stringent screening process.
              Acknowledgment or Anonymity: Donors are credited or kept anonymous
              per their preference. Informed Giving: Donors receive updates on
              the beneficiaries and financial oversight in line with ESSF
              policies.
            </Typography>
            <div className=" mt-5">
              <OfficeHeading></OfficeHeading>
              <OfficeLocation></OfficeLocation>
            </div>
          </div>

          <div>
            <div
              className="pt-20 px-12 border  rounded-2xl shadow-lg bg-secondary bg-no-repeat  bg-cover"
              style={{ backgroundImage: `url('${DonationBackground}')` }}
            >
              <Typography variant={"h3"} className={"font-semibold mb-8"}>
                Easy Contribution
              </Typography>
              <form>
                <div className=" flex flex-col gap-7">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className=" py-4 px-6 rounded-2xl border"
                  />
                  <input
                    type="text"
                    placeholder="Your Mobile Number"
                    className=" py-4 px-6 rounded-2xl border"
                  />
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className=" py-4 px-6 rounded-2xl border"
                  />
                  <input
                    type="text"
                    placeholder="Your Address"
                    className=" py-4 px-6 rounded-2xl border"
                  />
                  <input
                    type="text"
                    placeholder="Your Profession"
                    className=" py-4 px-6 rounded-2xl border"
                  />
                  <input
                    type="text"
                    placeholder="Amount You Want to Donate"
                    className=" py-4 px-6 rounded-2xl border"
                  />
                </div>
                <div className=" flex items-center justify-center gap-9 py-6">
                  <div className="flex">
                    <input type="radio" />
                    <span>Zakat*</span>
                  </div>
                  <div className="flex">
                    <input type="radio" />
                    <span>Volunteer*</span>
                  </div>
                  <div className="flex">
                    <input type="radio" />
                    <span>Other*</span>
                  </div>
                </div>
                <Typography variant={"h5"} className={"text-center"}>
                  Choose Your Payment option
                </Typography>
                <div className=" flex items-center justify-center gap-5 py-20">
                  <img className=" w-16 h-16 object-cover" src={MasterCard} />
                  <img className=" w-16 h-16 object-cover" src={VisaCard} />
                  <img className=" w-16 h-16 object-cover" src={MasterCard} />
                  <img className=" w-16 h-16 object-cover" src={VisaCard} />
                </div>
                <div className=" text-center pb-20">
                  <Button
                    variant={"donateBtn"}
                    className={"rounded-2xl mx-auto"}
                  >
                    Donate
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;

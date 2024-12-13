import Partners from "./partners.json";
import amazon from "./logo/amazon.png";
import statefarm from "./logo/statefarm.png";
import drivetime from "./logo/drivetime.png";
import deloitte from "./logo/deloitte.png";
import goldmansachs from "./logo/goldmansachs.png";
import garmin from "./logo/garmin.png";
import starbucks from "./logo/starbucks.png";
import paypal from "./logo/paypal.png";
import godaddy from "./logo/godaddy.png";
import axosoft from "./logo/axosoft.png";
import workiva from "./logo/workiva.png";
import generalmotors from "./logo/generalmotors.png";
import americanexpress from "./logo/americanexpress.png";

type PartnerLogo =
  | "amazon"
  | "statefarm"
  | "drivetime"
  | "deloitte"
  | "goldmansachs"
  | "garmin"
  | "starbucks"
  | "paypal"
  | "godaddy"
  | "americanexpress"
  | "axosoft"
  | "workiva"
  | "generalmotors";

function PartnersMarquee() {
  const logoMap: Record<PartnerLogo, string> = {
    amazon,
    statefarm,
    drivetime,
    deloitte,
    goldmansachs,
    garmin,
    starbucks,
    paypal,
    godaddy,
    americanexpress,
    axosoft,
    workiva,
    generalmotors,
  };

  return (
    <main id="Partners" className="mb-20">
      <h1 className="section-header-text">Our Partners</h1>
      <section className="Partner-container">
        <div className="marquee-effect-container">
          {Partners.map((element, index) => (
            <img
              key={index}
              src={logoMap[element.name as PartnerLogo]} // Casting element.name to PartnerLogo
              alt={element.name}
              className="w-[10vw] max-md:w-[18vw] object-contain"
            />
          ))}
          {Partners.map((element, index) => (
            <img
              key={index}
              src={logoMap[element.name as PartnerLogo]} // Casting element.name to PartnerLogo
              alt={element.name}
              className="w-[10vw] max-md:w-[18vw]  object-contain"
            />
          ))}
          {Partners.map((element, index) => (
            <img
              key={index}
              src={logoMap[element.name as PartnerLogo]} // Casting element.name to PartnerLogo
              alt={element.name}
              className="w-[10vw] max-md:w-[18vw] object-contain"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default PartnersMarquee;

import Services from "../services/Services";
import ServicesMain from "../services/ServiceMain";
import SecondMarquee from "../services/SecondMarquee";
import ThirdMurquee from "./ThirdMurquee";
import Expertise from "./Expertise";
import DigitalProducts from "./DigitalProducts";
import DigitalResuse from "./DigitalResuse";
import LastStep from "./LastStep";
import FAQsComponent from "./FAQs";

export default function Page() {
  return (
    <main>
      <Services />
      <ServicesMain />
      <SecondMarquee />
      <ThirdMurquee />
      <Expertise />
      <DigitalProducts />
      <DigitalResuse />
      <LastStep />
      <FAQsComponent />
    </main>
  );
}

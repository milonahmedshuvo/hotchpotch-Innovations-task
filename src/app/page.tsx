import AdsBanner from "@/components/AdsBanner";
import Content from "@/components/Content";
import CustomersPay from "@/components/CustomersPay";
import FooterBanner from "@/components/FooterBanner";
import Mixland from "@/components/Mixland";
import OurCustomers from "@/components/OurCustomers";
import PriceChat from "@/components/PriceChat";
import WritingCard from "@/components/WritingCard";
import WritingTools from "@/components/WritingTools";


export default function Home() {
  return (
    <div>
      <AdsBanner/>
      <CustomersPay/>
      <Content/>
      <WritingTools/>
      <WritingCard/>
      <Mixland/>
      <OurCustomers/>
      <PriceChat/>
      <FooterBanner/>
    </div>
  );
}

import AdsBanner from "@/components/AdsBanner";
import Content from "@/components/Content";
import CustomersPay from "@/components/CustomersPay";
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
    </div>
  );
}

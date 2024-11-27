import Affordable from "@/components/Affordable";
import Category from "@/components/Category";
import Faster from "@/components/Faster";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Partner from "@/components/Partner";
import Setup from "@/components/Setup";
import WebMigrate from "@/components/WebMigrate";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Join/>
      <Category/>
      <Partner/>
      <WebMigrate/>
      <Affordable/>
      <Setup/>
      <Faster/>
    </div>
  );
}

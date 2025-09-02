import HeroSection from "@/components/HeroSection";
import FAQAccordion from "@/components/FAQAccordion";
import ActivitiesSection from "@/components/ActivitiesSection";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FAQAccordion />
      <ImageSlider />
      <ActivitiesSection />
    </>
  );
}
import HeroSection from '@/components/sections/HeroSection';
import RoomGallerySection from '@/components/sections/RoomGallerySection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import JoinUsSection from '@/components/sections/JoinUsSection';
import ReasonsSection from '@/components/sections/ReasonsSection';
import EarningsExamplesSection from '@/components/sections/EarningsExamplesSection';
import LineApplyBanner from '@/components/banners/LineApplyBanner';
import IncomeStatisticsSection from '@/components/sections/IncomeStatisticsSection';
import UserVoicesSection from '@/components/sections/UserVoicesSection';
import ChoiceReasonsSection from '@/components/sections/ChoiceReasonsSection';
import BenefitComparisonSection from '@/components/sections/BenefitComparisonSection';
import StudioTourSection from '@/components/sections/StudioTourSection';
import FaqSection from '@/components/sections/FaqSection';
import ApplicationFlowSection from '@/components/sections/ApplicationFlowSection';
import WelcomeBonusBanner from '@/components/banners/WelcomeBonusBanner';
import SnsLinksBanner from '@/components/banners/SnsLinksBanner';
import FixedFooterBanner from '@/components/banners/FixedFooterBanner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-[120px]">
      <HeroSection />
      <RoomGallerySection />
      <PainPointsSection />
      <JoinUsSection />
      <div className="h-[10px]" />
      <ReasonsSection />
      <EarningsExamplesSection />
      <LineApplyBanner />
      <IncomeStatisticsSection />
      <UserVoicesSection />
      <ChoiceReasonsSection />
      <WelcomeBonusBanner />
      <BenefitComparisonSection />
      <StudioTourSection />
      <SnsLinksBanner />
      <FaqSection />
      <ApplicationFlowSection />
      <FixedFooterBanner />
    </div>
  );
}
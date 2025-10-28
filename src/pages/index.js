import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroSection from '@site/src/components/HeroSection';
import StatsSection from '@site/src/components/StatsSection';
import RoadmapPreview from '@site/src/components/RoadmapPreview';
import LivingOfferingModal from '@site/src/components/LivingOfferingModal';
import AgenticSearch from '@site/src/components/AgenticSearch';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Sacred Blockchain Ceremonies`}
      description="Ethereal Offering combines blockchain technology with sacred ceremonial practices for spiritual recovery, community building, and personal transformation.">
      <HeroSection />
      <LivingOfferingModal />
      <AgenticSearch />
      <StatsSection />
      <main>
        <HomepageFeatures />
        <RoadmapPreview />
      </main>
    </Layout>
  );
}

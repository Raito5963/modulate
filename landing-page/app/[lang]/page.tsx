import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import SpecsSection from '@/components/SpecsSection';
import TeamSection from '@/components/TeamSection';
import AdvisorsSection from '@/components/AdvisorsSection';
import PreOrderForm from '@/components/PreOrderForm';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/dictionaries';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <HeroSection dict={dict} />
      <ProblemSection dict={dict} />
      <SolutionSection dict={dict} />
      <FeaturesSection dict={dict} />
      <SpecsSection dict={dict} />
      <TeamSection dict={dict} />
      <AdvisorsSection dict={dict} />
      <PreOrderForm dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}

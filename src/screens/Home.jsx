import BlogSection from '../components/BlogSection';
import HeroSection from '../components/HeroSection';
import NewsLetterSection from '../components/NewsLetterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WelcomeSection from '../components/WelcomeSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <TestimonialsSection />
      <NewsLetterSection />
      <BlogSection />
    </>
  );
};

export default Home;

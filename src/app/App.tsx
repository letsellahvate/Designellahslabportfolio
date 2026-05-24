import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollDivider from './components/ScrollDivider';
import FeaturedProjects from './components/FeaturedProjects';
import Profile from './components/Profile';
import SkillsAndCharts from './components/SkillsAndCharts';
import Services from './components/Services';
import BlogPosts from './components/BlogPosts';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      <Navigation />
      <Hero />
      <ScrollDivider />
      <FeaturedProjects />
      <ScrollDivider />
      <Profile />
      <ScrollDivider />
      <SkillsAndCharts />
      <ScrollDivider />
      <Services />
      <ScrollDivider />
      <BlogPosts />
      <ScrollDivider />
      <Contact />
      <ChatAssistant />
    </div>
  );
}

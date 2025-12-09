import ProjectsSection from '@/components/sections/ProjectsSection';

export const metadata = {
     title: 'Projects | Kalp Chaniyara',
     description: 'Showcase of my recent projects and work.',
};

export default function ProjectsPage() {
     return (
          <div className="pt-20">
               <ProjectsSection />
          </div>
     );
}

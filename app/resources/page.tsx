import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Ubuntu Agent',
  description: 'Helpful resources and information for Ubuntu Agent customers.',
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Resources</h1>
        
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-lg opacity-80 mb-6">
            We're working on adding valuable resources to help you. 
            Please check back later for updates.
          </p>
        </div>
      </div>
    </main>
  );
} 
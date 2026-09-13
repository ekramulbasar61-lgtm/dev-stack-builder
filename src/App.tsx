import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import { Technology } from './types/technology';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnologyCard } from './components/TechnologyCard';
import { YourStack } from './components/YourStack';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  // Initialize selectedStack state from localStorage to persist cards across page reloads
  const [selectedStack, setSelectedStack] = useState<Technology[]>(() => {
    try {
      const savedStack = localStorage.getItem('dev_selected_stack');
      return savedStack ? JSON.parse(savedStack) : [];
    } catch (e) {
      console.error('Failed to load saved stack from localStorage:', e);
      return [];
    }
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Persist selected stack to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('dev_selected_stack', JSON.stringify(selectedStack));
    } catch (e) {
      console.error('Failed to save stack to localStorage:', e);
    }
  }, [selectedStack]);

  // Fetch technology data asynchronously using useEffect
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);
        const response = await fetch('/technologies.json');
        if (!response.ok) {
          throw new Error('Failed to load technology data');
        }
        const data: Technology[] = await response.json();
        
        // Artificial delay for loading state demo visibility
        setTimeout(() => {
          setTechnologies(data);
          setLoading(false);
        }, 600);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch technologies. Please check your connection.');
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  // Add technology to stack handler
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Remove individual item handler
  const handleRemoveFromStack = (id: string) => {
    const techToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    
    if (techToRemove) {
      toast.info(`Removed ${techToRemove.name} from stack`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Remove all items handler
  const handleClearStack = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('Cleared all items from your stack', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-sans antialiased">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Technologies Grid & Your Stack Section */}
        <section id="technologies" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore the <span className="text-gradient-brand">Technologies</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 font-normal">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Loading State Spinner */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <Loader2 className="w-10 h-10 text-pink-500 animate-spin mb-4" />
              <p className="text-slate-500 text-sm font-medium">Fetching technologies dataset...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16 bg-rose-50 text-rose-600 rounded-3xl border border-rose-100">
              <p className="font-semibold text-base">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Technology Cards Grid (8 Cols on Desktop) */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {technologies.map((tech) => {
                    const isAdded = selectedStack.some((item) => item.id === tech.id);
                    return (
                      <TechnologyCard
                        key={tech.id}
                        technology={tech}
                        isAdded={isAdded}
                        onAddToStack={handleAddToStack}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Your Stack Sidebar (4 Cols on Desktop - Sticky on Scroll) */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
                <YourStack
                  selectedStack={selectedStack}
                  onRemoveFromStack={handleRemoveFromStack}
                  onClearStack={handleClearStack}
                />
              </div>

            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default App;

import { useEffect, useState } from 'react';
// import siteData from '../components/sampleData';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import PageContent from '../components/PageContent';

export default function HomePage() {
  const router = useRouter();
  const siteData = [];
  
  // Check if siteData is empty or if it has no pages
  if (!siteData.length || !siteData[0].pages || !siteData[0].pages.length) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <p className='text-6xl' >+</p>
        <p>You don't have a site working, please add Homepage </p>
      </div>
    );
  }

  const site = siteData[0];

  // Get current page from route or default to 'Home'
  const currentPage = site.pages.find(page => page.pageName.toLowerCase() === (router.query.pageId || 'home').toLowerCase()) || site.pages[0];

  // State to manage color scheme
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Add event listener to update state if preference changes
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    // Cleanup event listener on component unmount
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen w-full overflow-x-hidden flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} scroll-smooth`}>
      {/* Header Component */}
      <Header siteTitle={site.siteTitle} pages={site.pages} ownerEmail={site.ownerEmail} />

      {/* Main Content */}
      <main className="flex mx-auto px-4 py-8 w-full h-full">
        <PageContent page={currentPage} />
      </main>
    </div>
  );
}

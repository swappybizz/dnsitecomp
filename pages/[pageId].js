import { useRouter } from 'next/router';
import Header from '../components/Header';
import PageContent from '../components/PageContent';

import siteData from '../components/sampleData';


const DynamicPage = () => {
  const router = useRouter();
  const { pageId } = router.query; // Get the dynamic route parameter
  const site = siteData[0];

  // Find the page matching the route parameter
  const currentPage = site.pages.find(page => page.pageName.replace(/\s+/g, '').toLowerCase() === (pageId || 'home').toLowerCase()) || site.pages[0];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Component */}
      <Header siteTitle={site.siteTitle} pages={site.pages} ownerEmail={site.ownerEmail} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <PageContent page={currentPage} />
      </main>
    </div>
  );
}

export default DynamicPage;

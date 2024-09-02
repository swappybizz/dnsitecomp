import siteData from '../components/sampleData'
// Component to render each widget based on type
const Widget = ({ widget }) => {
  switch (widget.widgetType) {
    case 'textWidget':
      return <p className="text-black">{widget.content}</p>;
    case 'imageWidget':
      return <img src={widget.content} alt="Widget Image" className="w-full h-auto" />;
    case 'inputWidget':
      return (
        <div className="flex flex-col">
          <label className="text-black mb-2">{widget.content.label}</label>
          <input
            type="text"
            placeholder={widget.content.placeholder}
            className="border border-gray-300 p-2"
          />
        </div>
      );
    default:
      return null;
  }
};

// Component to render a section with its rows and widgets
const Section = ({ section }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {section.sectionData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center items-center mb-8">
          {row.row.map((widget, widgetIndex) => (
            <div key={widgetIndex} className="m-4 p-4 border border-gray-200 rounded-lg max-w-sm">
              <Widget widget={widget} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Component to render each page with its sections
const Page = ({ page }) => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-bold my-8">{page.pageName}</h2>
      {page.sections.map((section, sectionIndex) => (
        <Section key={sectionIndex} section={section} />
      ))}
    </div>
  );
};

// Main Site Component that renders the entire site
const Site = ({ siteData }) => {
  const site = siteData[0]; // Assuming there's only one site in the data

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="w-full bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">{site.siteTitle}</div>
          <nav className="space-x-4">
            {site.pages.map((page, pageIndex) => (
              <a
                key={pageIndex}
                href={`#${page.pageName.replace(/\s+/g, '').toLowerCase()}`}
                className="text-black hover:underline"
              >
                {page.pageName}
              </a>
            ))}
          </nav>
          <div className="text-sm">
            <a href={`mailto:${site.ownerEmail}`} className="text-black hover:underline">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {site.pages.map((page, pageIndex) => (
          <div key={pageIndex} id={page.pageName.replace(/\s+/g, '').toLowerCase()}>
            <Page page={page} />
          </div>
        ))}
      </main>
    </div>
  );
};

// Example Usage
const ExampleSite = () => {
  

  return <Site siteData={siteData} />;
};

export default ExampleSite;

import Link from 'next/link';

const Header = ({ siteTitle, pages, ownerEmail }) => (
  <header className="w-full  py-4 border-b border-gray-200 ">
    <div className="container mx-auto flex justify-between items-center px-4">
      <Link
      href={'/'}
      className="text-2xl font-bold">{siteTitle}</Link>
      <nav className="space-x-4">
        {pages.map((page, pageIndex) => (
          <Link
            key={pageIndex}
            href={page.pageName.toLowerCase() === 'home' ? '/' : `/${page.pageName.replace(/\s+/g, '').toLowerCase()}`}
            className=" hover:underline"
          >
            {page.pageName}
          </Link>
        ))}
      </nav>
      <div className="text-sm">
        <a href={`mailto:${ownerEmail}`} className="border p-4">
          Contact
        </a>
      </div>
    </div>
  </header>
);

export default Header;

import React, { useEffect, useRef, useState } from 'react';

// Main TextWidget Component
const TextWidget = ({ title, subtitle, date, author, content }) => {
  const widgetRef = useRef(null);
  const [widgetSize, setWidgetSize] = useState({ width: 0, height: 0 });

  // Effect to measure the widget size using ResizeObserver
  useEffect(() => {
    const handleResize = () => {
      if (widgetRef.current) {
        const { width, height } = widgetRef.current.getBoundingClientRect();
        setWidgetSize({ width, height });
      }
    };

    // ResizeObserver to track size changes
    const resizeObserver = new ResizeObserver(handleResize);
    if (widgetRef.current) {
      resizeObserver.observe(widgetRef.current);
    }

    // Initial measurement
    handleResize();

    // Cleanup observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Determine the number of props provided
  const providedPropsCount = [title, subtitle, date, author, content].filter(Boolean).length;

  // Dynamic styles for different scenarios
  const getDynamicStyles = () => {
    switch (providedPropsCount) {
      case 1:
        if (title) {
          return { titleClass: "text-[10rem] font-black text-left mb-4 shadow-lg" };
        }
        if (subtitle) {
          return { subtitleClass: "text-[8rem] font-extrabold text-left mb-4 " };
        }
        if (date) {
          return { dateClass: "text-[5rem] italic text-left mb-4  underline" };
        }
        if (author) {
          return { authorClass: "text-[7rem] italic text-right mb-4  cursive" };
        }
        if (content) {
          return { contentClass: "text-xl font-base text-left mb-4" };
        }
        break;
      case 2:
        if (title && subtitle) {
          return { titleClass: "text-6xl font-bold mb-2", subtitleClass: "text-4xl font-semibold " };
        }
        if (title && date) {
          return { titleClass: "text-8xl font-bold mb-2", dateClass: "text-4xl italic  mt-2" };
        }
        if (title && author) {
          return { titleClass: "text-6xl font-bold mb-2", authorClass: "text-3xl italic ml-4 " };
        }
        if (title && content) {
          return { titleClass: "text-7xl font-extrabold mb-4", contentClass: "text-5xl font-medium" };
        }
        if (subtitle && date) {
          return { subtitleClass: "text-6xl font-bold mb-2", dateClass: "text-3xl italic " };
        }
        if (subtitle && author) {
          return { subtitleClass: "text-5xl font-semibold mb-2", authorClass: "text-3xl italic " };
        }
        if (subtitle && content) {
          return { subtitleClass: "text-5xl font-bold mb-2", contentClass: "text-4xl " };
        }
        if (date && author) {
          return { dateClass: "text-4xl italic ", authorClass: "text-3xl italic  mt-2" };
        }
        if (date && content) {
          return { dateClass: "text-3xl italic  mb-2", contentClass: "text-4xl" };
        }
        if (author && content) {
          return { authorClass: "text-3xl italic  mb-2", contentClass: "text-5xl" };
        }
        break;
      case 3:
        if (title && subtitle && date) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            subtitleClass: "text-4xl font-semibold ",
            dateClass: "text-3xl italic  mt-2"
          };
        }
        if (title && subtitle && author) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            subtitleClass: "text-4xl ",
            authorClass: "text-3xl italic  mt-2"
          };
        }
        if (title && subtitle && content) {
          return {
            titleClass: "text-6xl font-extrabold mb-4",
            subtitleClass: "text-4xl font-semibold ",
            contentClass: "text-3xl mt-2"
          };
        }
        if (title && date && author) {
          return {
            titleClass: "text-7xl font-bold mb-2",
            dateClass: "text-3xl italic ",
            authorClass: "text-3xl italic  ml-4"
          };
        }
        if (title && date && content) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            dateClass: "text-3xl italic  mb-2",
            contentClass: "text-4xl"
          };
        }
        if (title && author && content) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            authorClass: "text-3xl italic  ml-4",
            contentClass: "text-4xl mt-2"
          };
        }
        if (subtitle && date && author) {
          return {
            subtitleClass: "text-5xl font-bold mb-2",
            dateClass: "text-3xl italic ",
            authorClass: "text-3xl italic  ml-2"
          };
        }
        if (subtitle && date && content) {
          return {
            subtitleClass: "text-5xl font-bold mb-2",
            dateClass: "text-3xl italic  mb-2",
            contentClass: "text-4xl "
          };
        }
        if (subtitle && author && content) {
          return {
            subtitleClass: "text-5xl font-bold mb-2",
            authorClass: "text-3xl italic  mb-2",
            contentClass: "text-4xl"
          };
        }
        if (date && author && content) {
          return {
            dateClass: "text-4xl italic ",
            authorClass: "text-3xl italic  mt-2",
            contentClass: "text-4xl mt-2"
          };
        }
        break;
      case 4:
        if (title && subtitle && date && author) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            subtitleClass: "text-4xl  mb-2",
            dateClass: "text-3xl italic ",
            authorClass: "text-3xl italic  mt-2"
          };
        }
        if (title && subtitle && date && content) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            subtitleClass: "text-4xl  mb-2",
            dateClass: "text-3xl italic  mb-2",
            contentClass: "text-3xl"
          };
        }
        if (title && subtitle && author && content) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            subtitleClass: "text-4xl  mb-2",
            authorClass: "text-3xl italic ",
            contentClass: "text-3xl mt-2"
          };
        }
        if (title && date && author && content) {
          return {
            titleClass: "text-6xl font-bold mb-2",
            dateClass: "text-3xl italic ",
            authorClass: "text-3xl italic  ml-4",
            contentClass: "text-3xl mt-2"
          };
        }
        if (subtitle && date && author && content) {
          return {
            subtitleClass: "text-5xl font-bold mb-2",
            dateClass: "text-3xl italic ",
            authorClass: "text-3xl italic  ml-2",
            contentClass: "text-4xl mt-2"
          };
        }
        break;
      case 5:
        // All props provided
        return {
          titleClass: "text-6xl font-bold mb-2",
          subtitleClass: "text-4xl  mb-2",
          dateClass: "text-3xl italic ",
          authorClass: "text-3xl italic  mt-2",
          contentClass: "text-3xl mt-4"
        };
      default:
        return {};
    }
  };

  const dynamicStyles = getDynamicStyles();

  return (
    <div
      ref={widgetRef}
      className="p-4 sm:p-6 md:p-8 rounded-lg shadow-md h-full w-full overflow-y-auto bg-white dark:bg-black dark:text-white"
    >
      {title && <h1 className={dynamicStyles.titleClass}>{title}</h1>}
      {subtitle && <h2 className={dynamicStyles.subtitleClass}>{subtitle}</h2>}
      {(date || author) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-3">
          {date && <p className={dynamicStyles.dateClass}>{date}</p>}
          {author && <p className={dynamicStyles.authorClass}>By {author}</p>}
        </div>
      )}
      {content && <p className={dynamicStyles.contentClass}>{content}</p>}
    </div>
  );
};

export default TextWidget;

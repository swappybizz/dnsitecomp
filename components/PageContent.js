import TextWidget from './TextWidget';
import ImageWidget from './ImageWidget';
import InputWidget from './InputWidget';


  const Section = ({ section }) => {
    const numRows = section.sectionData.length;
    let rowHeight = '';
  
    switch (numRows) {
      case 1:
        rowHeight = 'h-[100%]';
        break;
      case 2:
        rowHeight = 'md:h-1/2';
        break;
      case 3:
        rowHeight = 'md:h-1/3';
        break;
      default:
        rowHeight = 'md:h-full';
        break;
    }
  
    return (
      <div className="w-full md:h-screen flex flex-col justify-center items-center border-b overflow-hidden">
        {section.sectionData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex md:flex-row flex-col justify-center items-center w-full ${rowHeight}`}
          >
            {row.row.map((widget, widgetIndex) => {
              // Determine the width of the widget based on the number of widgets in the row
              const numWidgetsInRow = row.row.length;
              let widgetWidth = 'w-full'; // default width for one widget
  
              if (numWidgetsInRow === 2) {
                widgetWidth = 'md:w-1/2';
              } else if (numWidgetsInRow === 3) {
                widgetWidth = 'md:w-1/3';
              } else if (numWidgetsInRow > 3) {
                widgetWidth = `md:w-1/${numWidgetsInRow}`; // dynamically assign width for more than 3 widgets
              }
  
              return (
                <div
                  key={widgetIndex}
                  className={`flex h-full ${widgetWidth} m-4 p-4`}
                >
                  <Widget widget={widget} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };
  

const Widget = ({ widget }) => {
  const { widgetType, title, subtitle, date, author, content, ...rest } = widget;

  switch (widgetType) {
    case 'textWidget':
      return (
        
          <TextWidget
            title={title}
            subtitle={subtitle}
            date={date}
            author={author}
            content={content}
          />
        
      );
    case 'imageWidget':
      return <ImageWidget {...rest} content={content} />;
    case 'inputWidget':
      return <InputWidget {...rest} content={content} />;
    default:
      return null;
  }
};

  const PageContent = ({ page }) => (
    <div className="w-full">
      {page.sections.map((section, sectionIndex) => (
        <Section key={sectionIndex} section={section} />
      ))}
    </div>
  );
  
  export default PageContent;
  
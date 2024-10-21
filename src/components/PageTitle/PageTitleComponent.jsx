import React from "react";
import useComponentStore from "../../store/useComponentStore";

const PageTitle = () => {
  const { pageTitleData } = useComponentStore()

  return (
    <div className={`relative pb-6 mb-10 h-max w-auto border border-black`}>
      <h1 
        className={`font-extrabold mb-0 ${pageTitleData.titleFontSize} text-${pageTitleData.titleAlign}`}
        style={{ color: pageTitleData.titleColor, fontFamily: pageTitleData.titleFontFamily }}
      >
        {pageTitleData.title}
      </h1>
      <h5 
        className={`font-extrabold uppercase ${pageTitleData.subtitleFontSize} text-${pageTitleData.subtitleAlign}`}
        style={{ color: pageTitleData.subtitleColor, fontFamily: pageTitleData.subtitleFontFamily }}
      >
        {pageTitleData.subtitle}
      </h5>
    </div>
  );
};

export default PageTitle;

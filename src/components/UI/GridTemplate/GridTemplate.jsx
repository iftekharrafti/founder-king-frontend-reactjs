import React from "react";

const GridTemplate = ({ columns = 2, gap = "4", children, className = "" }) => {
  const columnClass =
    {
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
      5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-6",
    }[columns] || "grid-cols-2 md:grid-cols-2";

  const gapClass =
    {
      2: "gap-10",
      3: "gap-8",
      4: "gap-6",
      5: "gap-4",
      6: "gap-4",
    }[columns] || `gap-${gap}`;

  return (
    <div className={`grid ${columnClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
};

export default GridTemplate;

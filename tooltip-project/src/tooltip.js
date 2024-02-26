import React, { useState } from "react";
import "./tooltip.css"; // Make sure to create a Tooltip.css file for styles

const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltiptext">{content}</div>}
    </div>
  );
};

export default Tooltip;

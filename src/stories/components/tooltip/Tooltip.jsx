import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Tooltip.module.scss";

export const Tooltip = ({
  children,
  body,
  title,
  variant,
  defaultIsOpen,
  placement,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(defaultIsOpen);

  const showTooltip = () => {
    setIsTooltipVisible(true);
  };

  const hideTooltip = () => {
    setIsTooltipVisible(false);
  };

  // Use useEffect to update the tooltip visibility when defaultIsOpen changes.
  useEffect(() => {
    setIsTooltipVisible(defaultIsOpen);
  }, [defaultIsOpen]);

  const tooltipClass = `${styles.tooltip} ${styles[variant]} ${styles[placement]}`;

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isTooltipVisible && (
        <div className={tooltipClass}>
          <div className={styles.tooltipContents}>
            {title && <div className={styles.tooltipTitle}>{title}</div>}
            <div className={styles.tooltipBody}>{body}</div>
          </div>
          <div className={`${styles.tooltipArrow} ${styles[variant]}`}></div>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["normal", "warning", "error"]),
  defaultIsOpen: PropTypes.bool,
  placement: PropTypes.oneOf([
    "top",
    "topStart",
    "topEnd",
    "bottom",
    "bottomStart",
    "bottomEnd",
    "leftStart",
    "left",
    "leftEnd",
    "rightStart",
    "right",
    "rightEnd",
  ]),
};

Tooltip.defaultProps = {
  title: "",
  variant: "normal",
  defaultIsOpen: false,
  placement: "top",
};

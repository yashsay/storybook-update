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
  alwaysOpen,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(
    alwaysOpen || defaultIsOpen
  );

  const showTooltip = () => {
    if (!alwaysOpen) {
      setIsTooltipVisible(true);
    }
  };

  const hideTooltip = () => {
    if (!alwaysOpen) {
      setIsTooltipVisible(false);
    }
  };

  // Use useEffect to update the tooltip visibility when defaultIsOpen or alwaysOpen changes.
  useEffect(() => {
    setIsTooltipVisible(alwaysOpen || defaultIsOpen);
  }, [defaultIsOpen, alwaysOpen]);

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
          {(placement === "bottom" || placement === "left" )&& (
            <div
              className={`${styles.tooltipArrow} ${styles[variant]} ${styles[placement]}`}
            ></div>
          )}
          <div className={styles.tooltipContents}>
            {title && <div className={styles.tooltipTitle}>{title}</div>}
            <div className={styles.tooltipBody}>{body}</div>
          </div>
          {(placement === "top" || placement === "right") && (
            <div
              className={`${styles.tooltipArrow} ${styles[variant]} ${styles[placement]}`}
            ></div>
          )}
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
  alwaysOpen: PropTypes.bool, // Update the PropTypes to expect a boolean value for alwaysOpen.
};

Tooltip.defaultProps = {
  title: "",
  variant: "normal",
  defaultIsOpen: false,
  placement: "top",
  alwaysOpen: false,
};

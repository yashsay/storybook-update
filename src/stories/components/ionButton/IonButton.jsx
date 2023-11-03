import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../icon/Icon";
import styles from "./ionButton.module.scss";

/**
 * Button Component for UI interaction.
 */
export const IonButton = ({
  label,
  variant,
  size,
  disabled,
  icon,
  iconPosition,
  iconButton,
  textButton,
  textButtonUnderlined,
  children,
  ...props
}) => {
  const iconSizeValue = () => {
    let height, width;

    switch (size) {
      case "lg":
        height = 16;
        width = 16;
        break;
      case "md":
        height = 14;
        width = 14;
        break;
      case "sm":
        height = 12;
        width = 12;
        break;
      case "xs":
        height = 10;
        width = 10;
        break;
      default:
        height = 14;
        width = 14;
        break;
    }

    return { height, width };
  };

  const iconFillValue = () => {
    switch (variant) {
      case "primary":
        return "#FFFFFF";
      case "secondary":
        return "#007CC1";
      case "tertiary":
        return "#007CC1";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={
        textButton
          ? `${styles.textButtonBaseStyles} ${
              textButtonUnderlined && styles.textButtonUnderlined
            }`
          : `${styles.baseStyles} ${styles[variant]} ${
              iconButton ? styles[`${size}IconButton`] : styles[size]
            }`
      }
      {...props}
    >
      {!iconButton && icon && iconPosition === "left" && (
        <div className={styles.icon}>
          <Icon
            src={icon}
            size="custom"
            {...iconSizeValue()}
            fill={iconFillValue()}
          />
        </div>
      )}
      {iconButton ? (
        <div className={styles.icon}>
          <Icon
            src={icon}
            size="custom"
            {...iconSizeValue()}
            fill={iconFillValue()}
          />
        </div>
      ) : (
        children || label
      )}
      {!iconButton && icon && iconPosition === "right" && (
        <div className={styles.icon}>
          <Icon
            src={icon}
            size="custom"
            {...iconSizeValue()}
            fill={iconFillValue()}
          />
        </div>
      )}
    </button>
  );
};

IonButton.propTypes = {
  /**
   * Contents of Button.
   */
  label: PropTypes.string,
  /**
   * Variation of the Button.
   * Can be one of the following:
   */
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * Size of Button.
   * Can be one of the following:
   */
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  /**
   * Active State of Button. Accepts Boolean value.
   */
  disabled: PropTypes.bool,
  /**
   * Icon to display on button. Any SVG element/component can be passed as an icon.
   */
  icon: PropTypes.string,
  /**
   * Position of Icon.
   */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /**
   * If only Icon is to be displayed then "iconButton" Parameter should be set to true else false.
   */
  iconButton: PropTypes.bool,
  /**
   * If only Text as a link is to be displayed then "textButton" Parameter should be set to true else false.
   */
  textButton: PropTypes.bool,
  /**
   * If Text Button should have a underline, "textButtonUnderlined" Parameter should be set to true else false.
   */
  textButtonUnderlined: PropTypes.bool,
  /**
   * Children can be used to provide custom content.
   */
  children: PropTypes.node,
};

IonButton.defaultProps = {
  label: "",
  variant: "primary",
  size: "sm",
  disabled: false,
  icon: null,
  iconPosition: "left",
  iconButton: false,
  textButton: false,
  textButtonUnderlined: false,
};

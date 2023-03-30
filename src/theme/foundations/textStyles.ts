/* eslint-disable import/no-unused-modules */
export const textStyles = {
  h1: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: ["28px", "40px"],
    lineHeight: ["36px", "48px"],
    letterSpacing: "-0.02em",
  },
  h2: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: ["24px", "36px"],
    lineHeight: ["32px", "44px"],
    letterSpacing: "-0.02em",
  },
  h3: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: ["20px", "32px"],
    lineHeight: ["28px", "40px"],
    letterSpacing: "-0.02em",
  },
  h4: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: ["16px", "28px"],
    lineHeight: ["24px", "36px"],
    letterSpacing: "-0.02em",
  },
  h5: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: ["14px", "24px"],
    lineHeight: ["20px", "32px"],
    letterSpacing: "-0.02em",
  },
  h6: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: ["14px", "20px"],
    lineHeight: ["20px", "28px"],
    letterSpacing: "-0.02em",
  },
  label: {
    fontSize: "sm",
    fontFamily: "DM Sans",
    fontWeight: "semibold",
    lineHeight: "1.3125em",
  },
  code: {
    fontSize: "xs",
    fontWeight: "medium",
    lineHeight: "1.125rem",
  },
  lg: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: ["16px", "18px"],
    lineHeight: ["26px", "28px"],
    letterSpacing: "-0.02em",
  },
  md: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
  },
  sm: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
  },
  xs: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "20px",
  },
  xxs: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "18px",
  },
  overline: {
    lg: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    sm: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
  },

  // TODO(@nicolas): body.*.* will be removed. Please, use `lg`, `md`, ..., `xss` text styles
  body: {
    regular: {
      sm: {
        fontSize: "xs",
        fontWeight: "normal",
        lineHeight: "1.125rem",
        fontFamily: "DM Sans",
      },
      md: {
        fontSize: "sm",
        fontWeight: "normal",
        lineHeight: "1.313rem",
        fontFamily: "DM Sans",
        color: "gray.600",
      },
      lg: {
        fontSize: "md",
        fontWeight: "normal",
        lineHeight: "base",
        fontFamily: "DM Sans",
      },
      xl: {
        fontSize: "lg",
        fontWeight: "normal",
        lineHeight: "base",
        fontFamily: "DM Sans",
      },
    },
    bold: {
      sm: {
        fontSize: "xs",
        fontWeight: "semibold",
        lineHeight: "1.125rem",
        fontFamily: "DM Sans",
        color: "gray.600",
      },
      md: {
        fontSize: "sm",
        fontWeight: "semibold",
        lineHeight: "1.313rem",
        fontFamily: "DM Sans",
        color: "gray.600",
      },
      lg: {
        fontSize: "md",
        fontWeight: "semibold",
        lineHeight: "base",
        fontFamily: "DM Sans",
        color: "gray.600",
      },
      xl: {
        fontSize: "lg",
        fontWeight: "semibold",
        lineHeight: "base",
        color: "gray.600",
        fontFamily: "DM Sans",
      },
    },
  },
  category: {
    sm: {
      fontSize: "xs",
      fontFamily: "DM Sans",
      fontWeight: "bold",
      lineHeight: "0.5625em",
      letterSpacing: "wider",
      textTransform: "uppercase",
    },
    md: {
      fontSize: "sm",
      fontFamily: "DM Sans",
      fontWeight: "bold",
      lineHeight: "0.6875em",
      letterSpacing: "wider",
      textTransform: "uppercase",
    },
    lg: {
      fontSize: "md",
      fontFamily: "DM Sans",
      fontWeight: "bold",
      lineHeight: "0.75em",
      letterSpacing: "wider",
      textTransform: "uppercase",
    },
  },
}

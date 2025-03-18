import { color, lineHeight } from "@mui/system";

const typography = {
  h1: {
    fontSize: "83px",
    fontWeight: 700,
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:425px)": {
      fontSize: "32px ",
    },
    "@media(max-width:767px)": {
      fontSize: "46px ",
    },
    "@media(max-width:1024px)": {
      fontSize: "36px ",
    },
  },
  h2: {
    fontSize: "38px",
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:425px)": {
      fontSize: "30px ",
    },
    "@media(max-width:767px)": {
      fontSize: "34px ",
    },
    "@media(max-width:1024px)": {
      fontSize: "34px ",
    },
  },

  h3: {
    fontSize: "34px",
    fontWeight: 600,
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "28px ",
    },
    "@media(max-width:425px)": {
      fontSize: "22px ",
    },
  },
  h4: {
    fontSize: "28px !important",
    fontWeight: 700,
    color: "rgba(0, 0, 0, 1)",
    // lineHeight: "30.62px",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "22px ",
    },
  },

  h5: {
    fontSize: "22px",
    fontWeight: 600,
    // lineHeight: "31.25px",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "20px ",
    },
  },

  // 36px font
  h6: {
    fontSize: "16px", // 36px / 16px
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "14px ",
      // fontWeight: 400,
    },
  },
  h7: {
    fontSize: "13px", //55.11px
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    lineHeight: "28.85px",
    "@media(max-width:767px)": {
      fontSize: "11px ",
      // fontWeight: 400,
    },
  },
  subtitle1: {
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "18px ",
      // fontWeight: 400,
    },
  },

  subtitle2: {
    fontSize: "22px",
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "20px ",
      // fontWeight: 400,
    },
  },
  body1: {
    fontSize: "19px",
    fontWeight: 550,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "17px ",
      fontWeight: 600,
    },
  },

  body2: {
    fontSize: "18px",
    fontWeight: 550,
    color: "#000000",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "16px ",
      fontWeight: 550,
    },
  },

  h8: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "19.36px",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "12px ",
      // fontWeight: 400,
    },
  },
  // 24px  font
  caption: {
    fontSize: "12px", // 24px / 16px
    fontWeight: 450,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "10px ",
      // fontWeight: 400,
    },
  },
  caption2: {
    fontSize: "13.31px", // 24px / 16px
    fontWeight: 400,
    lineHeight: "18.53px",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "11px ",
      // fontWeight: 400,
    },
  },

  // 16px font
  button: {
    fontSize: "1rem",
    fontWeight: 400,
    textTransform: "none",
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:767px)": {
      fontSize: "1rem ",
      // fontWeight: 400,
    },
  },
  overlines: {
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    "@media (max-width:1399px)": { fontSize: ".7rem" },
    "@media (max-width:899px)": { fontSize: ".7rem" },
    "@media (max-width:599px)": { fontSize: ".875rem" },
  },

  // 20 px fonts
  overline: {
    fontSize: "1.125rem", // 14px / 16px
    fontWeight: 300,
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.5,
    "@media (max-width:899px)": { fontSize: "1rem" }, // 10px / 16px
    "@media (max-width:599px)": { fontSize: "0.875rem" }, // 8px / 16px
    "@media (max-width:599px)": { fontSize: "0.775rem" }, // 8px / 16px
  },
  overline1: {
    fontSize: "1.5rem", // 24px
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.875rem" }, // 14px / 16px
  },
  overline2: {
    fontSize: "1.25rem", //20px
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.75rem" },
  },
  overline3: {
    fontSize: "1.25rem",
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.85rem" },
  },
  overline4: {
    fontSize: "1.25rem", //20px
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.85rem" },
  },
  tableCell: {
    fontSize: "1.0rem",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 14px / 16px
    "@media (max-width:899px)": { fontSize: "0.8rem" }, // 12px / 16px
    "@media (max-width:599px)": { fontSize: "0.8rem" }, // 10px / 16px
  },
};

export default typography;

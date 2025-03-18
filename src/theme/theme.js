// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "@mui/material";
import _ from "lodash";
import typography from "./typography";
import {
  border,
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
} from "@mui/system";

const baseOptions = {
  direction: "ltr",
  typography,

  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#175CD3",
          color: "black",
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        icon: {
          color: "#faaf00",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          "@media(min-width:1300px)": {
            maxWidth: "1400px",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: { backgroundColor: "#00000080" },
        rounded: { backgroundColor: "#fff", borderRadius: "50%" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "pre !important",
        },
      },
    },
    // MuiSlider: {
    //   styleOverrides: {
    //     rail: {
    //       width: "80%", // Set rail width to 80%
    //     },
    //     markLabel: {
    //       marginLeft: "-14px", // Adjust mark label position
    //     },
    //   },
    // },
    MuiSlider: {
      styleOverrides: {
        root: {
          width: "98%", // Slider occupies 85% of its parent container
          "@media (max-width:600px)": {
            width: "95%", // Full width on small screens
          },
        },
        rail: {
          width: "100%", // Rail spans 95% of the slider's width
          backgroundColor: "hsla(240,7%,62%,1)", // Custom rail color
          margin: "0 auto", // Center the rail within the slider
        },
        track: {
          width: "95%", // Track matches the rail width
          margin: "0 auto", // Center the track within the slider
        },
        thumb: {
          // Custom thumb styles if needed
        },
      },
    },

    MuiInputAdornment: {
      positionStart: {
        paddingLeft: "14px",
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "rgba(31, 152, 116, 1) ",
          // borderRadius: "1.1px",

          // backgroundColor: "rgba(240, 255, 250, 1)",
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          borderRadius: "16px", // Remove border radius
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: "#000",
          "&:hover": {
            backgroundColor: "#1F9874",
            color: "#ffffff",
          },
          "&.Mui-selected": {
            backgroundColor: "#1F9874",
            color: "#ffffff",
          },
          "&.Mui-disabled": {
            color: "#BDBDBD",
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontSize: "13px",
        },
        paper: {
          fontSize: "13px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          textTransform: "none",
          // fontSize: theme.typography.button.fontSize, // Using theme for typography
          fontSize: "13px",
          fontWeight: theme.typography.button.fontWeight,
          [theme.breakpoints.down("xl")]: {
            fontSize: "13px",
          },
          [theme.breakpoints.down("lg")]: {
            fontSize: "13px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "13px",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
          },
        }),
        contained: ({ theme }) => ({
          backgroundColor: "#fff",
          color: "rgba(0, 0, 0, 1)",
          borderRadius: "8px",
          padding: "8px 20px",
          fontSize: "15.5px",
          fontWeight: "500",
          // border: "1px solid rgba(31, 152, 116, 1)",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#fff",
            border: "1px ",
          },
          boxShadow: "none",
          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
            backgroundColor: "#F63D68",
            color: "#fff",
            border: "1px solid #D0D0D0",
          },
        }),
        containedEdit: ({ theme }) => ({
          backgroundColor: "#0A2262",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "8px 20px",
          border: "1px solid #0A2262",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#0A2262",
            border: "1px solid #0A2262",
          },
          boxShadow: "none",
          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
            backgroundColor: "#F63D68",
            color: "#fff",
            border: "1px solid #D0D0D0",
          },
        }),
        outlined: ({ theme }) => ({
          color: "#26272B",
          border: "1px solid #D1D1D6",
          padding: "8px 20px",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#F63D68",
            border: "1px solid #F63D68",
          },
          boxShadow: "none",
        }),
        text: ({ theme }) => ({
          fontSize: theme.typography.button.fontSize,
        }),
        white: {
          backgroundColor: "white",
          color: "#1849A9",
          padding: "10px 30px",
          borderRadius: "8px",
          border: "1px solid white",
          "&:hover": {
            backgroundColor: "#F63D68",
            color: "white",
            border: "1px solid white",
          },
          boxShadow: "none",
        },
      },

      variants: [
        {
          props: { variant: "customContained" },
          style: {
            backgroundColor: "#EAECF0",
            color: "#667085",
            padding: "10px 30px",
            borderRadius: "8px",
            border: "1px solid #EAECF0",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: "#667085",
              border: "1px solid #EAECF0",
            },
            boxShadow: "none",
          },
        },
        {
          props: { variant: "customOutlined" },
          style: {
            padding: "8px 20px",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "#2E90FA",
              color: "#2E90FA",
            },
          },
        },
      ],
    },

    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableHead-root": {
            "& .MuiTableCell-head": {
              fontSize: typography.button.fontSize,
              fontWeight: typography.button.fontWeight,
              color: "#FFFFFF",
            },
          },
          "& .MuiTableBody-root": {
            "& .MuiTableCell-root": {
              fontSize: typography.tableCell.fontSize,
              fontWeight: typography.tableCell.fontWeight,
              color: "#131316",
              borderColor: "#E4E4E7",
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTab-root": {
            flex: 1,
            textAlign: "center",
            borderRadius: "8px",
            "&.Mui-selected": {
              backgroundColor: "#26272B",
              color: "#fff",
            },
            "&:not(.Mui-selected)": {
              color: "#666",
            },
          },
          ".MuiTabs-indicator": {
            display: "none",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          textTransform: "none",
          "&.Mui-selected": {
            color: "#3f51b5",
            fontWeight: 400,
            // fontSize: typography.body5.fontSize,
          },
          "&:not(.Mui-selected)": {
            fontWeight: 400,
            // fontSize: typography.body5.fontSize,
          },
          "&:hover": {
            color: "#3f51b5", // Change the color on hover
            opacity: 1,
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "rgba(102, 102, 102, 1)",
          padding: "4px",
        },
        colorSecondary: {
          backgroundColor: "transparent",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#26252E",
          borderRadius: "8px !important",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#0C111D",
          fontSize: "14px",
          fontFamily: "Outfit , Lexend, sans-serif",
          fontWeight: "400",
        },
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "0px",
          borderRadius: "8px",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          padding: "0",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "32px",
          padding: "32px",
          backgroundColor: "#ffffff !important",
          "@media(max-width:767px)": {
            padding: "20px",
            margin: "10px",
          },
        },
        paperWidthSm: {
          maxWidth: "550px !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontFamily: "Outfit , Lexend, sans-serif",
          border: "1px solid rgba(210, 210, 210, 1)",
          pointerEvents: "auto",
          backgroundColor: "#ffffff",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent !important",
          },
        },
        notchedOutline: { borderColor: "transparent" },
        input: {
          fontWeight: "400",
          color: "#0c111d",
          fontSize: "13px",
          padding: "15.5px 14px",
          // lineHeight: "20px",
          lineHeight: "28.85px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "#000",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#182230",
          },
          "&:-internal-autofill-selected": {
            color: "#182230",
          },
        },
      },
    },
    // MuiOutlinedInput: {
    //   root: {
    //     // background: "#F7F7F7",
    //     borderRadius: "15px",
    //     height: "48px",
    //   },
    //   multiline: {
    //     height: "auto",
    //   },
    //   notchedOutline: {
    //     borderColor: "rgba(0, 0, 0, 0.08)",
    //   },
    //   colorSecondary: {
    //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //       color: "#701748",
    //       borderColor: "#701748",
    //     },
    //     "&.Mui-focused": {
    //       color: "#701748",
    //     },
    //   },
    //   input: {
    //     "&::placeholder": {
    //       color: "#98A2B3",
    //       opacity: 1,
    //     },
    //   },
    // },

    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundColor: "rgba(255, 255, 255, 0.04)",
          boxShadow: "none",
          backgroundImage: "none",

          "&.MuiAccordion-root": {
            backgroundColor: "#F9FAFB",
            borderRadius: "10px",
            padding: "0",
          },
        },

        elevation1: {
          backgroundColor: "#fff",
          boxShadow: "0px 4px 44px 0px rgba(0,0,0,0.14)",
          borderRadius: "24px",
          padding: "20px",
          "@media(max-width:767px)": {
            padding: "15px",
          },
        },
        elevation2: {
          backgroundColor: "#fff",
          boxShadow: "none",
          borderRadius: "12px",
          padding: "16px",
          "@media(max-width:767px)": {
            padding: "20px",
          },
        },
        elevation3: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "8px",
          padding: "14px 12px",
        },
        elevation4: {
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "24px",
          "@media(max-width:500px)": {
            padding: "10px",
          },
        },
        elevation5: {
          backgroundColor: "rgba(122, 90, 248, 1)",
          borderRadius: "12px",
          padding: "16px",
          "@media(max-width: 767px)": {
            padding: "20px",
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          top: "15px",
          position: "relative",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fontSize: "35px",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          marginLeft: "16px",
        },
        line: {
          minHeight: "40px",
        },
      },
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          marginLeft: "16px",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          padding: "0px 0px",
        },
        label: {
          fontSize: "16px",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#475467",
        },
      },
    },
    // Customize calendar components
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit , Lexend, sans-serif",
          fontSize: "12px !important", // Font size for the day numbers
          color: "#00000099", // Font color for the day numbers
          "&.Mui-selected": {
            fontWeight: 600, // Increase font weight for the selected year
            color: "#fff", // Color for selected year
            backgroundColor: "rgba(31, 152, 116, 1) !important",
          },
        },
        dayOutsideMonth: {
          color: "#E0E0E0", // Color for days outside the current month
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontFamily: "Outfit , Lexend, sans-serif", // Font family for month and year label
          fontSize: "12px !important", // Font size for the label
          fontWeight: 500,
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        weekDayLabel: {
          fontFamily: "Outfit , Lexend, sans-serif", // Font family for weekday labels
          fontSize: "12px !important", // Font size for weekday labels
          color: "#9E9E9E", // Font color for weekday labels
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontFamily: "Outfit , Lexend, sans-serif", // Font family for month and year label
          fontSize: "16px !important", // Font size for the label
          fontWeight: 500,
          color: "rgba(31, 152, 116, 1)", // Custom font color
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit , Lexend, sans-serif", // Apply font family to the year numbers
          fontSize: "16px !important", // Font size for year numbers
          color: "rgb(21, 112, 239)", // Custom font color for the year
          "&.Mui-selected": {
            fontWeight: 600, // Increase font weight for the selected year
            color: "rgba(31, 152, 116, 1)", // Color for selected year
          },
        },
        yearButton: {
          fontFamily: "Outfit , Lexend, sans-serif", // Apply font family to year buttons
          fontSize: "16px !important", // Font size for year buttons
          color: "#000", // Custom font color for the year
          "&.Mui-selected": {
            fontWeight: 500, // Increase font weight for the selected year
            color: "#fff",
            backgroundColor: "rgba(31, 152, 116, 1) !important",
          },
          "&.Mui-disabled": {
            color: "#E0E0E0", // Color for disabled year
          },
        },
      },
    },
    // MuiDateCalendar: {
    //   styleOverrides: {
    //     root: {
    //       // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Adds shadow
    //       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    //       borderRadius: "10px", // Optional: for rounded corners
    //     },
    //   },
    // },

    MuiSelect: {
      styleOverrides: {
        select: {
          //padding: "3px 12px",
          fontFamily: "Outfit , Lexend, sans-serif",
          fontSize: "14px",
          color: "#98A2B3 !important",
          fontWeight: "400",
        },
        icon: {
          color: "#00000099",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Apply box shadow
          borderRadius: "16px", // Optional: for rounded corners
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit , Lexend, sans-serif",
          fontSize: "14px !important",
          color: "#333",
          "&:hover": {
            backgroundColor: "#f4f4f4",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: "12px !important",
          fontWeight: "400",
          wordBreak: "break-word", // Corrected the property name
          borderRadius: "10px",
          // Styles for error severity
          "&.MuiAlert-standardError": {
            backgroundColor: "#FFF4F3 !important", // Light red background for error
            color: "#F04438 !important", // Dark red text for error
            border: "1px solid #FF847B",
          },

          // Styles for info severity
          "&.MuiAlert-standardInfo": {
            backgroundColor: "#d1ecf1 !important", // Light blue background for info
            color: "#0c5460 !important", // Dark blue text for info
            border: "1px solid #0c5460",
          },

          // Styles for success severity
          "&.MuiAlert-standardSuccess": {
            backgroundColor: "#F3FFF3 !important", // Light green background for success
            color: "#211E2C !important", // Dark green text for success
            border: "0.53px solid #A1E199",
          },

          // Styles for warning severity
          "&.MuiAlert-standardWarning": {
            backgroundColor: "#fff3cd !important", // Light yellow background for warning
            color: "#856404 !important", // Dark yellow text for warning
            border: "1px solid #856404",
          },
        },
        action: {
          padding: "8px", // Action button styling
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5", // Customize background color
          boxShadow: "none", // Remove default shadow
          borderRadius: "8px", // Add border-radius
          "&:before": {
            display: "none", // Remove the default divider line before accordion
          },
          "&.Mui-expanded": {
            margin: "auto", // Customize the margin when expanded
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "white", // Customize summary background
          color: "#26272b",
          borderRadius: "8px", // Add border-radius
          borderTop: "1px solid #f4f4f5",
          minHeight: "48px", // Adjust height
          "&.Mui-expanded": {
            minHeight: "48px", // Ensure height stays consistent when expanded
          },
        },
        content: {
          margin: "12px 0", // Add margin between content
          "&.Mui-expanded": {
            margin: "12px 0", // Ensure consistent margin when expanded
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "16px", // Customize padding inside details
          fontSize: "14px", // Adjust font size
          backgroundColor: "#ffffff", // Customize background
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "unset !important",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: "1px solid #fff",
          borderRadius: "10px",
          "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
            borderLeft: "1px solid #fff", // Ensures the left border for middle buttons
          },
        },
      },
    },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       fill: "rgb(102, 102, 102)",
    //     },
    //   },
    // },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Optional: Match group border-radius
          color: "#fff",
          fontSize: "13px",

          "&.Mui-selected": {
            backgroundColor: "rgba(31, 152, 116, 1)", // Change background color when selected
            color: "#fff", // Change text color when selected

            "&:hover": {
              backgroundColor: "rgba(31, 152, 116, 1)", // Slightly darker on hover
            },
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "black ",
          fontSize: "14px !important",
          backgroundColor: "hsla(0,0%,100%,1) !important",
        },
        label: {
          fontSize: "14px",
          fontWeight: 300, // Add if needed
          lineHeight: "30.62px", // Add if needed
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          // color: "black",
          fontSize: "12px",
        },
      },
    },
  },
};

const themesOptions = [
  {
    palette: {
      mode: "light",
      primary: {
        main: "rgb(85 202 243)",
        light: "#2E90FA",
        dark: "rgba(0, 0, 0, 1)",
        contrastText: "#FFFFFF",
        neutral: "rgba(161, 138, 136, 1)",
        grey: "rgba(82, 82, 82, 1)",
        lightGrey: "rgba(144, 144, 144, 1)",
        50: "#F5FAFF",
        100: "#FFE4E8",
        200: "#D1E9FF",
        300: "#B2DDFF",
        400: "#84CAFF",
        500: "#F63D68",
        600: "#E31B54",
        700: "#175CD3",
        800: "#1849A9",
        900: "#101828",
      },
      neutral: {
        main: "#51525C",
        light: "#FAFAFA",
        dark: "#131316",
        contrastText: "#FFFFFF",
        50: "#FCFCFC",
        100: "#FAFAFA",
        200: "#E4E4E7",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#51525C",
        700: "#344054",
        800: "#182230",
        900: "#101828",
        950: "#0C111D",
      },
      background: {
        default: "#fff",
        dark: "#f3f7f9",
        lightGrey: "rgba(85, 85, 85, 1)",
        darkGrey: "rgba(37, 37, 37, 1)",
        paper: colors.common.white,
        noteHighlight: "rgba(248, 23, 23, 1)",
      },
      action: {
        primary: "red",
      },
      warning: {
        main: "#ffae33",
        dark: "#ffae33",
        light: "#fff1dc",
      },
      success: {
        main: "#54e18c",
        dark: "#54e18c",
        light: "#e2faec",
      },
      error: {
        main: "#eb2026",
        dark: "#eb2026",
        light: "#F81717",
      },
      text: {
        primary: "#fff",
        secondary: "#848484",
      },
      common: {
        black: "#222222",
      },
    },
    shadows: Array(25).fill("none"),
  },
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#8A85FF",
        light: "#9D9DFF",
        dark: "#6E6BFF",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#6E759F",
        light: "#8A8B9E",
        dark: "#4E5D7D",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#282C34",
        paper: "#282C34",
      },
      text: {
        primary: "#F5F5F5",
        secondary: "#B9B9B9",
      },
    },
    shadows: Array(25).fill("none"),
  },
];
export const createMuiTheme = (config = {}) => {
  let themeOptions = themesOptions.find(
    (theme) => theme.palette.mode === config.theme
  );

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions,
      { direction: config.direction },
      { typography }
    )
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

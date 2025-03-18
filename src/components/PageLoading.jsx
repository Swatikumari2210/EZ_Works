import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Root = styled('div')(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center",
  zIndex: 2000,
}));

const Loader = styled('img')(({ theme }) => ({
  width: 300,
  maxWidth: "100%",
}));

const ProgressBar = styled('div')({
  height: "3px",
});

export default function PageLoading() {
  return (
    <Root>
      <Box>
        {/* <LinearProgress height={10} /> */}
        <Loader sx={{
          width: {
            xs: 70,
            sm: 70,
            md: 90,
            lg: 90,
            xl: 90,
          }
        }} src="/images/logo(1).png" alt="loader...." />
      </Box>
    </Root>
  );
}

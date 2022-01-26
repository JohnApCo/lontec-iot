import React from "react";
import { styled, Box } from "@mui/system";
import MatxLogo from "../MatxLogo/MatxLogo";
import { Span } from "../Typography";
import useSettings from "../../hooks/useSettings";

const BrandRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px",
}));

const StyledSpan = styled(Span)(({ theme, mode }) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: mode === "compact" ? "none" : "block",
}));

function Brand({ children }) {
  const { settings } = useSettings();
  const { leftSidebar } = settings.layout1Settings;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <MatxLogo />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          Matx
        </StyledSpan>
      </Box>
      <Box
        className="sidenavHoverShow"
        sx={{ display: mode === "compact" ? "none" : "block" }}
      >
        {children || null}
      </Box>
    </BrandRoot>
  );
}

export default Brand;

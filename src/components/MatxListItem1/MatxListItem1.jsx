import React from "react";
import { Box, styled, useTheme } from "@mui/system";
import { IconButton, Icon } from "@mui/material";
import { convertHexToRGB } from "utils";
import RectangleAvatar from "../RectangleAvatar/RectangleAvatar";
import { Small } from "../Typography";

const ItemContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  cursor: "pointer",
  paddingLeft: "8px",
  paddingRight: "8px",
  transition: "all 300ms ease",
  "&:hover": {
    background: "rgba(0,0,0, .08)",
    paddingLeft: "8px",
    overflow: "hidden",
    "& .action-icon, & .rectangle-box": {
      opacity: 1,
    },
  },
  "& .action-icon, & .rectangle-box": {
    opacity: 0.76,
  },
}));

const Title = styled("h6")(({ theme }) => ({
  margin: 0,
  fontSize: "13px",
  fontWeight: "normal",
  color: `rgba(${convertHexToRGB(theme.palette.text.primary)}, 0.87)`,
}));

function MatxListItem1(props) {
  const { title, subtitle, iconText, iconColor, bulletIcon, actionIcon } =
    props;
  const theme = useTheme();
  const { secondary } = theme.palette.text;

  return (
    <ItemContainer>
      <RectangleAvatar
        color={iconColor}
        icon={bulletIcon}
        iconText={iconText}
      />

      <Box ml={2} flexGrow={1}>
        <Title>{title}</Title>
        <Small sx={{ color: secondary }}>{subtitle}</Small>
      </Box>

      {actionIcon && (
        <IconButton className="action-icon">
          <Icon color={iconColor}>{actionIcon}</Icon>
        </IconButton>
      )}
    </ItemContainer>
  );
}

export default MatxListItem1;

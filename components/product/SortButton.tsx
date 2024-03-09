"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./SortButton.module.css";
import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function SortButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = createTheme({
    typography: {
      fontFamily: ["inherit"].join(","),
    },
  });

  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <button
          className={styles.button}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          RECOMMENDED <IoChevronDownSharp />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>RECOMMENDED</MenuItem>
          <MenuItem onClick={handleClose}>NEWEST FIRST</MenuItem>
          <MenuItem onClick={handleClose}>POPULAR</MenuItem>
          <MenuItem onClick={handleClose}>PRICE: HIGH TO LOW</MenuItem>
          <MenuItem onClick={handleClose}>PRICE: LOW TO HIGH</MenuItem>
        </Menu>
      </ThemeProvider>
    </div>
  );
}

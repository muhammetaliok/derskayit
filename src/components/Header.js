import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

export default function Header() {
  return (
    <Box className="App-header" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#3D4B5F", width: "100%" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            size="large"
            color="inherit"
            href="/"
            sx={{
              justifyContent: "flex-start",
            }}
          >
            <HomeIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Inter",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            <center>Trakya Üniversitesi Ders Seçim Sistemi</center>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

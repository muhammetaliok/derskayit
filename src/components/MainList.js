import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Lesson from "./Lesson";
import "../index.css";
import Stack from "@mui/material/Stack";

export default function MainList(props) {
  const { bilMuh, onAdd } = props;

  return (
    <div className="flex-container">
      <Box sx={{ width: "100%" }}>
        <Box className="flex-container-child-1" sx={{}}>
          <Stack spacing={2}>
            <Paper
              sx={{
                padding: 1,
                fontWeight: "bold",
                backgroundColor: "#8EC1D6",
                marginTop: "1rem",
                borderRadius: "3rem",
                width: "137%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Bilgisayar Mühendisliği 2021-2022 Bahar Dönemi
            </Paper>
          </Stack>
        </Box>

        <Paper className="block col-2 main-list">
          <main className="block col-2">
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <center>Ders Listesi</center>
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginLeft: "1rem", marginBottom: "0.5rem" }}>
                Ders Kodu
              </Typography>
              <Typography sx={{ marginLeft: "5rem", marginBottom: "0.5rem" }}>
                Ders Adı
              </Typography>
              <Typography
                sx={{ marginLeft: "13.5rem", marginBottom: "0.5rem" }}
              >
                Öğretim Görevlisi
              </Typography>
              <Typography sx={{ marginLeft: "10rem", marginBottom: "0.5rem" }}>
                Ders Kredisi
              </Typography>
            </Box>

            <div className="row">
              {bilMuh.map((lesson) => (
                <Paper elevation={10}>
                  <Lesson
                    className="lesson-main"
                    key={lesson.id}
                    lesson={lesson}
                    onAdd={onAdd}
                  />
                </Paper>
              ))}
            </div>
          </main>
        </Paper>
      </Box>
    </div>
  );
}

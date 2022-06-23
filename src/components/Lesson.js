import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

export default function Lesson(props) {
  const { lesson, onAdd } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F62F63",
      },
    },
  });

  return (
    <Card
      className="lesson-card"
      sx={{
        background: "#3D4B5F",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 19px )",
        WebkitBackdropFilter: " blur( 19px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "row" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: "#F8FAFC",
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginLeft: "0.5rem",
          }}
        >
          {lesson.derskodu}
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: "#F8FAFC",
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginLeft: "2.5rem",
            width: "21rem",
          }}
        >
          {lesson.title}
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: "#F8FAFC",
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginLeft: "0rem",
            width: "18rem",
          }}
        >
          {lesson.lecturer}
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: "#F8FAFC",
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginLeft: "2rem",
          }}
        >
          {lesson.kredi}
        </Typography>
      </CardContent>

      <CardActions>
        <React.Fragment>
          <Button
            theme={theme}
            color="primary"
            variant="contained"
            sx={{
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: "0.9rem",
              marginLeft: "6.0rem",
            }}
            onClick={() => {
              onAdd(lesson);
            }}
          >
            Ekle
          </Button>
        </React.Fragment>
      </CardActions>
    </Card>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function PickedList(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#e0e0e0",
    color: "#000000",
    border: "2px solid #fff",
    borderRadius: "15rem",
    boxShadow: 24,
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F62F63",
      },
    },
  });

  const { pickedList, onRemove } = props;
  const creditValue = pickedList.reduce((a, c) => a + c.kredi * c.qty, 0);
  const totalCredit = creditValue;

  return (
    <form>
      <Paper className="picked-body">
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "1.6rem",
            marginBottom: "1rem",
            marginTop: "1rem",
            width: "23rem",
          }}
        >
          <center>Seçilen Dersler</center>
        </Typography>

        <div>
          {pickedList.length === 0 && (
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "1rem",
                marginTop: "1rem",
                color: "#ABB8C9",
                width: "23rem",
              }}
            >
              <center>Henüz ders seçmediniz.</center>
            </Typography>
          )}
        </div>

        {pickedList.map((item) => (
          <Paper
            elevation={10}
            sx={{ margin: "10px", padding: "10px", backgroundColor: "#3D4B5F" }}
            key={item.id}
            className="row"
          >
            <div className="col-2">
              <div className="col-2 papercard">
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#F8FAFC",
                    width: "6rem",
                    marginLeft: "1rem",
                    marginTop: "0.2rem",
                  }}
                >
                  {item.title}
                  <Typography sx={{ fontSize: "small", marginTop: "0.5rem" }}>
                    {item.kredi} Kredi
                  </Typography>
                </Typography>

                <Button
                  onClick={() => onRemove(item)}
                  className="remove"
                  sx={{ textTransform: "none", marginLeft: "40%" }}
                >
                  <Typography sx={{ fontSize: "14px" }}>Sil</Typography>
                </Button>
              </div>
            </div>
            <div></div>
          </Paper>
        ))}

        {pickedList.length !== 0 && (
          <div sx={{ marginTop: "15rem" }}>
            <Paper
              sx={{
                marginTop: "3rem",
                marginLeft: "1rem",
                marginBottom: "2rem",
              }}
              elevation={0}
            ></Paper>

            <Paper
              sx={{
                marginTop: "2rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
              }}
              elevation={0}
            ></Paper>

            <Paper
              sx={{
                marginTop: "2rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
              }}
              elevation={0}
            >
              <div className="picked-row">
                <div className="picked-text">
                  <strong>Seçilen Kredi Toplamı</strong>
                </div>

                <div className="picked-text">
                  <strong>{totalCredit.toFixed()}</strong>
                </div>
              </div>
            </Paper>

            <Button
              theme={theme}
              variant="contained"
              sx={{ width: "11rem", height: "2.5rem" }}
              onClick={() => {
                {
                  setOpen(true);
                }
              }}
            >
              Seçimi Onayla
            </Button>

            <div className="row">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <center>Ders Seçiminiz Onaylandı!</center>
                  </Typography>

                  <Button
                    className="modal"
                    href="/"
                    sx={{
                      width: "15rem",
                      height: "2.5rem",
                      marginTop: "1rem",
                      color: "#ffffff",
                      backgroundColor: "#5d3ebc",
                      "&:hover": {
                        backgroundColor: "#4b27b6",
                      },
                    }}
                    variant="outlined"
                  >
                    Giriş Ekranına Geri Dön
                  </Button>
                </Box>
              </Modal>
            </div>
          </div>
        )}
      </Paper>
    </form>
  );
}

import React from "react";
import Header from "./components/Header";
import MainList from "./components/MainList";
import PickedList from "./components/PickedList";
import data from "./lesson-data/data";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = { 
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "3rem",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};

function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        sx={{ backdropFilter: "blur(10px)" }}
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
            sx={{
              textAlign: "center",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            Lütfen giriş yapınız.
          </Typography>
          <TextField
            name="email"
            id="outlined-basic"
            label="Öğrenci E-posta"
            variant="outlined"
            sx={{ margin: "0.8rem", borderRadius: "15rem" }}
            type="email"
            required
          />
          <TextField
            name="password"
            id="outlined-basic"
            label="Şifre"
            variant="outlined"
            sx={{ margin: "0.8rem" }}
            type="password"
            required
          />
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{ margin: "0.8rem" }}
            type="submit"
            value="Submit"
          >
            Giriş Yap
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

function App() {
  const { bilMuh } = data;

  const [pickedList, setPickedList] = useState([]);

  const onAdd = (lesson) => {
    const exist = pickedList.find((x) => x.id === lesson.id);
    if (exist) {
    } else {
      setPickedList([...pickedList, { ...lesson, qty: 1 }]);
    }
  };

  const onRemove = (lesson) => {
    const exist = pickedList.find((x) => x.id === lesson.id);
    if (exist.qty === 1) {
      setPickedList(pickedList.filter((x) => x.id !== lesson.id));
    } else {
      setPickedList(
        pickedList.map((x) =>
          x.id === lesson.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <BasicModal />
      <Header className="App-header"></Header>

      <div className="App">
        <div className="app-container">
          <MainList
            onAdd={onAdd}
            data={data}
            bilMuh={bilMuh}
            pickedList={pickedList}
          />
          <PickedList
            onAdd={onAdd}
            onRemove={onRemove}
            pickedList={pickedList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

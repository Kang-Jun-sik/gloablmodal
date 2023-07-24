import { Button, Divider, Typography } from "@mui/material";
import * as React from "react";
import "./styles.css";

import useModal from "./hooks/useModal";

export default function App() {
  const { showModal } = useModal();

  const handleClickAlertModal = () => {
    showModal({
      modalType: "AlertModal",
      modalProps: {
        message: "Success!"
      }
    });
  };

  const handleClickConfirmModal = () => {
    showModal({
      modalType: "ConfirmModal",
      modalProps: {
        message: "Yes or No",
        confirmText: "Yes",
        cancelText: "No",
        handleConfirm: () => {
          console.log("Yes!");
        },
        handleClose: () => {
          console.log("No!");
        }
      }
    });
  };

  return (
    <div className="App">
      <Typography variant="h4">Global Modal</Typography>
      <Typography variant="body1">React + Recoil</Typography>

      <Divider sx={{ m: 2 }} />

      <Button
        variant="contained"
        onClick={handleClickAlertModal}
        sx={{ mx: 2 }}
      >
        Alert Modal
      </Button>
      <Button
        variant="contained"
        onClick={handleClickConfirmModal}
        sx={{ mx: 2 }}
      >
        Confirm Modal
      </Button>
    </div>
  );
}

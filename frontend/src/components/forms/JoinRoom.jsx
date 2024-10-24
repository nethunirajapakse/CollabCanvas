import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const JoinRoom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        gap: 2, // gap between elements
        padding: 2,

        border: "1px solid #ccc", // outline for the form
        borderRadius: 2, // rounded corners
        boxShadow: 3, // shadow effect
        maxWidth: 500, // max width of the form container
        margin: "auto", // center the form horizontally
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create Room
      </Typography>

      <TextField
        id="join-name"
        label="Name"
        variant="outlined"
        placeholder="Enter your name"
        fullWidth
        sx={{ maxWidth: 400 }}
      />

      <TextField
        id="join-room-id"
        label="Room Code"
        variant="outlined"
        placeholder="Enter your room code"
        fullWidth
        sx={{ maxWidth: 400 }}
      />

      <Button variant="contained" fullWidth sx={{ maxWidth: 400 }}>
        Generate Room
      </Button>
    </Box>
  );
};

export default JoinRoom;

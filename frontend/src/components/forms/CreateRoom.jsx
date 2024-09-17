import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const CreateRoom = () => {
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
        id="name"
        label="Name"
        variant="outlined"
        placeholder="Enter your name"
        fullWidth
        sx={{ maxWidth: 400 }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <TextField
          id="room-code"
          label="Room Code"
          variant="outlined"
          placeholder="Your room code"
          fullWidth
          disabled
        />
        <Button variant="contained" sx={{ minWidth: 120 }}>
          Generate
        </Button>
        <Button variant="outlined" sx={{ minWidth: 120 }}>
          Copy
        </Button>
      </Box>

      <Button variant="contained" fullWidth sx={{ maxWidth: 400 }}>
        Generate Room
      </Button>
    </Box>
  );
};

export default CreateRoom;

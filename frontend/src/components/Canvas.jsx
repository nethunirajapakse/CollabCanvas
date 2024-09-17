import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BrushIcon from "@mui/icons-material/Brush";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";

const Canvas = () => {
  // Example user avatars
  const users = [
    { name: "User 1", src: "/path/to/avatar1.jpg" },
    { name: "User 2", src: "/path/to/avatar2.jpg" },
    { name: "User 3", src: "/path/to/avatar3.jpg" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          padding: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Tools
        </Typography>
        <IconButton color="primary">
          <BrushIcon />
        </IconButton>
        <IconButton color="primary">
          <ColorLensIcon />
        </IconButton>
        <IconButton color="primary">
          <UndoIcon />
        </IconButton>
        <IconButton color="primary">
          <RedoIcon />
        </IconButton>
        <IconButton color="secondary">
          <DeleteIcon />
        </IconButton>
        {/* Add more tools as needed */}
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            position: "relative",
          }}
        >
          {/* Whiteboard area */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 1,
              backgroundColor: "#fff",
              padding: "4px 8px",
              borderRadius: 2,
              boxShadow: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="h6">Whiteboard</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {users.map((user, index) => (
                <Avatar
                  key={index}
                  alt={user.name}
                  src={user.src}
                  sx={{ width: 24, height: 24 }}
                />
              ))}
            </Box>
          </Box>
          {/* Add your whiteboard drawing canvas or component here */}
        </Box>

        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            padding: 1,
            boxShadow: 1,
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Canvas;

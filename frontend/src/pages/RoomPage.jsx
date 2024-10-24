import React from "react";
import Box from "@mui/material/Box";
import CreateRoom from "../components/forms/CreateRoom";
import JoinRoom from "../components/forms/JoinRoom";

const RoomPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", // Center the forms
        alignItems: "center",
        height: "100vh",
        gap: 4, // Space between the two components
        padding: 2,
      }}
    >
      {/* Create Room Section */}
      <Box sx={{ flex: 1, maxWidth: 500 }}>
        {" "}
        {/* Equal width and maximum width for each form */}
        <CreateRoom />
      </Box>

      {/* Join Room Section */}
      <Box sx={{ flex: 1, maxWidth: 500 }}>
        {" "}
        {/* Equal width and maximum width for each form */}
        <JoinRoom />
      </Box>
    </Box>
  );
};

export default RoomPage;

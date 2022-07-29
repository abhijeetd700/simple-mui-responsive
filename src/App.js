import { Box, Container, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";

export default function App() {



  return (
    <Box>
      <Navbar/>
      <Stack spacing={2} direction='row' justifyContent='space-between'>
        <Sidebar/>
        <Feed/>
        <RightSidebar/>
      </Stack>
    </Box>
  );
}

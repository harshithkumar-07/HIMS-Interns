import { Box, Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import PatientComplaints from "./pages/patient_complaints";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import PatientFeedback from "./pages/patient_feedback";
import AddComplaint from "./pages/Complaint";
function App() {
  return (
    <Flex>

      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <Box flex="1" p={5}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<PatientFeedback />} />
<<<<<<< HEAD
          <Route path="/complaints" element={<PatientComplaints />} />
=======
          <Route path="/complaints" element={<AddComplaint />} />

>>>>>>> 63e5d55531d1552a9e7670484d7b8053d98d128a
        </Routes>
      </Box>

    </Flex>
  );
}

export default App;
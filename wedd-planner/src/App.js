import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WeddingRequestDetails from "./pages/WeddingRequestDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WeddingPlanner from "./pages/WeddingPlanner";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Gallery from "./pages/Gallery";
import ProtectedRoute from "./routes/ProtectedRoute";

import ManageCatering from "./pages/ManageCatering";
  import ManagePhotographers from "./pages/ManagePhotographers";
  import ManageDecorations from "./pages/ManageDecorations";
  //import ManageMandaps from "./pages/ManageMandaps";
//import AdminRequestDetails from "./pages/AdminRequestDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/planner" element={<WeddingPlanner />} />
        <Route path="/dashboard"element={ <ProtectedRoute allowedRole="user" > <UserDashboard /> </ProtectedRoute>}/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin/request/:id" element={<WeddingRequestDetails />} />
        <Route path="/admin/catering" element={<ManageCatering />} />
        <Route path="/admin/photographers" element={<ManagePhotographers />} />
        <Route path="/admin/decorations" element={<ManageDecorations />} />
        {/* <Route path="/admin/request/:id" element={<AdminRequestDetails />}
/> */}
        {/* <Route path="/admin/mandaps" element={<ManageMandaps />} /> */}
      </Routes>
      

      <Footer />
    </BrowserRouter>
  );
}

export default App;
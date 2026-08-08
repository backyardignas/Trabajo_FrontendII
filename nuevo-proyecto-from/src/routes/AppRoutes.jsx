import { Routes, Route } from "react-router-dom";
import dashboard from "../pages/dashboard";
import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Enrollments from "../pages/Enrollments";

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<dashboard />} />
        <Route path="/dashboard" element={<dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/enrollments" element={<Enrollments />} />
    </Routes>
  );
}
export default AppRoutes;
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./Pages/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>} />
      <Route path="/user-profile" element={<Layout>USER PROFILE PAGE</Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

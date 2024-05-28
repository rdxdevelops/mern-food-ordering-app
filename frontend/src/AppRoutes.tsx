import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME PAGE</Layout>} />
      <Route path="/user-profile" element={<Layout>USER PROFILE PAGE</Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

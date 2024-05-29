import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./Pages/HomePage";
import AuthCallbackPage from "./Pages/AuthCallbackPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>} />
      <Route path="/auth-callback" element = {<AuthCallbackPage/>}/>
      <Route path="/user-profile" element={<Layout>USER PROFILE PAGE</Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

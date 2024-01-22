import LoginPage from "../features/auth/login/LoginPage";
import { MedicalHistoryContextProvider } from "../features/lich-su-kham-benh/MedicalHistoryContext";
import MedicalHistoryPage from "../features/lich-su-kham-benh/MedicalHistoryPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const RouteComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/lich-su-kham-benh" element={<MedicalHistoryPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteComponent;

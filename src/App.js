import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExhibitionPage from "./pages/ExhibitionPage/ExhibitionPage";
import FundsPage from "./pages/FundsPage/FundsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter >
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/funds" element={<FundsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/exhibition" element={<ExhibitionPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import AboutStudent from "./pages/AboutStudent";
import AboutTeacher from "./pages/AboutTeacher";
import AboutSchool from "./pages/AboutSchool";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      {/* Penggunaan Link sama seperti penggunaan tag anchor pada html. untuk href="" diganti dengan to={} untuk menuju ke alamat page yang diinginkan*/}
      <nav>
        <Link to={"/"}>Home |</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* route params*/}
        <Route path="/detail/:id" element={<DetailPage />} />

        {/* penggunaan nested route */}
        <Route path="/about" element={<AboutPage />}>
          <Route path="student" element={<AboutStudent />} />
          <Route path="teacher" element={<AboutTeacher />} />
          {/* index digunakan agar element AboutSchool langsung ditampilkan pertama kali ketika page about dibuka */}
          <Route index element={<AboutSchool />} />
        </Route>
        {/* tambahkan path="*" untuk menampilkan halaman yg tidak ditemukan. case nya adalah ketika user mengakses path tertentu yang tidak terdaftar di routingan yang kita miliki*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

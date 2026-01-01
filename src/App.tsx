import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { CoursesPage } from "./pages/CoursesPage";
import { CoursePage } from "./pages/CoursePage";
import { LessonPage } from "./pages/LessonPage";

function App() {
  return (
    <BrowserRouter basename="/jenn-barr-lms">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseSlug" element={<CoursePage />} />
        <Route path="/courses/:courseSlug/lessons/:lessonId" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

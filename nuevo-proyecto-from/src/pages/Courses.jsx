import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Header from "../components/Header";
import CourseTable from "../components/table/CourseTable";
import { getCourses } from "../Service/courseService.js";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <MainLayout>
      <Header title="Cursos" description="Lista de cursos registrados" />
      <div className="px-6 pb-6">
        {error && (
          <p className="text-red-600 bg-red-50 border border-red-200 rounded p-3 mb-4">
            {error}
          </p>
        )}
        <CourseTable courses={courses} />
      </div>
    </MainLayout>
  );
}

export default Courses;

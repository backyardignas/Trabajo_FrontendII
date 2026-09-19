import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Header from "../components/Header";
import EnrollmentTable from "../components/table/EnrollmentTable";
import { getEnrollments } from "../Service/enrollmentService.js";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEnrollments()
      .then(setEnrollments)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <MainLayout>
      <Header title="Matrículas" description="Lista de matrículas registradas" />
      <div className="px-6 pb-6">
        {error && (
          <p className="text-red-600 bg-red-50 border border-red-200 rounded p-3 mb-4">
            {error}
          </p>
        )}
        <EnrollmentTable enrollments={enrollments} />
      </div>
    </MainLayout>
  );
}

export default Enrollments;

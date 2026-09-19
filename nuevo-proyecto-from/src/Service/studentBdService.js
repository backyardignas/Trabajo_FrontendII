import axios from 'axios';

export const getStudents = async () => {
  const response = await axios.get('/api/students');
  return response.data;
};

export const createStudent = async (studentData) => {
  const response = await axios.post('/api/students', studentData);
  return response.data;
};

export const updateStudent = async (id, studentData) => {
  const response = await axios.put(`/api/students/${id}`, studentData);
  return response.data;
};

export const deleteStudent = async (id) => {
  await axios.delete(`/api/students/${id}`);
};

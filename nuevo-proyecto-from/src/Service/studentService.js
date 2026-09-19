import { supabase } from '../Config/supabase.js';

const fromRow = (row) => ({ ...row, student_id: row.Student_id });

const toRow = ({ student_id, ...rest }) => ({
  ...rest,
  Student_id: Number(student_id),
});

export const getStudents = async () => {
  const { data, error } = await supabase
    .from('student')
    .select('*')
    .order('Student_id');

  if (error) {
    throw new Error(error.message);
  }

  return data.map(fromRow);
};

export const getStudentById = async (id) => {
  const { data, error } = await supabase
    .from('student')
    .select('*')
    .eq('Student_id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return fromRow(data);
};

export const addStudent = async (studentData) => {
  const { data, error } = await supabase
    .from('student')
    .insert([toRow(studentData)])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return fromRow(data);
};

export const updateStudent = async (id, studentData) => {
  const { first_name, last_name, email, phone_number } = studentData;
  const { data, error } = await supabase
    .from('student')
    .update({ first_name, last_name, email, phone_number })
    .eq('Student_id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return fromRow(data);
};

export const deleteStudent = async (id) => {
  const { error } = await supabase
    .from('student')
    .delete()
    .eq('Student_id', id);

  if (error) {
    throw new Error(error.message);
  }
};

import { supabase } from '../Config/supabase.js';

export const getStudents = async () => {
  const { data, error } = await supabase
    .from('student')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getStudentById = async (id) => {
  const { data, error } = await supabase
    .from('student')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const addStudent = async (studentData) => {
  const { data, error } = await supabase
    .from('student')
    .insert([studentData])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
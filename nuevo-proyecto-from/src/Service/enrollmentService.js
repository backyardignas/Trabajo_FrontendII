import { supabase } from '../Config/supabase.js';

export const getEnrollments = async () => {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*, student(first_name, last_name), course(course_name)');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const addEnrollment = async (enrollmentData) => {
  const { data, error } = await supabase
    .from('enrollments')
    .insert([enrollmentData])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

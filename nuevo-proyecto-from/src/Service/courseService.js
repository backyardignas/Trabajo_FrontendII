import { supabase } from '../Config/supabase.js';

export const getCourses = async () => {
  const { data, error } = await supabase
    .from('course')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const addCourse = async (courseData) => {
  const { data, error } = await supabase
    .from('course')
    .insert([courseData])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

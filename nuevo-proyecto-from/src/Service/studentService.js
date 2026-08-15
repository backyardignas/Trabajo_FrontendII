import { supabase } from '../config/supabase.js';

export const getStudents = async () => {
    const { data, error } = await supabase.from('students').select('*');
    if (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
    return data;
};
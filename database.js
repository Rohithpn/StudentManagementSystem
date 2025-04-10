import { supabase } from './supabase-config.js';


async function addStudent(id, name, dob, grade, medical_condition) {
    const { data, error } = await supabase
        .from("students")
        .insert([{ id, name, dob, grade, medical_condition }]);

    if (error) {
        console.error("Error adding student:", error.message);
    } else {
        console.log("Student added successfully:", data);
    }
}


async function fetchStudents() {
    const { data, error } = await supabase.from("students").select("*");

    if (error) {
        console.error("Error fetching students:", error.message);
        return [];
    } else {
        return data;
    }
}


async function updateStudent(id, updatedFields) {
    const { data, error } = await supabase.from("students").update(updatedFields).eq("id", id);

    if (error) {
        console.error("Error updating student:", error.message);
    } else {
        console.log("Student updated successfully:", data);
    }
}


async function deleteStudent(id) {
    const { data, error } = await supabase.from("students").delete().eq("id", id);

    if (error) {
        console.error("Error deleting student:", error.message);
    } else {
        console.log("Student deleted successfully:", data);
    }
}

export { addStudent, fetchStudents, updateStudent, deleteStudent };

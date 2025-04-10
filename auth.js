import { supabase } from "./supabase-config.js";

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
    } else {
        console.log("Login successful:", data);
       
        window.location.href = "dashboard.html"; // Redirect to home page after login
    }
}
async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Logout failed:", error.message);
        return;
    }
   
    window.location.href = "index.html"; // Redirect to login page
}

// ✅ Make sure to export the function
export { login };

export { logout };
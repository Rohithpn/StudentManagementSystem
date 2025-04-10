import { auth, signInWithEmailAndPassword } from "./supabase-config.js";

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "pages/home.html";  // Redirect after login
        })
        .catch(error => {
            document.getElementById("error-message").innerText = error.message;
        });
});

// decide and implement employee id?
// could verify if admin or not




const employeeSignupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    // const employeeId = document.querySelector("#employeeId").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (username && password) {
        const response = await fetch("/api/users/signup", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/")
        } else {
            alert("Sign up failed");
        }
    }
};

const employeeSignupForm = document.querySelector("#signup-form");
if (employeeSignupForm) {
    employeeSignupForm.addEventListener("submit", employeeSignupFormHandler);
}
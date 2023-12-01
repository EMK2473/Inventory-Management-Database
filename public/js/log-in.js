const employeeLoginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username-employee-login").value.trim();
    const password = document.querySelector("#password-employee-login").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in.");
      }
    }
  };
  
  const employeeLoginForm = document.querySelector(".employee-login-form");
  if (employeeLoginForm) {
    employeeLoginForm.addEventListener("submit", employeeLoginFormHandler);
  }
  
const employeeLogout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log out");
    }
  };
  const employeeLogoutButton = document.querySelector('#employee-logout');
  if (employeeLogoutButton) {
    employeeLogoutButton.addEventListener("click", employeeLogout);
  }
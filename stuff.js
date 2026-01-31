  
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  
  // Simple hardcoded credentials
  if (username === "principal" && password === "1234") {
    window.location.href = "Creche-dashboard.html";
  } else {
    document.getElementById("error").textContent = "Invalid login details";
  }
});

//Navbar functionality
const navbar = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
  hamburger.classList.toggle('active');
});
  
document.addEventListener("DOMContentLoaded", () => {
  
  // Get kids from localStorage
  const kids = JSON.parse(localStorage.getItem("kids")) || [];

  // Update registered learners count
  const learnersCount = document.getElementById("learners-count");
  if (learnersCount) {
    learnersCount.textContent = kids.length;
  }

  // Table body
  const tableBody = document.querySelector("#kidsTable tbody");

  // Render kids
  kids.forEach(kid => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${kid.name}</td>
      <td>${kid.parent}</td>
      <td>${kid.dateOfBirth}</td>
      <td>${kid.gender}</td>
     <td>${kid.contact}</td>
     <td><button onclick="delLearner(${kid.id})">Delete</button> td>
    `;

    tableBody.appendChild(row);
  });

});
//delete button functionality.
function delLearner(id){
let kids = JSON.parse(localStorage.getItem("kids")) || [];
kids=kids.filter(kid=>kid.id !== id);
localStorage.setItem("kids",JSON.stringify(kids));
location.reload();  
}

// logout functionality
const logoutBtn = document.querySelector('.logout');

logoutBtn.addEventListener('click', function() {
  const confirmLogout = confirm("Are you sure you want to logout?");
  
  if (confirmLogout) {
    window.location.href = "index.html";
  }
  // If user clicks "Cancel", nothing happens and user stays on the page
});

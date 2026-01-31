// Kids personal details.
const kidName = document.getElementById("childName");
const kidYear = document.getElementById("dob");
const kidGender = document.getElementById("gender");
const kidParent = document.getElementById("parentName");
const kidAddress = document.getElementById("address");
const parentContact = document.getElementById("phone");
// load data/get it back
const kids = JSON.parse(localStorage.getItem("kids")) ||[];

function formValidation() {
  const name = kidName.value;
  const dateOfBirth= kidYear.value;
  const gender = kidGender.value;
  const parent = kidParent.value;
  const address = kidAddress.value;
  const contact = parentContact.value;
  if (!name || !dateOfBirth || !gender || !parent || !address || !contact) {
    alert("fill in all fields.");
    return;
  }
  const kid = {
    id: Date.now(),
    name: name,
    dateOfBirth: dateOfBirth,
    gender: gender,
    parent: parent,
    address: address,
    contact: contact
  };
//adding new learner to the list before permanent save
  kids.push(kid);
//Save to localstorage so that learner's data is not lost the page refreshes
localStorage.setItem("kids", JSON.stringify(kids));
// log learners for debugging and verification during development  
console.log(kids);
  //giving user feedback after submitting 
  alert("Learner Registered successfully.")
  //clearing form fields after registering to prevent duplicates
  kidName.value="";
  kidYear.value="";
  kidGender.value="";
  kidParent.value="";
  kidAddress.value="";
  parentContact.value="";
}
//Navbar functionality
const navbar = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
  hamburger.classList.toggle('active');
});
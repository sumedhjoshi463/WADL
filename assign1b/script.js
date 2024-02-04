// Initialize an array to store user data
let userDataArray = [];

function submitForm() {
  // Get form data
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  // Create data object
  const user = {
    username: username,
    email: email
  };

  // Add user data to the array
  userDataArray.push(user);

  // Display data on the same page
  displayUserData();

  // Clear the form fields
  document.getElementById("username").value = '';
  document.getElementById("email").value = '';
}

function displayUserData() {
  const userDataBodyElement = document.getElementById("userDataBody");
  userDataBodyElement.innerHTML = ""; // Clear previous entries

  userDataArray.forEach(user => {
    const row = document.createElement("tr");

    const usernameCell = document.createElement("td");
    usernameCell.textContent = user.username;
    row.appendChild(usernameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    userDataBodyElement.appendChild(row);
  });
}

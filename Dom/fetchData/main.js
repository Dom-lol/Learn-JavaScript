const url = "http://localhost/rean/dataAPI/info.php";

// select element
const statusMessage = document.getElementById("statusMessage");
const userlist = document.getElementById("userlist");

function renderUsers(users) {
  userlist.innerHTML = "";

  if (!Array.isArray(users) || users.length === 0) {
    statusMessage.textContent = "Not user data";
    return;
  }
  statusMessage.textContent = "";

  users.forEach((user) => {
    li.textContent = `Name: ${user.name}, Email: ${user.email}`;

    userlist.appendChild(li);
  });
}

async function fetchData() {
  statusMessage.textContent = "loading data....";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    renderUsers(data);
  } catch (error) {
    statusMessage.textContent = `Failed fetching data.... ${error.message}`;
    console.error("Error fetching data: ", error);
  }
}
fetchData();

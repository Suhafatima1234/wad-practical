// REGISTER
function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // VALIDATION
    if (!name || !email || !mobile || !username || !password) {
        alert("All fields required");
        return;
    }

    let user = { name, email, mobile, dob, city, address, username, password };

    // AJAX using XMLHttpRequest
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "data.json", true);  // local file (dummy)

    xhr.onload = function () {

        // After "sending", store locally
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registered successfully (AJAX used)");
    };

    xhr.send(JSON.stringify(user));
}


// LOGIN (same as before)
function login() {

    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = users.find(u => u.username === username && u.password === password);

    if (found) {
        alert("Login successful");
        window.location = "data.html";
    } else {
        alert("Invalid credentials");
    }
}
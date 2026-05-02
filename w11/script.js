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

    if (!email.includes("@")) {
        alert("Invalid email");
        return;
    }

    if (mobile.length != 10) {
        alert("Mobile must be 10 digits");
        return;
    }

    let user = { name, email, mobile, dob, city, address, username, password };

    // SIMULATED AJAX (important for exam)
    setTimeout(function () {

        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registered successfully");

    }, 300);
}


// LOGIN
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
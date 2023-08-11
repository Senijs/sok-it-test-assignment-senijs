document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (username === "user" && password === "password") {
		window.location.href = "userPage.html";
	} else {
		alert("Invalid credentials. Please try again.");
	}
});

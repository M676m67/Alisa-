document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  const form = document.getElementById("registerForm");
  form.innerHTML = `
    <div class="success-message">
      <h1>Registration Successful</h1>
      <p>Welcome, ${email}! You can now log into your account.</p>
      <button onclick="window.location.href='index.html'" class="btn">Log In Now</button>
    </div>
  `;
});

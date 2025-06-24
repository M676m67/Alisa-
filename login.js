document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    // تسجيل دخول ناجح بدون أي رسالة
    window.location.href = "home.html"; // الصفحة الرئيسية
  } else {
    // في حالة الخطأ فقط نظهر رسالة
    alert("Invalid login credentials.");
  }
});

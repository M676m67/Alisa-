document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "home.html"; // الصفحة الرئيسية
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
});

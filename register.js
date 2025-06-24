document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  // تخزين البيانات بشكل بسيط في LocalStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.");
  window.location.href = "index.html";
});

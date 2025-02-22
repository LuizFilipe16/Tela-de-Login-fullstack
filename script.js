// JavaScript para validação do formulário
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Validação de formato de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      message.style.color = "red";
      message.textContent = "Formato de e-mail inválido.";
      return;
    }

    if (email === "admin@example.com" && password === "123456") {
      message.style.color = "green";
      message.textContent = "Login bem-sucedido!";
    } else {
      message.style.color = "red";
      message.textContent = "E-mail ou senha incorretos.";
    }
  });

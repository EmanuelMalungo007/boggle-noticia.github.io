const $ = (elemento) => document.querySelector(elemento);

const btn_login = document.querySelector("#btn-login").addEventListener("click", (ev) => {
  ev.preventDefault();

  const string = localStorage.getItem("usuario");
  const usuarioCadastrado = JSON.parse(string);

  const { nome ,senha } = usuarioCadastrado;

  const dadosCorretos =
    nome === $("#nome").value && senha === $("#senha").value;
  console.log(dadosCorretos);

  if (!dadosCorretos) {
    alert("Dados inválidos!");
    return;
  }

  window.location.href = "./index.html";
});

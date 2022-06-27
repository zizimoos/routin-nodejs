const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success) {
        window.location.href = "/";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생 " + err));
    });
}

loginBtn.addEventListener("click", login);

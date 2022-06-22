const id = document.querySelector("#id");
const userName = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#registerBtn");

function register(e) {
  e.preventDefault();

  if (!id.value) {
    window.alert("아이디를 입력해주세요.");
  }
  if (!password.value || password.value !== confirmPassword.value) {
    window.alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    id: id.value,
    name: userName.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        window.location.href = "/login";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생 " + err));
    });
}

registerBtn.addEventListener("click", register);


let arrUsers = ['admin', 'gv', "sv"];

const menu = document.querySelector(".menu");
// const home = document.getElementById("home");
// const info = document.getElementById("info");
// const showList = document.getElementById("list-page");
// const login = document.getElementById("login");
// const about = document.getElementById("about");

const formLogin = document.getElementById("form-login");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const btnSubmit = document.getElementById("submit-btn");
formLogin.addEventListener('submit', () => {
    console.log(inputEmail.value, inputPassword.value);

    if (inputEmail.value !== "" && inputPassword !== "") {
        checkPermission(inputEmail.value, inputPassword.value);
    }

})
function checkPermission(user, password) {
    console.log("Kiểm tra quyền");
    if (user === "admin@edu.vn" && password === "admin") {
        menu.classList.remove("hidden");
        menu.innerHTML += `<li><a href="#" id="home">Trang chủ</a></li>
        <li><a href="#" id="info">Thông tin</a></li>
        <li><a href="#" id="list-page">Xem DS</a></li>
        <li><a href="./addsv.html" id="add-sv">Thêm SV</a></li>
        <li><a href="#" id="login">Login</a></li>
        <li><a href="#" id="about">About</a></li>`;
    }
    else if (user === "gv@edu.vn" && password === "gv") {
        menu.classList.remove("hidden");
        menu.innerHTML += `<li><a href="#" id="home">Trang chủ</a></li>
        <li><a href="#" id="info">Thông tin</a></li>
        <li><a href="#" id="list-page">Xem DS</a></li>
        <li><a href="#" id="login">Login</a></li>`;
    } else if (user === "sv@edu.vn" && password === "Sv") {
        menu.classList.remove("hidden");
        menu.innerHTML += `<li><a href="#" id="home">Trang chủ</a></li>
        <li><a href="#" id="info">Thông tin</a></li>
        <li><a href="#" id="login">Login</a></li>`;

    }
    formLogin.style.display = 'none';
}

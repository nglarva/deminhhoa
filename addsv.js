const form = document.getElementById("form-addsv");
const inputName = document.getElementById("hoten");
const inputBirthday = document.getElementById("ngaysinh");
const diemTB = document.getElementById("diemtb");

const btn = document.querySelector("input[type='submit']");

inputName.focus();
btn.addEventListener('click', (e)=>{
    e.preventDefault();
})


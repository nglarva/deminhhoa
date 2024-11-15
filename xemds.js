let para = new URLSearchParams(window.location.search);
let fullName = para.get("hoten");
let ngaysinh = para.get("birthday");
let diemtb = para.get("diemtb");

const form = document.getElementById("form-addsv");
const inputName = document.getElementById("hoten");
const inputBirthday = document.getElementById("ngaysinh");
const diemTB = document.getElementById("diemtb");

inputName.value = fullName;
inputBirthday.value = ngaysinh;
diemTB.value = diemtb;
console.log(fullName,ngaysinh,diemtb);
if (diemtb > 8.5) {
    if(confirm("SV này có điểm xuất sắc?"))
        {
            localStorage.setItem(`${fullName}`,diemtb);
        }
    
        else {
            window.location.href = "http://127.0.0.1:5500/addsv.html";
        }

}

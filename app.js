let password;
let userName;
let inputBGC = document.querySelector("body");

function BGC() {
    // if (inputBGC.style.backgroundColor == "background-color:black") {
    //     inputBGC.style.backgroundColor = "white";
    // } else {
    //     inputBGC.style.backgroundColor = "black";
    // }
    let BGC = document.body;
    if (BGC.style.backgroundColor == "black") {
        BGC.style.backgroundColor = "white";
    } else {
        BGC.style.backgroundColor = "black";
    }
}
console.log(
    document.getElementsByClassName("input").style == "background-color:black"
);

function getDate() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    document.getElementById(
        "time"
    ).innerText = `現在時間是 ： ${hour}點 ${minute}分 ${second}秒 `;
}
setInterval(getDate(), 1000);

function getUser() {
    userName = document.getElementById("username").value;
}

function getPassword() {
    password = document.getElementById("password").value;
}

function checkBoth() {
    if (userName == "abc123" && password == "abc123") {
        alert("登入成功！");
    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("帳號或密碼輸入錯誤！");
    }
}

function funcTai() {
    document.getElementById("username").placeholder = "手機號碼或電子郵地址";
    document.getElementById("password").placeholder = "密碼";
    document.getElementById("login").innerText = "登入";
    document.getElementById("forgotps").innerText = "忘記密碼?";
    // document.getElementById() = "或"; //或;
    document.getElementById("create").innerText = "建立新帳號";
    document.getElementById("about").innerText = "關於";
    document.getElementById("information").innerText = "使用說明";
    document.getElementById("more").innerText = "更多";
}

function funcEng() {
    document.getElementById("username").placeholder = "Mobile number or email";
    document.getElementById("password").placeholder = "Password";
    document.getElementById("login").innerText = "Log in";
    document.getElementById("forgotps").innerText = "Forgot password ?";
    // document.getElementById() = "or"; //或;
    document.getElementById("create").innerText = "Create new account";
    document.getElementById("about").innerText = "About";
    document.getElementById("information").innerText = "Help";
    document.getElementById("more").innerText = "More";
}

function funcTie() {
    document.getElementById("username").placeholder = "Số di động hoặc email";
    document.getElementById("password").placeholder = "Mật khẩu";
    document.getElementById("login").innerText = "Đăng nhập";
    document.getElementById("forgotps").innerText = "Quên mật khẩu?";
    // document.getElementById() = "hoặc"; //或;
    document.getElementById("create").innerText = "Tạo tài khoản mới";
    document.getElementById("about").innerText = "Giới thiệu";
    document.getElementById("information").innerText = "Trợ giúp";
    document.getElementById("more").innerText = "Xem thêm";
}

function funcEsp() {
    document.getElementById("username").placeholder =
        "Número de celular o correo electrónico";
    document.getElementById("password").placeholder = "Contraseña";
    document.getElementById("login").innerText = "Iniciar sesión";
    document.getElementById("forgotps").innerText = "¿Olvidaste tu contraseña?";
    // document.getElementById() = "o"; //或;
    document.getElementById("create").innerText = "Crear cuenta nueva";
    document.getElementById("about").innerText = "Información";
    document.getElementById("information").innerText = "Ayuda";
    document.getElementById("more").innerText = "Más";
}

function funcFra() {
    document.getElementById("username").placeholder = "Numéro mobile ou e-mail";
    document.getElementById("password").placeholder = "Mot de passe";
    document.getElementById("login").innerText = "Se connecter";
    document.getElementById("forgotps").innerText = "Mot de passe oublié ?";
    // document.getElementById() = "ou"; //或;
    document.getElementById("create").innerText = "Créer nouveau compte";
    document.getElementById("about").innerText = "À propos";
    document.getElementById("information").innerText = "Aide";
    document.getElementById("more").innerText = "Plus";
}

function funcBah() {
    document.getElementById("username").placeholder = "Nomor ponsel atau email";
    document.getElementById("password").placeholder = "Kata Sandi";
    document.getElementById("login").innerText = "Masuk";
    document.getElementById("forgotps").innerText = "Lupa Kata Sandi ?";
    // document.getElementById() = "atau"; //或;
    document.getElementById("create").innerText = "Buat akun baru";
    document.getElementById("about").innerText = "Tentang";
    document.getElementById("information").innerText = "Bantuan";
    document.getElementById("more").innerText = "Lainnya";
}

function funcPor() {
    document.getElementById("username").placeholder =
        "Número de celular ou email";
    document.getElementById("password").placeholder = "Senha";
    document.getElementById("login").innerText = "Entrar";
    document.getElementById("forgotps").innerText = "Esqueceu a senha?";
    // document.getElementById() = "ou"; //或;
    document.getElementById("create").innerText = "Criar nova conta";
    document.getElementById("about").innerText = "Sobre";
    document.getElementById("information").innerText = "Ajuda";
    document.getElementById("more").innerText = "Mais";
}
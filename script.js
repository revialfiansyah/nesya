const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("login-error");

const music = document.getElementById("music");

let playing = false;


/* =========================
   LOGIN
========================= */

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();


    /*
       GANTI USERNAME DAN PASSWORD
       SESUAI KEINGINANMU
    */

    const correctUsername = "nesya";
    const correctPassword = "4753";


    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        loginError.textContent = "";

        loginPage.classList.add("hide");

        setTimeout(() => {

            mainPage.classList.add("show");

        }, 500);

    } else {

        loginError.textContent =
            "Username atau password salah ❤️";

    }

});


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    if (!playing) {

        music.play();

        playing = true;

        document.querySelector(".music-button").innerHTML = "🔊";

    } else {

        music.pause();

        playing = false;

        document.querySelector(".music-button").innerHTML = "♫";

    }

}
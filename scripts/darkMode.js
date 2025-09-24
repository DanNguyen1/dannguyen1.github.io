// button logic provided by Coding2GO
// https://www.youtube.com/watch?v=_gKEUYarehE

let darkmode = localStorage.getItem('darkmode')
const themeSwitchBtn = document.getElementById("theme-switch-btn")

const enableDarkmode = () => {
    console.log("enable darkmode!");
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    console.log("disable darkmode!");
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active"){
    enableDarkmode();
}

themeSwitchBtn.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode != "active" ? enableDarkmode() : disableDarkmode()
})
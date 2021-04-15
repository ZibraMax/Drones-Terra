const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const x = window.matchMedia("(prefers-color-scheme: dark)");
//

if (x.matches) {
    toggleSwitch.checked = true;
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        let x = window.matchMedia("(prefers-color-scheme: dark)");
        if (scroll > 300 && localStorage.getItem("theme") == "light") {
            $(".imagenLogo").css("filter", "invert(0)");
        } else {
            $(".imagenLogo").css("filter", "invert(1)");
        }
    });
});

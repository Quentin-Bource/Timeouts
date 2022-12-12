let bgcolor = document.querySelectorAll(".trou")

function switchback() {
    let switchbgcolor = Math.floor(Math.random() * bgcolor.length);

    bgcolor[switchbgcolor].style.background = "red"
}

switchback()
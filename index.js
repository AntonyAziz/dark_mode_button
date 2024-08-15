const InputElement = document.querySelector(".input")
const BodyElement = document.querySelector("body")

InputElement.checked = JSON.parse(localStorage.getItem("mode"))
UpdateBody()

function UpdateBody() {
    if (InputElement.checked) {
        BodyElement.style.background = "black"
    } else {
        BodyElement.style.background = "white"
    }
}


function UpdateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(InputElement.checked))
    
}


InputElement.addEventListener(
    "input", ()=>{
        UpdateBody();
        UpdateLocalStorage();
    }
)



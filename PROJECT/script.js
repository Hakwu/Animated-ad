/* Animation du Logo */
function updateTransition() {
    var el = document.querySelector("div.logo");
    if (el) {
        el.className = "logo1";
    } else {
        el = document.querySelector("div.logo1");
        el.className = "logo";
    }
    return el;
}

var intervalID =
window.setTimeout(updateTransition, 2000);
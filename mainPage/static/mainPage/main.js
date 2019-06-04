scrollList = document.getElementById("scroll-list");

/*const elementHeight = 26.363636016845703;

var timer = null;

scrollList.addEventListener('mousedown', function () {
   console.log("kek");
});

scrollList.addEventListener('scroll', function () {
    console.log("Scrolled");
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        scrollList.scrollTop = Math.round(scrollList.scrollTop / elementHeight) * elementHeight;
        let winHeight = document.documentElement.clientHeight - 55;
        document.getElementById("page-holder").scrollTop = Math.round(scrollList.scrollTop / elementHeight) * winHeight;
        console.log("Srolled");
    }, 200);
}, false);*/

items = [
    "plugins",
    "settings",
    "documentation"
];

for (var i = 0; i < items.length; i++) {
    document.getElementById("ddmenu").innerHTML += "<div onclick='showItem(\"" + items[i] + "\")' class='dropdown-item'>" + items[i] + "</div>";
}

function showItem(s) {
    var winHeight = document.documentElement.clientHeight - 55;
    document.getElementById("page-holder").scrollTop = items.indexOf(s) * winHeight;
    document.getElementById("dropdownMenuButton").innerText = s;
}

window.onresize = function(event) {
    showItem(document.getElementById("dropdownMenuButton").innerText);
};


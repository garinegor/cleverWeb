/*scrollList = document.getElementById("scroll-list");

const elementHeight = 26.363636016845703;

var timer = null;

scrollList.addEventListener('mousedown', function () {
   console.log("kek");
});

scrollList.addEventListener('scroll', function () {
    if (timer !== null) {
        timer = null
    }
    timer = setTimeout(function () {
        scrollList.scrollTop = Math.round(scrollList.scrollTop / elementHeight) * elementHeight;
    }, 200);
}, false);*/

items = [
    "plugins",
    "settings",
    "document"
];

for (var i = 0; i < items.length; i++) {
    document.getElementById("ddmenu").innerHTML += "<div onclick='showItem(\"" + items[i] + "\")' class='dropdown-item'>" + items[i] + "</div>";
}

function showItem(s) {
    document.getElementById("dropdownMenuButton").innerText = s;
    var winHeight = document.documentElement.clientHeight - 56;
    document.getElementById("page-holder").scrollTop = items.indexOf(s) * winHeight;
    setTimeout(function () {

    }, 500);
}

window.onresize = function(event) {
    showItem(document.getElementById("dropdownMenuButton").innerText);
};

document.getElementById("page-holder").onscroll = function () {
    console.log(document.getElementById("page-holder").scrollTop);
};

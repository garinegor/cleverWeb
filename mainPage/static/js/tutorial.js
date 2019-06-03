hint = document.getElementById("hint");

var currstep = 0;

var steps = [
  function() {
    blockScreen();
    document.getElementById("hint-content").innerHTML = "Вы попали в конфигуратор карт ArUco-маркеров";
    hint.style.top = "40%";
    hint.style.left = "40%";
    hint.style.bottom = "none";
    hint.style.right = "none";
    hint.style.width = "20%";
    hint.style.height = "auto";
    document.getElementById("hint-button").onclick = steps[currstep + 1];
    currstep++;
  },
  function() {
    document.getElementById("hint-content").innerHTML = "Масштабирование поля происходит при помощи приближения";
    hint.style.top = "40%";
    hint.style.left = "40%";
    hint.style.bottom = "none";
    hint.style.right = "none";
    hint.style.width = "20%";
    hint.style.height = "auto";
    document.getElementById("hint-button").onclick = steps[currstep + 1];
    currstep++;
  },
  function() {
    hint.style.transition = "top .5s";
    document.getElementById("hint-content").innerHTML = "Для создания метки нажмите на плюсик в правом нижнем углу экрана";
    hint.style.top = "auto";
    hint.style.bottom = "100px";
    hint.style.left = "300px";
    hint.style.right = "none";
    hint.style.width = "300px";
    hint.style.height = "auto";
    document.getElementById("hint-button").onclick = steps[currstep + 1];
    expand();
    currstep++;
  },
  function() {
    document.getElementById("hint-content").innerHTML = "Помимо создания одной или нескольких меток вы можете сгенерировать сетку, к которой будут привязываться метки";
    hint.style.top = "auto";
    hint.style.bottom = "10%";
    hint.style.left = "300px";
    hint.style.right = "none";
    hint.style.width = "350px";
    hint.style.height = "auto";
    document.getElementById("hint-button").onclick = steps[currstep + 1];
    currstep++;
  },
  function() {
    not_expand();
    document.getElementById("hint-content").innerHTML = "Отключить или включить привязку а так же настроить сетку можно с помощью нажатия правой кнопкой мыши на поле";
    hint.style.top = "40%";
    hint.style.left = "40%";
    hint.style.bottom = "auto";
    hint.style.right = "auto";
    hint.style.width = "20%";
    hint.style.height = "auto";
    setTimeout(function() {
      context_menu("65%", "40%");
    }, 500);
    document.getElementById("magnetToggler").onclick = function() {};
    document.getElementById("gridToggler").onclick = function() {};
    document.getElementById("gridSettings").onclick = function() {};
    document.getElementById("hint-button").onclick = steps[currstep + 1];
    currstep++;
  },
  function() {
    document.getElementById("hint-content").innerHTML = "На этом все, теперь попробуйте создать поле!";
    document.getElementById("magnetToggler").onclick = toggleMaget;
    document.getElementById("gridToggler").onclick = toggleGrid;
    document.getElementById("gridSettings").onclick = createGrid;
    hint.style.top = "40%";
    hint.style.left = "40%";
    hint.style.bottom = "auto";
    hint.style.right = "auto";
    hint.style.width = "20%";
    hint.style.height = "auto";
    document.getElementById("hint-button").onclick = unBlockScreen;
    not_expand();
    currstep = 0;
  },
];

function startTraining() {
  steps[currstep]();
}

function blockScreen() {
  document.getElementById("blocker").style.left = "0px";
  document.getElementById("blocker").style.top = "0px";
}

function unBlockScreen() {
  hint.style.transition = "0s";
  document.getElementById("blocker").style.left = "100%";
  document.getElementById("blocker").style.bottom = "100%";
  hint.style.top = "100%";
  hint.style.left = "100%";
  hint.style.width = "0px";
  hint.style.height = "0px";
}

var customContextMenu = [{
  	    name: 'Изменить размеры поля',
  	    title: 'Изменить размеры поля',
  	    fun: function () {
  	        alert('Ща все будет')
  	    }
  	}, {
  	    name: 'Настроить привязку',
  	    title: 'Настроить привязку',
  	    subMenu: [{
            name: 'Центр',
            title: 'Центр',
            img: "/static/css/svg/tick.png",
            fun: function () {
                magnetSettings('center');
            },
            id: "center"
        }, {
            name: 'Правый верхний угол',
            title: 'Правый верхний угол',
            img: "/static/css/svg/cross.svg",
            fun: function () {
                magnetSettings('right-top');
            },
            id: "right-top"
       }, {
            name: 'Правый нижний угол',
            title: 'Правый нижний угол',
            img: "/static/css/svg/cross.svg",
            fun: function () {
                magnetSettings('right-bottom');
            },
            id: "right-bottom"
        }, {
            name: 'Левый верхний угол',
            title: 'Левый верхний угол',
            img: "/static/css/svg/cross.svg",
            fun: function () {
                magnetSettings('left-top');
            },
            id: "left-top"
        }, {
            name: 'Левый нижний угол',
            title: 'Левый нижний угол',
            img: "/static/css/svg/cross.svg",
            fun: function () {
                magnetSettings('left-bottom');
            },
             id: "left-bottom"
       }, {
            name: 'Привязка по углу',
            title: 'Привязка по углу',
            img: "/static/css/svg/tick.png",
            fun: function () {
                magnetSettings('rotate');
            },
            id: "rotate"
        }, {
            name: 'Привязка по масштабированию',
            title: 'Привязка по масштабированию',
            img: "/static/css/svg/cross.svg",
            fun: function () {
                magnetSettings('resize');
            },
            id: "resize"
        }]
  	}, {
  	    name: 'Показать сетку',
  	    title: 'Показать сетку',
  	    fun: toggleGrid
  	}, {
  	    name: 'Настроить сетку',
  	    title: 'Настроить сетку',
  	    fun: createGrid
  	}, {
  	    name: 'Очистить',
  	    title: 'Очистить',
  	    fun: function () {
  	        alert('Ещё не сделал')
  	    }
  	}];

$('.aruco-field-container').contextMenu(customContextMenu,{triggerOn:'contextmenu'});

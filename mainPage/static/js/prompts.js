// Ply.lang({
//   ok: "Готово",
//   cancel: "Отмена"
// });

Ply.factory('getFilename', function (options, data, resolve) {
  options.flags = {
    closeBtn: false,
    closeByEsc: true,
    closeByOverlay: true,
    visibleOverlayInStack: true
  };

  options.onaction = function (ui) {
    console.log(ui);
    return !ui.state || $.post('/aruco/validate_filename', {
        filename: ui.data.filename
      }).fail(function () {
        // $(ui.widget.el.firstChild)[0].innerText = "Файл с таким именем уже существует!";
        // $(ui.widget.el.firstChild).addClass('text-invalid');
        $(ui.widget.el)
            .addClass('ply-invalid')
            .one('input', function () {
              $(this).removeClass('ply-invalid')
            });
    });
  };

  // Use base factory
  Ply.factory.use('base', options, {
    title: 'Введите имя файла карты',
    form: {
      filename: 'Имя файла'
    },
    ok: 'Создать',
    cancel: 'Отмена'
  }, resolve);
});


// app.js
// Ply.dialog('getFilename').done(function (ui) {
//   Ply.dialog('alert', 'Bingo!');
// });

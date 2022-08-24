// ボタン二重クリック制御
$(function () {
    $('form').submit(function () {
        $(this).find(':submit').prop('disabled', 'true');
    });
});

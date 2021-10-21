// 設定兩個 cookie 叫 test1, test2
// 在瀏覽器關閉後會自動被刪除
document.cookie = 'test1=Hello'
document.cookie = 'test2=World'

// 設定一個 username cookie 裡面的值是 Mike，儲存一個月
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

$(document).ready(function () {
    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 768) {
            $('#button').fadeIn(200);
        } else {
            $('#button').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('#button').click(function (event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })
});

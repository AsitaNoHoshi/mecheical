function test(bartext) {
    // 抓取切換箱
    let toggle_menu = document.querySelectorAll('ul.toggle-menu>li');
    toggle_menu.forEach(
        function(items) {
            items.style.display = 'none';
        }
    );
    if (bartext == '升學資訊') toggle_menu[0].style.display = 'block';
    else if (bartext == '大學端校網') toggle_menu[1].style.display = 'block';
    else toggle_menu[2].style.display = 'block';
}
let varr = document.querySelectorAll('.toggle-bar');
// e.path[e.path.indexOf(document)].title 判斷來源網頁
if(varr.length != 0) varr[0].addEventListener('click',function(e) {test(e.target.innerText);},false);
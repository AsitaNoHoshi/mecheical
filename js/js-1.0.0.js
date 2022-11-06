function change_box(e) {
    // 取得選取選項的文字
    let check_text = e.target.innerText;
    // 抓取切換箱
    let toggle_menu = document.querySelectorAll('ul.toggle-menu>li');
    toggle_menu.forEach(
        function(items) {
            items.style.display = 'none';
        }
    );
    if (check_text == '升學資訊') toggle_menu[0].style.display = 'block';
    else if (check_text == '大學端校網') toggle_menu[1].style.display = 'block';
    else toggle_menu[2].style.display = 'block';
}
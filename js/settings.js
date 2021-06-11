// This File Is Applied In Settings Page
// Change Togglebar Item Background When Chosed
function changeBg(el){
    let items = document.getElementsByClassName('item');
    for(let i = 0; i < items.length; i++){
        items[i].style.background = '#fff5';
    }
    el.style.background = '#fffa';
}

// Toggle The New Div When Change Is Clicked
function toggleNew(changer,id){
    let el = document.getElementById(id);
    if(window.screen.width < 600){
        if(el.style.width != '100%'){
            el.style.width = '100%';
            changer.innerHTML = 'إلغاء';
        } else {
            el.style.width = '0';
            changer.innerHTML = 'تغيير';
        }
    } else {
        if(el.style.width != '400px'){
            el.style.width = '400px';
            changer.innerHTML = 'إلغاء';
        } else {
            el.style.width = '0';
            changer.innerHTML = 'تغيير';
        }
    }
}
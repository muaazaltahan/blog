// This File Is Applied In Register Page
// Change The changer-btn background in the toggle-bar "Signup & Login Buttons"
function chgBg(el){
    let btns = document.getElementsByClassName('changer-btn');
    for(let i = 0; i < btns.length; i++){
        btns[i].style.background = '#5f08';
    }
    el.style.background = '#5f0';
}
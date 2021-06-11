// This File Is Applied In All HTML Files
// Sidebar Show & Hide
var sidebar = document.getElementById('sidebar');
function toggleSidebar(){
    if(window.screen.width < 500){
        if(sidebar.style.left != '0px'){
            sidebar.style.left = '0px';
        } else {
            sidebar.style.left = '100%';
        }
    } else if(window.screen.width < 800 && window.screen.width >= 500){
        if(sidebar.style.left != '50%'){
            sidebar.style.left = '50%';
        } else {
            sidebar.style.left = '100%';
        }
    } else {
        if(sidebar.style.left != '75%'){
            sidebar.style.left = '75%';
        } else {
            sidebar.style.left = '100%';
        }
    }
}
// Reset The Sidebar when the window is resized To Prevent Bad Shape Of It.
window.onresize = function(){
    sidebar.style.left = '100%';
}

// AJAX Get The Content From A File
function getContent(path){
    let xhr = new XMLHttpRequest();
    let content = document.getElementById('content');
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            content.innerHTML = this.responseText;
        } else {
            content.innerHTML = 'Loading...';
        }
    }
    xhr.open('GET',path,true);
    xhr.send();
}
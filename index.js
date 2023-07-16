function changeBg(){
    var navbar = document.getElementById('header');
    var scrollvalue = window.scrollY;
    console.log(scrollvalue);
    if(scrollvalue < 695){
        navbar.classList.remove('bgcolor');
    }else{
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll',changeBg);


function showMore() {
    var dots = document.getElementById('point');
    var btnShow = document.getElementById('btnShow');
    var more = document.getElementById('more');
    
    if(more.style.display==="inline"){
        dots.style.display= "inline";
        btnShow.innerHTML = "Read More";
        more.style.display = "none";
    }
    else{
        dots.style.display = "none";
        btnShow.innerHTML = "Read Less";
        more.style.display="inline";
    }
}
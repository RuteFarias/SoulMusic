//Efeito letra banner página principal

var i = 0;
// var A = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
        //console.log(document.getElementById("text").innerHTML);
    }

typeWriter();

//End efeito letra banner

// Menu Responsivo

var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', ()=>{
  if(ul.classList.contains('ativo')){
    ul.classList.remove('ativo');
    document.querySelector('.menu-icon img').src="images/icon.png";
  }else{
    ul.classList.add('ativo');
    document.querySelector('.menu-icon img').src="images/close.png";
  }


})

// End Menu Responsivo
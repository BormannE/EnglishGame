window.onload=function(){
    var bouton = document.getElementById('btnMenu');
    var nav = document.getElementById('nav');
    bouton.onclick = function(e){
        if(nav.style.display=="block"){
            nav.style.display="none";
        }else{
            nav.style.display="block";
        }
    };
};

function PopupCentrer(page, largeur, hauteur, options) {
    var top=(screen.height-hauteur);
    var left=(screen.width-largeur);
    window.open(page,"","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options);
  }
function leiaMais(){
var pontos=document.getElementById("pontos");
var maisTexto=document.getElementById("mais");
var btnLeiaMais=document.getElementById("btnLeiaMais")

if(pontos.style.display === "none"){
    pontos.style.display="inline";
    maisTexto.style.display="none"
    btnLeiaMais.innerHTML="Leia Mais"
}else{
    pontos.style.display="none"
    maisTexto.style.display="inline"
    btnLeiaMais.innerHTML="Leia Menos"
}
}

function vejaMais(){
    var pontos=document.getElementById("ponto");
    var maisTexto=document.getElementById("btn");
    var btnLeiaMais=document.getElementById("btnLeia")
    
    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none"
        btnLeiaMais.innerHTML="Leia Mais"
    }else{
        pontos.style.display="none"
        maisTexto.style.display="inline"
        btnLeiaMais.innerHTML="Leia Menos"
    }
    }
    
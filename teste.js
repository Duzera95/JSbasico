function viraVermelho() {
    
    let div = document.getElementById("teste");
    div.style.backgroundColor= "red";

}

function viraAzul() { 
    let div = document.getElementById("teste");
    div.style.backgroundColor= "blue";
}

function adicionaTexto() { 
    let p =  document.getElementById("teste");
   p.append('O mouse moveu ');
}

function somar() { 
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById ('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = 'A soma entre $(n1) e $(n2) é igual a $(s)'} 
function verificar() { 
    var letra = document.getElementById("char").value;
    letra = letra.toLowerCase();
    if (letra == 'a' || letra =='e' || letra =='i' || letra =='o' || letra =='u')
    alert('Vogal!');
    else 
    alert('Consoante!')
}
    function media(){
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);
    if (nota >=7)
    alert('Aprovado!');
    else if (nota == 10)
    alert('Aprovado com distinção!');
    else 
    alert('Reprovado');
}

var tabela=function(preçodahora,quantidadedehoras){
    var salario=preçodahora*quantidadedehoras
    var inss=salario*0.10
    var fgts=salario*0.11
    
    if(salario<=900){
    ir=0 //IMPOSTO DE RENDA
    totaldescontos=ir+inss
    salarioliquido=salario-totaldescontos
    /////////////////////////////////////
    }else if(salario>900&&salario<=1500){
    ir=salario*0.05
    totaldescontos=ir+inss
    salarioliquido=salario-totaldescontos
    /////////////////////////////////////
    }else if(salario>1500&&salario<=2500){
    ir=salario*0.10
    totaldescontos=ir+inss
    salarioliquido=salario-totaldescontos
    ////////////////////////////////////
    }else if (salario>2500){
    ir=salario*0.20
    totaldescontos=ir+inss
    salarioliquido=salario-totaldescontos}
    
    var objeto={salario:salario,IR:ir,INSS:inss,fgts:fgts,descontos:totaldescontos,final:salarioliquido}
    return objeto
    }
    
    console.log(tabela(6,300))
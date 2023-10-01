function verificar () { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano ) { 
        window.alert('[Erro!] Verifique os dados e tente novamente!')
    }
    else { 
        var fsex = document.getElementsByName('Radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        if (fsex[0].checked) { 
            genero ='Homem'
        } else if (fsex[1].checked){ 
            genero ='Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

}  
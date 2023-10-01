var idade = 50
if (idade < 16) { 
    console.log('Não vota')
} 
else if (idade >=16 && idade <18 || idade > 65)  { 
    console.log('voto opcional')
   } 
   else if (idade >-18) { 
    console.log('voto obrigatorio')
   }

    var agora = new Date
    var hora = agora.getHours()
   console.log(`São exatamente ${hora} horas.`)
   if (hora <12) { 
    console.log('bom dia')}
    else if (hora <=18){
        console.log('boa tarde')} 
        else { console.log('boa noite')
    }
   
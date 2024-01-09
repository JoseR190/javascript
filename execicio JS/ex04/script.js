function contar() {
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let Passo = document.getElementById('txtp')
let res = document.getElementById('res')


 if (ini.value.length == 0 || fim.value.length == 0 || Passo.value.length == 0 ) { 
    res.innerHTML = 'impossivel conta!'
    //window.alert('ERROR Falta dados!')
     }
     else{
       res.innerHTML = 'contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(Passo.value) 
       if( p <= 0) {
       window.alert('passo inválido considerando PASSO 1')
       p = 1
       }
       if ( i < f) {
        //contagem crescenter
        for(let c = i; c <= f; c += p) {
          res.innerHTML += ` ${c}  \u{1F449} ` 
        }
       } else {
        // contagem regressiva
        for(let c = i; c >= f; c -= p) {
      res.innerHTML += ` ${c} \u{1F449}`
        }
       }
      res.innerHTML +=`\u{1F3C1}`
       
     } 
}

function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
    if ( fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('{ERRO] verifique os dados e tente novamente!') 
         } else { 
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var genero = ''
var img =document.createElement('img')
img.setAttribute('id', 'foto')
if (fsex[0].checked) {
    genero = 'Homem'
    if (idade >=0 && idade < 10) {
      // criança
      img.setAttribute('src', 'foto 1 m.webp')
    } else if (idade < 21){
      // jovem
      img.setAttribute('src', 'foto 2 m.webp')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'foto 3 m.webp')
    } else {
      // idoso
      img.setAttribute('src', 'foto 4 m.jpeg')
    }

} else if (fsex[1].checked) {
    genero = 'Mulher'
    if (idade >=0 && idade < 10) {
      // criança
      img.setAttribute('src', 'foto 1 f.jpeg')
    } else if (idade < 21){
      // jovem
      img.setAttribute('src', 'foto 2 f.jpeg')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'foto 3 f.jpeg')
    } else {
      // idoso
      img.setAttribute('src', 'foto 4 f.webp')
    }
 }
 res.style.textAling ='center'
 res.innerHTML = `detectamos ${genero} com ${idade} anos `
res.appendChild(img)
  }

 }

const $form = document.getElementById('form')
let $nombre = document.getElementById('nombre')
let $dni = document.getElementById('dni')
let $aporte = document.getElementById('aporte')

const $aportantes = document.getElementById('aportantes')
const $btn = document.getElementById('btn')
const $total = document.getElementById('total')
let $suma = 0

$btn.addEventListener("click", function () {
    const $div = document.createElement('div')
    $div.innerHTML = `${$nombre.value} ${$dni.value} ${$aporte.value}`
    $aportantes.appendChild($div)
    $suma += parseInt($aporte.value)
    $total.innerHTML = `${$suma}`
    $form.reset()
})
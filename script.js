
function carregar() {
    var msg = document.getElementById('msg')
    var fotos = document.getElementById('fotos')
    var saud = document.getElementById('saudaçao')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var horario = 'AGORA SÃO '+ hora + ' HORAS '+ min + ' MINUTOS.'
    msg.innerText = `AGORA SÃO ${horario} .`
    if(hora >=0 && hora <12) {
        fotos.src = 'dia.png'
        saud.innerHTML = 'BOM DIA'
    } else if(hora >=12 && hora <18) {
        fotos.src = 'tarde.png'
        saud.innerHTML ='BOA TARDE'
    } else {
        fotos.src = 'noite.png'
        saud.innerHTML = 'BOA NOITE'
    }
}

$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(__) _____-____'
    })

    

})

document.addEventListener('DOMContentLoaded', function() {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal');
    setTimeout(function(){
        modalExemplo.show();
    },5000);
})






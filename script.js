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

//function scrollToSection(event, sectionId) {
  //  event.preventDefault(); // Previne a ação padrão do link
    //const element = document.getElementById(sectionId);
    //const headerOffset = 300; // Espaço adicional de 20px
    //const elementPosition = element.getBoundingClientRect().top;
    //const offsetPosition = elementPosition + window.scrollY - headerOffset;
    //window.scrollTo({
    //    top: offsetPosition,
    //    behavior: 'smooth'
    //});
//}

const headerHeight = document.querySelector('.navbar').offsetHeight;

        // Adiciona um ouvinte de evento para todos os links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                // Rolagem suave até o elemento com o ID correspondente
                const targetElement = document.querySelector(this.getAttribute('href'));
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight +60;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });

document.addEventListener('contextmenu', function(event){
    event.preventDefault();
    alert('O clique com o botão direito do mouse está desabilitado nesta página.');
})
$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#button-cancel').click(function() {
        $('form').slideUp()
    })

    $("form").on('submit', function(e) {
        e.preventDefault()

        const enderecoNovaImagem = $('#address-new-image').val()
        const novoItem = $("<li style='display: none'></li>")
        $(`<img src='${enderecoNovaImagem}' />`).appendTo(novoItem)
        $(`<div class="overlay-image">
            <a href='${enderecoNovaImagem}' target='_blank' title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#address-new-image').val("")
    })
})
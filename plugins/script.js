$(document).ready(function() {
    // Inicia o carousel
    $('#carousel-images').slick({
        autoplay: true,
    });

    // Menu responsivo
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(300);
    });

    // Máscara no telefone
    $('#telefone').mask('+55 (00) 00000-0000', {
        placeholder: '+55 (__) _____-____'
    });

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                phoneBR: true // isso depende de você ter adicionado esse método
            },
            mensagem: {
                required: false,
            },
            camisaInteresse: {
                required: false,
            },
        },
        messages: {
            nome: {
                required: 'Por favor, informe seu nome.',
            },
            email: {
                required: 'Por favor, informe seu e-mail.',
                email: 'Por favor, informe um e-mail válido.'
            },
            telefone: {
                required: 'Por favor, informe seu telefone.',
                phoneBR: 'Por favor, informe um telefone válido.'
            },
            mensagem: {
                required: 'Por favor, deixe uma mensagem.',
            },
            camisaInteresse: {
                required: 'Por favor, selecione uma camisa de interesse.',
            },
        },
        submitHandler: function(form) {
            console.log("Formulário enviado:", form);
            form.submit();
        },
        invalidHandler: function(event, validator) {
            let camposInvalidos = validator.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos inválidos. Por favor, corrija-os antes de enviar.`);
            }
        }
    });

    // Ação ao clicar no botão da camisa
    $('.lista-camisas button').click(function() {
        const destino = $('#cadastro');
        const nomeCamisa = $(this).siblings('h3').text(); // pegando h3 dentro do mesmo <li>

        console.log('Camisa clicada:', nomeCamisa); // debug

        $('#camisaInteresse').val(nomeCamisa); // preenchendo input

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});

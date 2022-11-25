$(document).ready(function(){
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        
    },
    messages: {
        nome: 'Por favor seu nome completo aqui',
        cpf:'Digite seu CPF apenas numeros',
        cep:'Digite seu CEP apenas os numero '
    }
})
})
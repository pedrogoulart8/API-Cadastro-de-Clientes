

/////////// CADASTRO DE CLIENTES - API /////////////////


$(document).ready(function(){

    $('form').validate();
    
    $('#cpf').mask('999.999.99-99');
    $('#nascimento').mask('99/99/99');
    $('#cep').mask('99999-999');




    //Ao sair do campo CEP(blur), acionar:
    $('#cep').keyup(function(){
      
      //Resgatar o valor digitado no campo CEP
      let cepDigitado = $('#cep').val();

      //Variavel recebe o conteudo dela, substituindo o "_" por vazio, para não adicionar 9 caracteres que a mascara insere à cada numero do CEP
      cepDigitado = cepDigitado.replaceAll('_','');
      cepDigitado = cepDigitado.replace('-','');
      // Variavel recebe o conteudo dela, substituindo o "-" do CEP por vazio


    //Se CEP digitado for igual à 8, acionar API 
    if(cepDigitado.length == 8){

    
      

      //Enviar o cepDigitado para a API
      $.getJSON(`https://viacep.com.br/ws/${cepDigitado}/json/`,
        function(dados){
        $(`#logradouro`).val(dados.logradouro);
        $(`#bairro`).val(dados.bairro);
        $(`#cidade`).val(dados.localidade);
        $(`#uf`).val(dados.uf);

        // Pular para o próximo campo que o usúario deve preencher
        $(`#numero`).focus();
        }
        ) //Fim da API


    } //Fim do IF


    }) //Fim do evento KEYUP

}) //Fim do evento READY

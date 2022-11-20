//váriavel pro modal lgpd
const lgpdModal = new bootstrap.Modal('#lgpdModal')
//váriavel pro botão do modal lgpd
const btnLgpd = document.querySelector('#btnLgpd');




//Associando o evento de click ao botão lgpd selecionado
btnLgpd.addEventListener('click', function(){
    
    //inserindo chave e valor após o click desse botão. Neste caso para registrar no servidor local
    localStorage.setItem('fechouLgpd','sim');
    

})

//Se a chave, chamada de 'fechouLgpd' for diferente do valor 'sim', ou seja, a pessoa nunca clicou pra aceitar o modal, abrir modal no navegador
if(localStorage.getItem('fechouLgpd') != 'sim'){
    lgpdModal.show();
}



// retirar comentários ao abdicar do formato de landing page! Também retirar das páginas de header e de footer.

// fetch("../pages/header.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("header").innerHTML = data;
//   }).catch(error => {
//     console.log(error)
//     });

// fetch("../pages/footer.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("footer").innerHTML = data;
//   }).catch(error => {
//     console.log(error)
//     });

// dropdown menu
function dropdownMenu() {
  document.querySelector("#dropdown-menu").classList.toggle("active");
};


//Sobre Nós
function iniciarModal(ModalId){
  const fade = document.getElementById(ModalId);
  const modal = document.getElementById('SobreModal');
  fade.classList.add('mod');
  modal.classList.add('mod');
  fade.addEventListener('click', (e) => {
  if(e.target.id == ModalId || e.target.id  == 'fecharModal'){
    fade.classList.remove('mod')
  }
  });
}
//iniciarModal('SobreFade');
const SobreBotao = document.querySelector(".SobreBotao");
SobreBotao.addEventListener('click', () => iniciarModal('SobreFade'));


//validação de CPF
function cadastrese(){
  let cpf = document.getElementById("00NDn00000MPnL5").value;
  cpf = cpf.replace( "." , "" );
  cpf = cpf.replace( "." , "" );
  cpf = cpf.replace( "." , "" );


  if (cpf.length != 11 ||
  cpf == "00000000000" ||
  cpf == "11111111111" ||
  cpf == "22222222222" ||
  cpf == "33333333333" ||
  cpf == "44444444444" ||
  cpf == "55555555555" ||
  cpf == "66666666666" ||
  cpf == "77777777777" ||
  cpf == "88888888888" ||
  cpf == "99999999999"){
  } 
  
  else {
  var soma = 0;
  soma = soma + (parseInt(cpf.substring( 0 , 1))) * 10;
  soma = soma + (parseInt(cpf.substring( 1 , 2))) * 9;
  soma = soma + (parseInt(cpf.substring( 2 , 3))) * 8;
  soma = soma + (parseInt(cpf.substring( 3 , 4))) * 7;
  soma = soma + (parseInt(cpf.substring( 4 , 5))) * 6;
  soma = soma + (parseInt(cpf.substring( 5 , 6))) * 5;
  soma = soma + (parseInt(cpf.substring( 6 , 7))) * 4;
  soma = soma + (parseInt(cpf.substring( 7 , 8))) * 3;
  soma = soma + (parseInt(cpf.substring( 8 , 9))) * 2;
  }

  var resto1 = (soma * 10) % 11;

  if ((resto1 == 10) || (resto1 == 11)) {
  resto1 = 0;
  }

  var soma = 0;
  soma = soma + (parseInt(cpf.substring( 0 , 1))) * 11;
  soma = soma + (parseInt(cpf.substring( 1 , 2))) * 10;
  soma = soma + (parseInt(cpf.substring( 2 , 3))) * 9;
  soma = soma + (parseInt(cpf.substring( 3 , 4))) * 8;
  soma = soma + (parseInt(cpf.substring( 4 , 5))) * 7;
  soma = soma + (parseInt(cpf.substring( 5 , 6))) * 6;
  soma = soma + (parseInt(cpf.substring( 6 , 7))) * 5;
  soma = soma + (parseInt(cpf.substring( 7 , 8))) * 4;
  soma = soma + (parseInt(cpf.substring( 8 , 9))) * 3;
  soma = soma + (parseInt(cpf.substring( 9 , 10))) * 2;

  var resto2 = (soma *10) % 11;
  if ((resto2 == 10) || (resto2 == 11)) {
  resto2 = 0;
  }

  if (
  (resto1 == (parseInt(cpf.substring( 9 , 10)))) &&
  (resto2 == (parseInt(cpf.substring( 10 , 11)))) ) {
  alert("deuserto");
  return true;
  } 
  else {
  alert ("CPF inválido")
  document.getElementById("00NDn00000MPnL5").style.backgroundColor = "#faa";
  document.formulario1.cpf_verifica.focus();
  return false;
  }

}


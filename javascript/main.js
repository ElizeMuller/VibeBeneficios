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
  //alert ("CPF inválido")
  document.getElementById("00NDn00000MPnL5").style.backgroundColor = "#faa";
  document.formulario.cadastrese.focus();
  return false;
  }

}


//validar cnpj
function validarCNPJ() {
  let cnpj = document.getElementById("00NDn00000Ow2Qv").value;
  cnpj = cnpj.replace(/[^\d]+/g,'');

  if(cnpj == '') return false;
   
  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return false;
       
  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0,tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
      return false;
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;
         
  return true;
  
}

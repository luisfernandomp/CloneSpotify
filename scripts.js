 window.onload = () => {
    let form = document.querySelector(".form-control");

    form.addEventListener("keydown", limpar);
 }

function validarCpf() {
    let cpf = document.querySelector("#cpf");
    let label = document.querySelector(".form-label");
    let form = document.querySelector(".form-control")


    let validador = TestaCPF(cpf.value);

    if(!validador){
        let textoCpf = document.querySelector("#cpf-invalido");
        textoCpf.classList.add("cpf-invalido");

        label.classList.add("form-invalido");
        form.classList.add("form-invalido");
        
    }else{
        alert("CPF Válido");
    }
    
}


function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
  if (strCPF == "11111111111") return false;
  if (strCPF == "22222222222") return false;
  if (strCPF == "33333333333") return false;
  if (strCPF == "44444444444") return false;
  if (strCPF == "55555555555") return false;
  if (strCPF == "66666666666") return false;
  if (strCPF == "77777777777") return false;
  if (strCPF == "88888888888") return false;
  if (strCPF == "99999999999") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function limpar(){
    let textoCpf = document.querySelector("#cpf-invalido");
    let label = document.querySelector(".form-label");
    let form = document.querySelector(".form-control");

    label.classList.remove("form-invalido");
    form.classList.remove("form-invalido");
    textoCpf.classList.remove("cpf-invalido");
    console.log("passou aqui");
}

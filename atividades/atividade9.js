function saudacao(horaAtual, nome){
if(horaAtual >=0 && hora <=11){
    console.log(`Bom dia, ${nome}`);
}else if(hora >=12 && hora <=17){
    console.log(`Boa tarde, ${nome}`);
}else{
    console.log(`Boa Noite, ${nome}`);
}
}
let nome = "Nicoly!";
let horaAtual = 20;
saudacao(horaAtual, nome);

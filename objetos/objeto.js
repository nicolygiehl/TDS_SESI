const aluno = {
    nome: "Nicoly",
    idade: 16,
    curso: "Desenvolvimento de Sistemas"
}
console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricola = "2025A";// adicionar
aluno.idade = 18; //alterar
delete aluno.curso;// remover

console.log(aluno);
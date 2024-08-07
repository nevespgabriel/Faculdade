const prompt = require("prompt-sync")();
const db = [];
const aula = require("./aula.js");
const aluno = require("./aluno.js");
const materia = require("./materia.js");
let proximoId = 1;

const modelo = (id = proximoId) => {
    if(aula.index()){
        const idAula = parseInt(prompt("Digite o id da aula: "));
    } else{
        console.log("Cadastre uma aula antes.");
    }
    const idMateriaAula = aula.show(idAula).idMateria;
    if(aluno.index()){
        const idAluno = parseInt(prompt("Digite o id do aluno: "));
    } else{
        console.log("Cadastre um aluno antes.");
    }
    if(aula.show(idAula) && aluno.show(idAluno).idCurso == materia.show(idMateriaAula).idCurso){
        console.log("Cadastro realizado com sucesso!");
        return {
            id, 
            idAula,
            idAluno,
        }
    }
    console.log("ERRO! Dados inválidos")
}

const show = (id) => db.find((el) => el.id == id);

const store = () => {
    const el = modelo();
    if(el){
        proximoId++;
        db.push(el);
    }
}

const index = () => {
    if(db.length == 0){
        console.log("Nenhum cadastro realizado.");
        return false;
    }
    db.forEach(aluno => console.log(aluno));
    return true;
}

const update = () => {
    if(index()){
        const id = parseInt(prompt("Digite o id do elemento que deseja alterar: ").trim());
        const indice = show(id);
        if(indice){
            db[indice] = modelo(id);
        }
    }
}

const destroy = () => {
    if(index()){
        const id = parseInt(prompt("Digite o id do elemento que deseja alterar: ").trim());
        const indice = show(id);
        if(indice){
            db.splice(indice, 1);
            console.log("Elemento excluído com sucesso.");
        }
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}
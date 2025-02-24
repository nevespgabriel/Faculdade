const prompt = require("prompt-sync")();
const db = [];
const aula = require("./aula.js");
const aluno = require("./aluno.js");
const materia = require("./materia.js");
let proximoId = 1;

const modelo = (id = proximoId) => {
    let idAula;
    if(aula.index()){
        idAula = parseInt(prompt("Digite o id da aula: "));
    } else{
        console.log("Cadastre uma aula antes.");
    }
    let idMateriaAula;
    if(aula.show(idAula)){
        idMateriaAula = aula.show(idAula).idMateria;
    }
    let idAluno
    if(aluno.index()){
        idAluno = parseInt(prompt("Digite o id do aluno: "));
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
        const indice = db.findIndex((el) => el.id == id);
        if(indice != -1){
            const novo = modelo(id);
            if(novo){
                db[indice] = novo;
            }   
        } 
    }
}

const destroy = () => {
    if(index()){
        const id = parseInt(prompt("Digite o id do elemento que deseja alterar: ").trim());
        const indice = db.findIndex((el) => el.id == id);
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
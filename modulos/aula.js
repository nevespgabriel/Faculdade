const prompt = require("prompt-sync")();
const db = [];
const professor = require("./professor.js");
const materia = require("./materia.js");
const sala = require("./sala.js");
const alunoAula = require("./alunoAula.js");
let proximoId = 1;

const modelo = (id = proximoId) => {
    let idProfessor;
    if(professor.index()){
        idProfessor = parseInt(prompt("Digite o id do professor: "));
    } else{
        console.log("Cadastre um professor antes.");
    }
    let idMateria;
    if(materia.index()){
        idMateria = parseInt(prompt("Digite o id da matéria: "));
    } else{
        console.log("Cadastre uma matéria antes.");
    }
    let idSala
    if(sala.index()){
        idSala = parseInt(prompt("Digite o id da sala: "));
    } else{
        console.log("Cadastre uma sala antes.");
    }
    if(professor.show(idProfessor) && materia.show(idMateria) && sala.show(idSala)){
        console.log("Cadastro realizado com sucesso!");
        return {
            id, 
            idProfessor,
            idMateria,
            idSala
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
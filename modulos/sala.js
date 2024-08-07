const prompt = require("prompt-sync")();
const db = [];
let proximoId = 1;

const modelo = (id = proximoId) => {
    const sala = parseInt(prompt("Digite a sala: ").trim());
    if(sala > 0){
        console.log("Cadastro realizado com sucesso!");
        return {
            id, 
            sala
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
        if(indice){
            db[indice] = modelo(id);
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
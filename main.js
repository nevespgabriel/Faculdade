const aluno = require("./modulos/aluno.js");
const alunoAula = require("./modulos/alunoAula.js");
const aula = require("./modulos/aula.js");
const curso = require("./modulos/curso.js");
const materia = require("./modulos/materia.js");
const professor = require("./modulos/professor.js");
const sala = require("./modulos/sala.js");
const turno = require("./modulos/turno.js");
const prompt = require("prompt-sync")();

const crud = (objeto) => {
    let resp;
    while(resp != 5){
        console.log("[1] Criar\n[2] Listar\n[3] Atualizar\n[4] Excluir\n[5] Voltar");
        resp = parseInt(prompt("Sua resposta: "));
        switch(resp){
            case 1:
                objeto.store();
                break;
            case 2:
                objeto.index();
                break;
            case 3:
                objeto.update();
                break;
            case 4:
                objeto.destroy();
                break;
            case 5:
                break;
            default:
                console.log("Opção inválida.");
                break;
        }
    }
}

while(true){
    console.log("[1] Turno\n[2] Professor\n[3] Sala\n[4] Curso\n[5] Matéria");
    console.log("[6] Aluno\n[7] Aula\n[8] AlunoAula\n [9] Sair");
    opcao = parseInt(prompt("Sua resposta: "));
    switch(opcao){
        case 1:
            crud(turno);
            break;
        case 2:
            crud(professor);
            break;
        case 3:
            crud(sala);
            break;
        case 4:
            crud(curso);
            break;
        case 5:
            crud(materia);
            break;
        case 6:
            crud(aluno);
            break;
        case 7:
            crud(aula);
            break;
        case 8:
            crud(alunoAula);
            break;
        case 9:
            console.log("Até mais!");
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}
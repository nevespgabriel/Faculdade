const alunos = require("./modulos/aluno.js");
const alunoAulas = require("./modulos/alunoAula.js");
const aulas = require("./modulos/aula.js");
const cursos = require("./modulos/curso.js");
const materias = require("./modulos/materia.js");
const professores = require("./modulos/professor.js");
const salas = require("./modulos/sala.js");
const turnos = require("./modulos/turno.js");
const prompt = require("prompt-sync")();

const crud = (objeto, texto) => {
    let resp;
    while(resp != 5){
        console.log(`\nGERENCIAMENTRO DE ${texto}`)
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
    console.log("[6] Aluno\n[7] Aula\n[8] AlunoAula\n[9] Sair");
    opcao = parseInt(prompt("Sua resposta: "));
    switch(opcao){
        case 1:
            crud(turnos, "TURNOS");
            break;
        case 2:
            crud(professores, "PROFESSORES");
            break;
        case 3:
            crud(salas, "SALAS");
            break;
        case 4:
            crud(cursos, "CURSOS");
            break;
        case 5:
            crud(materias, "MATÉRIAS");
            break;
        case 6:
            crud(alunos, "ALUNOS");
            break;
        case 7:
            crud(aulas, "AULAS");
            break;
        case 8:
            crud(alunoAulas, "ALUNOAULAS");
            break;
        case 9:
            console.log("Até mais!");
            process.exit();
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}
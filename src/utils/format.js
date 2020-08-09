//Dados
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber){
    return subjects[subjectNumber - 1]
}

function convertHoursToMinutes(time){
    /*const hour = time.split(':')[0]
    const minutes = time.split(':')[1]*/
    const [hour, minutes] = time.split(':')

    return Number((hour*60) + minutes) 
}

module.exports = {
    subjects, 
    weekdays,
    getSubject,
    convertHoursToMinutes
}
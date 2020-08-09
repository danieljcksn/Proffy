const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    //Inserir dados
    proffyValue = {
        name: "Daniel Cavalcante",
        avatar: 'https://avatars0.githubusercontent.com/u/45501499?s=460&u=b55653d4ae3b26473ec6392518c07b2f49324dcb&v=4',
        whatsapp: '8998877665',
        bio: "Professor de matemática com vasta experiência e capacitação."
    }

    classValue = {
        subject: "Matemática",
        cost: "20"
        //O proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrarmos a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 900,
            time_to: 4000
        }
    ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    //Consultar as classes de um determinado professor
    //E trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)

    //O horário que a pessoa trabalha, por exemplo, é das 08:00 - 18:00
    //O horário do time_from é (8h) precisa ser menor ou igual ao horáfio solicitado
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
})
//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Quando clicar no botão

//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // //Para cada campo, limpar
    // for(var i = 0; i < fields.length(); i++){
    //     fields[i].value = ""
    // }

    fields.forEach(function(field){
        //Pegar o field do momento e limpa ele
        field.value = ""
        
    })
    fields[0].value = ""
    fields[1].value = ""

    //Colocar  na página: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
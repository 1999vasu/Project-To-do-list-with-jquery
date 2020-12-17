let newTask = $('#newTask')
let ulList =$('#ulList')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')

function addItem(){

    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: newTask.val()
      })
      listItem.click(() => {
        listItem.toggleClass('done')
      })
      ulList.append(listItem)
    newTask.val('')
    toggleInputButtons()
    

}

function clearDone(){
    $('#ulList .done').remove()
    toggleInputButtons()
}


function sortWork(){
    elements = $('#ulList .done').appendTo(ulList)
}


newTask.keypress((event)=>{
    if(event.which==13){
        addItem()
    }
})

function toggleInputButtons(){
    btnReset.prop('disabled',newTask.val() =='')
    btnAdd.prop('disabled',newTask.val() =='')
    btnCleanup.prop('disabled',ulList.children().length<1)
    btnSort.prop('disabled',ulList.children().length<1)

    

}

btnAdd.click(addItem)

btnReset.click(()=>{
    newTask.val('')
    toggleInputButtons()
})

btnCleanup.click(clearDone)
btnSort.click(sortWork)

newTask.on('input',()=>{
    toggleInputButtons()
})


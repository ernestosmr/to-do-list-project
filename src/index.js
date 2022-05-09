
const mainSection = document.getElementById('taskContainer')
const inputCheckBox = []
const id = []
let taskNumber = 0;
function errorInput(){
    const errorDiv = document.getElementById('div-error')
    errorDiv.classList.remove('invisible')
    setTimeout(() =>{
        errorDiv.classList.add('invisible')
    }, 2000)
}

function inputChecked(){
    inputCheckBox[inputCheckBox.length - 1].addEventListener('click', () => {
        if(inputCheckBox[inputCheckBox.length - 1].checked){
            document.getElementById(id[id.length - 1]).classList.add('checked');
        }else{
            console.log('still working')
        }
    })
}

function testResults (form){
    const testInput = form.inputbox.value
    const testDate = form.inputdate.value
    if(testInput === '' || testDate === ''){
        return errorInput()
    }
    taskNumber += 1;
    const article = document.createElement('article')
    const title = document.createElement('h2')
    const p = document.createElement('p')
    const inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    inputCheck.setAttribute('id', 'inputCheck')
    article.classList.add('task-contain')
    article.setAttribute('id', taskNumber)
    article.appendChild(title)
    article.appendChild(p)
    article.appendChild(inputCheck)
    mainSection.appendChild(article)
    title.textContent = testInput
    p.textContent = testDate
    inputCheckBox.push(inputCheck)
    id.push({
        id: taskNumber
    })
    inputChecked();
    form.reset()   
}





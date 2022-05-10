
const mainSection = document.getElementById('taskContainer')
let taskNumber = 0;
const inputCheckBox = []
function errorInput(){
    const errorDiv = document.getElementById('div-error')
    errorDiv.classList.remove('invisible')
    setTimeout(() =>{
        errorDiv.classList.add('invisible')
    }, 2000)
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
    title.textContent = testInput
    p.textContent = testDate
    mainSection.appendChild(article)
    inputCheckBox.push(inputCheck)
    inputCheck.addEventListener('click', () => {
        if(inputCheck.checked){
            article.classList.add('checked')
        } else{
            article.classList.remove('checked')
        }
    })
    form.reset()   
}





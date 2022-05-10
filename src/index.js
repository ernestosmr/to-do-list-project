
const mainSection = document.getElementById('taskContainer')
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
    const article = document.createElement('article')
    const title = document.createElement('h2')
    const p = document.createElement('p')
    const deletebtn = document.createElement('button')
    const inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    inputCheck.setAttribute('id', 'inputCheck')
    article.classList.add('task-contain')
    article.appendChild(title)
    article.appendChild(p)
    article.appendChild(inputCheck)
    article.appendChild(deletebtn)
    title.textContent = testInput
    p.textContent = testDate
    deletebtn.textContent = '🗑️'
    deletebtn.setAttribute('class', 'delete-btn')
    mainSection.appendChild(article)
    deletebtn.addEventListener('click', () => {
        article.style.animationName = 'delete'
        setTimeout(() => {
            article.classList.add('invisible')
        }, 1000)
    })
    inputCheck.addEventListener('click', () => {
        if(inputCheck.checked){
            article.classList.add('checked')
        } else{
            article.classList.remove('checked')
        }
    })
    form.reset()   
}





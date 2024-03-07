const form = document.querySelector('form')
const fruit = document.querySelectorAll('.fruit')
const fruits = document.querySelector('.fruits')

form.addEventListener('submit',function(event){
    event.preventDefault()

    fruitToAdd = document.getElementById('fruit-to-add')
    newLi = document.createElement('li')
    newLi.innerHTML = fruitToAdd.value + "<button class = 'delete-btn'>x</button>"
    fruits.appendChild(newLi)
})

fruits.addEventListener('click', function(event){

    if(event.target.classList.contains('delete-btn'))
    {
        const fruitToDelete = event.target.parentElement

        fruits.removeChild(fruitToDelete)

    }

})
const name= document.getElementById('cardName')
const email= document.getElementById('cardEmail')
const password= document.getElementById('cardPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('password must be longer than 6 characters')



    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',')

}
    }
})
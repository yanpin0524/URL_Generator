const form = document.querySelector('#url-form')
const submitBtn = document.querySelector('#url-submit')

submitBtn.addEventListener('click', (event) => {
  form.classList.add('was-validated')
  console.log('hi')
})

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
})
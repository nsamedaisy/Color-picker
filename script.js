const colorInput = document.querySelector('#color')
const hexInput = document.querySelector('#hex')

colorInput.addEventListener('input', () => {
  const color = colorInput.value
  hexInput.value = color
  document.body.style.backgroundColor = color
})

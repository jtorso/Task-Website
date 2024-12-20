const input = document.getElementById('add')
const btn = document.getElementById('add-button')
const list = document.getElementById('list-container')

btn.addEventListener('click', ()=> {
  if (input.value === '') {
    window.alert('Write a task')
  } else {
    let listText = document.createElement('li')
    listText.textContent = `${input.value}`
    list.appendChild(listText);
    let span = document.createElement('span')
    span.textContent = '\u00d7'
    listText.appendChild(span)
  }
  input.value = '';
  saveData()
})

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    saveData()
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
    saveData()
  }
})

function saveData() {
  localStorage.setItem('data', list.innerHTML)
}

function data() {
  list.innerHTML = localStorage.getItem('data')
}

data()
const notesContainer = document.getElementById('app');
const addNote = notesContainer.querySelector('.add-note')

getNotes().forEach(element => {
  const newElement = createNoteElement(element.id, element.content)
  notesContainer.insertBefore(newElement, addNote)
});

addNote.addEventListener('click', () => {
  addNotes()
})

function getNotes(){
  return JSON.parse( localStorage.getItem('stickynotes-note') || '[]' )
}

function saveNotes( notes ){
  localStorage.setItem('stickynotes-note', JSON.stringify(notes))
}

function addNotes(){
  const notes = getNotes()
  const newObject = {
    id: Math.floor(Math.random() * 1000000),
    content: ''
  }
  const newNotes = createNoteElement(newObject.id, newObject.content)
  notesContainer.insertBefore(newNotes, addNote)

  notes.push(newObject)
  console.log(notes)
  saveNotes(notes)
}

function createNoteElement(id, content){
  const textArea = document.createElement('textarea')
  textArea.value = content
  textArea.classList.add('note')
  textArea.placeholder = 'Empty Note'

  textArea.addEventListener('change', () => {
    updateNotes(id, textArea.value)
  })
  
  textArea.addEventListener('dblclick', () => {
    const doDelete = confirm('Want to delete?')

    if(doDelete){
      deleteNotes(id,textArea)
    }
  })

  return textArea
}

function updateNotes(id, newContent){
  const note = getNotes();
  const UpdateNote = note.find( note => note.id === id )
  UpdateNote.content = newContent

  saveNotes(note)
}

function deleteNotes( id, element ){
  const notes = getNotes();
  const targetNote = notes.filter( note => note.id !== id)
  saveNotes(targetNote)
  element.remove()
}


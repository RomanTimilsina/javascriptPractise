const notesContainer = document.getElementById('app');
const addNote = notesContainer.querySelector('.add-note');

getNotes().forEach(note => {
  const noteElement = createNoteElement(note.id , note.content);
  notesContainer.insertBefore(noteElement, addNote)
})

addNote.addEventListener('click', () => addNotes())

function getNotes(){
  return JSON.parse(localStorage.getItem('stickynotes-note') || '[]');
}

function saveNotes(notes){
 localStorage.setItem('stickynotes-note', JSON.stringify(notes))
}

function createNoteElement(id, content){
  const element = document.createElement('textArea');
  
  element.classList.add('note');
  element.value = content;
  element.placeholder = 'Empty sticky notes';

  element.addEventListener('change', () => {
    updateNotes(id , element.value)
  })

  element.addEventListener('dblclick', () => {
    const doDelete = confirm("Sure to delete?");
    
    if(doDelete)
    {
    deleteNotes( id, element)
  }
})

  return element;
}

function updateNotes(id, newContent){
  const notes = getNotes();
  const targetNote = notes.find(note => note.id === id)
  targetNote.content = newContent
  
  saveNotes(notes)
}

function deleteNotes(id , element){
  const notes = getNotes();
  const targetNote = notes.filter(note => note.id !== id)
  saveNotes(targetNote)
  element.remove()
}

function addNotes(){
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000000),
    content: ''
  }
  const newNote = createNoteElement(noteObject.id, noteObject.content)

  notesContainer.insertBefore(newNote, addNote)
  notes.push(noteObject);
  saveNotes(notes)
}
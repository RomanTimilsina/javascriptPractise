document.querySelectorAll('.dropzone__input').forEach(inputElement => {

  const dropZoneElement = inputElement.closest('.dropzone');

  dropZoneElement.addEventListener('click', (e) => {
    inputElement.click();
  })

  dropZoneElement.addEventListener('change', (e) => {
    if(inputElement.files.length){
      updateThumbnail(dropZoneElement, inputElement.files[0])
    }
  })


  dropZoneElement.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZoneElement.classList.add('dropzone--over');
  })
 
  dropZoneElement.addEventListener('dragleave', e => {
      dropZoneElement.classList.remove('dropzone--over')
    })

  dropZoneElement.addEventListener('drop', (e) => {
    e.preventDefault();
    
    inputElement.files = e.dataTransfer.files
    updateThumbnail(dropZoneElement, e.dataTransfer.files[0])
    dropZoneElement.classList.remove('dropzone--over')
    
  })
})

function updateThumbnail(element, file){

let thumbnail = element.querySelector('.dropzone__thumb');

if(element.querySelector('.dropzone__prompt')){
  element.querySelector('.dropzone__prompt').remove()
}

if(!thumbnail){
  thumbnail = document.createElement('div');
  thumbnail.classList.add('dropzone__thumb');
  element.appendChild(thumbnail)
}

thumbnail.dataset.label = file.name;
if(file.type.slice(0,6) === 'image/')
{
  const reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = () => {
    thumbnail.style.backgroundImage =`url('${reader.result}')`;
  }
}else{
  thumbnail.style.backgroundImage = null
}

}


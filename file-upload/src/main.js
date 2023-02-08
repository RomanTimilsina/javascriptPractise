
document.querySelectorAll(".dropzone__input").forEach((inputElement) => {

	const dropZoneElement = inputElement.closest(".dropzone");

  dropZoneElement.addEventListener('click', (e) => {
    inputElement.click();
  })

  dropZoneElement.addEventListener('change', (e) => {
    if(inputElement.files.length){
      updateThumbnail(dropZoneElement, inputElement.files[0])
    }
  })

  dropZoneElement.addEventListener("dragover", e => {
		e.preventDefault();
		dropZoneElement.classList.add("dropzone--over");
  });

  ['dragleave','deagend'].forEach(type => {
    dropZoneElement.addEventListener(type, e => {
      dropZoneElement.classList.remove('dropzone--over')
    })
  })

  dropZoneElement.addEventListener('drop', (e) => {
    e.preventDefault();
    if(e.dataTransfer.files.length){
      inputElement.files = e.dataTransfer.files;

      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);

      dropZoneElement.classList.remove('dropzone--over');
    }
  })
});

function updateThumbnail(dropZoneElement, file){
  let thumbnail = dropZoneElement.querySelector('.dropzone__thumb');

  //runs first time when there's only prompt
  if(dropZoneElement.querySelector('.dropzone__prompt')){
    dropZoneElement.querySelector('.dropzone__prompt').remove();
  }
  

  //runs first time when there's no thumbnail
  if(!thumbnail){
     thumbnail = document.createElement('div');

    thumbnail.classList.add('dropzone__thumb');
    dropZoneElement.appendChild(thumbnail);
  }

  thumbnail.dataset.label = file.name;
  console.log(file.type.slice(0,6))
  if(file.type.slice(0,6) === 'image/'){
   const reader = new FileReader();

   reader.readAsDataURL(file);
   reader.onload = () => {
    thumbnail.style.backgroundImage = `url('${reader.result}')`;
   }
  }else{
    thumbnail.style.backgroundImage = null;
  }
}



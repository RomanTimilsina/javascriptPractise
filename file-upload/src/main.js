
document.querySelectorAll(".dropzone__input").forEach((inputElement) => {

	const dropZoneElement = inputElement.closest(".dropzone");

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





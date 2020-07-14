function drop(event) {
    event.preventDefault();
    files = event.dataTransfer.files;
    var filesCount = files.length;
    console.log(files.filelist);
    
   if (files.type.match('image/*')) {
    var fileReader = new FileReader();
    fileReader.onload = function(e) {
        console.log("hello");

      var img = document.createElement("img");
      divToDrop.appendChild(img);
      img.src = e.target.result;

   }
}
}



function allowDrop(event) {
    event.preventDefault();
    event.target.style.border = "4px dotted green";
  } 
  
 // fileReader.readAsDataURL(file);

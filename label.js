var counter = -1;

var images =  ['images/p4.JPEG', 'images/p5.JPEG', 'images/p6.JPEG', 'images/p7.JPEG', 'images/lake.jpg'];

 //function to fetch urls of images based on indices entered into "From" and "To" which are then stored in array called srcArray 
     //Click Go to activate and next to display first image

var images_cur = [];
  
var retrieve = function () {

         var fromIndex = document.getElementById("From").value;
         var toIndex = document.getElementById("To").value;
     
         for (var i = fromIndex; i <= toIndex; i++){
           images_cur.push(images[i]);
         } 
         window.imageArray  = images_cur; 
               
     }

  
   //NB: removed previous function to prevent going back to previously labelled images
       
    //function for moving to next image.  counter is variable which refers to index of url in srcArray
    
next.onclick = function () {
        anno.reset();
        document.getElementById("currentImage").src = imageArray[++counter];
    }


     //deletes all annotations
    
var removeAnno =  function () {
       anno.reset();
     }
     
     
  //function gets all annotations including extraneous details. Still working on extracting the pertinent ones
    
var submit = function () {
       var annotations = JSON.stringify(anno.getAnnotations());
       console.log(annotations); 
     }  
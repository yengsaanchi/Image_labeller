var counter = -1;
var imageUrls =  ['http://emojipedia-us.s3.amazonaws.com/cache/8b/bd/8bbd3405b0a197214e229428c23dbe60.png', 'http://emojipedia-us.s3.amazonaws.com/cache/05/d1/05d1ba284ee1a3bfe4e0f68988baafb9.png', 
     'http://emojipedia-us.s3.amazonaws.com/cache/99/4c/994c5997c7a509703cc53ec2000bb258.png', 'http://emojipedia-us.s3.amazonaws.com/cache/59/0c/590c832e73a472c416bf9d8bfdd02a4a.png'];
     
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
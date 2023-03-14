var index = 0

function changecolor(){

   var color = ["red", "yellow", "green", "blue", "orange" ]

   document.getElementsByTagName("body")[0].style.background = color[index++];
   
   if(index > color.length - 1)
   index = 0;
}
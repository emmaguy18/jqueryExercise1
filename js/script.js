//Jquery code for if image link missing//
// $(document).ready(function (){
//   console.log("jquery has loaded");
// });

//error event handler//
// $("#butterfly")
//   .error(function(){
//     alert("Handler for .error() called.")
//   })
//   .attr("src", "missing.jpg");

//replaceWith API//
//replacing image with text//
$("#butterfly").replaceWith("<h1>Butterfly</h1>");
//replacing inmage with another image using id//
//$("#butterfly").replaceWith("#DefaultImg");

//blur event//
$("#inputField").blur(function(){
  console.log("this field is blurred")
})

//focus event//
$("#inputField").focus(function(){
  console.log("this field is focussed")
})

//val API//
$("#myForm").submit(function(){
  event.preventDefault();
  var value= $("#inputField").val();
  console.log("the value is " + value);
})

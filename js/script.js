//Alert function found online //
function submitFunction() {

	alert("Thank you for contacting us. We will be in touch soon");
    window.location.href = "contact.html";
}



//Image carousel from W3Schools//
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("myPics");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 3 seconds
}





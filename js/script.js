
function submitFunction() {

	alert("Thank you for contacting us. We will be in touch soon");
	window.location.href = "index.html";
}




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
    setTimeout(carousel, 2000); // Change image every 2 seconds
}





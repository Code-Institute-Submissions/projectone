function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	if(x== "") 
		alert ("Name must be filled in");
	return false;
	}
}
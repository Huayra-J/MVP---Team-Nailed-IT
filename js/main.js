function openNav() {
	document.getElementById("open").style.display = "none";
	document.getElementById("nav").style.width = "100%";
}
function closeNav() {
	document.getElementById("nav").style.width = "0";
	document.getElementById("open").style.display = "block";
}
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
			document.getElementById("myMenu").style.display = "block";
    }
		else {
      li[i].style.display = "none";
    }
  }
}


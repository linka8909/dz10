let ar = document.querySelectorAll(".s");

for (var i = 0; i < ar.length; i++) {
	ar[i].addEventListener("click", butTon)
}

function butTon() {
	let id = document.getElementById("so").style.display = "block";
	id.classlist.toggle(div:hover);
}

function myFunction() {
	var n_ = document.getElementById("n").value;
	var m_ = document.getElementById("m").value;
	var inp;
	var p_;
	for (var i = n_ - 1; i >= 0; i--) {
		for (var j = m_ - 1; j >= 0; j--) {
			inp = document.createElement("input");
			inp.type = "number";
			document.body.appendChild(inp);
			// document.body.appendChild(" ");
		}
		p_ = document.createElement("p");
		document.body.appendChild(p_);

	}
}
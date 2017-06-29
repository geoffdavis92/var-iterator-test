var n = 0;

var input = document.getElementById('input'),
	output = document.getElementById('output');

input.addEventListener('click', function(e) {
	n += 1;
	console.log(n)
});

var checkN = setInterval(function() {
	var test = parseInt(output.innerHTML);
	if (test !== n) { 
		console.log(test, n)
		output.innerHTML = n;
	}
}, 1047);
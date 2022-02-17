//make squares
for (let i = 1; i <= 1000; i++) {
			const box = document.createElement('div');
			box.classList.add('box');
			$('#wrapper')[0].appendChild(box);
}

const randColorBlock = document.querySelectorAll('.box');

function addColors() {
	randColorBlock.forEach(e=>{
		e.style.backgroundColor = 'white';
	})
}

addColors()

//change border
$('#wrapper')[0].addEventListener('click', () => {
	addColors()
	x = randomColor();
	randColorBlock.forEach(event=>{
		event.style.borderColor = x;
	})

	function randomColor() {
		let chars = "1234567890abcdef";
		let colorLength = 6;
		let color = ""
		for (let i = 1; i <= colorLength; i++) {
			let randomColor = Math.floor(Math.random() * chars.length);
			color += chars.substring(randomColor, randomColor+1)
		}
		return "#"+color;
	}
});


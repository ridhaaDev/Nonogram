let completeGame = [
	[' ', 'hh', 'hh', 'hh', 'hh', 'hh'],
	['vh', 1, 0, 0, 0, 1],
	['vh', 1, 1, 0, 1, 1],
	['vh', 0, 1, 1, 1, 0],
	['vh', 1, 1, 0, 0, 0],
	['vh', 1, 1, 0, 0, 0]
]

let verticalHints = [0, [2, 2], 4, 1, 2, 2]
let horizontalHints = [[1, 1], [2, 2], 3, 2, 2]

function renderGame(matrix, selector1) {

	let selector = document.getElementById(selector1)

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix.length; j++) {

			let cell = matrix[i][j]

			if (cell == "vh") {
				selector.innerHTML += 
					`<span class = 'label'>${horizontalHints[i - 1]}</span>`
			} else if (cell == "hh") {
				selector.innerHTML += 
					`<span class = 'label'>${verticalHints[j]}</span>`
			} else if (cell === 3) {
				selector.innerHTML += 
					(`<div class = 'cell' onclick = 'toBlack(this, ${i}, ${j})' oncontextmenu = 'toRed(this, ${i}, ${j})'>${cell}</div>`)
			} else {
				selector.innerHTML += 
					`<span class = 'label'>${completeGame[i][j]}</span>`
			}
		}	
	}
}


// let userGame = [
// 	['hh', 'hh', 'hh', 'hh', 'hh', 'hh'],
// 	['vh', 2, 2, 2, 2, 2],
// 	['vh', 2, 2, 2, 2, 2],
// 	['vh', 2, 2, 2, 2, 2],
// 	['vh', 2, 2, 2, 2, 2],
// 	['vh', 2, 2, 2, 2, 2],
// ]

// let use
let userGame = JSON.parse(JSON.stringify(completeGame));

for (var i = 0; i < completeGame.length; i++) {
	for (var j = 0; j < completeGame.length; j++) {
		if (typeof completeGame[i][j] === "number") {
			userGame[i][j] = 3
		}
	}
}

function toBlack(selector, i, j) {
	selector.style.backgroundColor = "black"
	userGame[i][j] = 1
}

function toRed(selector, i, j) {
	
	selector.style.backgroundColor = "red"
	// font-size: 222px; color: #d00; font-weight: bold; font-family: helvetica,arial; line-height: 1;
	userGame[i][j] = 0
}

document.addEventListener("contextmenu", function(e) {
	e.preventDefault()
})

function checkGame() {

	let win = true;
	for (var i = 0; i < completeGame.length; i++) {
		for (var j = 0; j < completeGame.length; j++) {

			if(typeof completeGame[i][j] == "number") {

				if (userGame[i][j] !== completeGame[i][j]) {
					win = false
					break
				}

			}
			
		}
	}

	if (win) {
		alert("You win!")
	} else {
		alert("You lose")
	}
}



renderGame(userGame, "nono_game")
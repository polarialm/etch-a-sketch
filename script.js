const grid = document.getElementById('grid')
const defNum = 16

function randRGB () {
    return (`${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`)
}

function createColumn (i, num) {
    const row = document.createElement('div')
    row.setAttribute('data-key', i)
    row.classList.add('row')
    grid.appendChild(row)
    for (let n = 0; n < num; n++) {
        createSquares(n, row)
    }
    attachListen()
}

function createSquares (n,row) {
    const square = document.createElement('dov')
    square.setAttribute('data-key', n)
    square.classList.add('square')
    row.appendChild(square)
}

function attachListen () {
    const squares = Array.prototype.slice.call(document.getElementsByClassName('square'))
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.cssText = `background-color: rgb(${randRGB()})`
        })
    });
    
}


function drawGrid(num) {
    for (let i = 0; i < num; i++) {
        createColumn(i, num)
    }
}

drawGrid(defNum)

const button = document.querySelector('button')

button.addEventListener('click', () => {
    let squareNum = Number(prompt("Enter the number of squares per side for the new grid from 1 to 100."))
    if ( typeof(squareNum) != 'number' || squareNum < 1 || squareNum > 100) {
        alert("Invalid input. You can only enter numbers from 1 to 100.")
    } else {
        eraseGrid()
        drawGrid(squareNum)
    }
})






function eraseGrid () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}



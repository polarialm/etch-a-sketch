const container = document.getElementById('container')

function createRows (i) {
    const row = document.createElement('div')
    row.setAttribute('data-key', i)
    row.classList.add('row')
    container.appendChild(row)
    for (let n = 0; n < 16; n++) {
        createSquares(n, row)
    }
}

function createSquares (n,row) {
    const square = document.createElement('dov')
    square.setAttribute('data-key', n)
    square.classList.add('square')
    row.appendChild(square)
}

function drawGrid() {
    //Create a 16x16 grid of square divs
    // I think I'm going to use a for loop to create each div, then append them to the container
    // Create a for loop that continues a for loop that executes 16 times (execute the foor loop inside for each row), each time we'll create a row div.
    for (let i = 0; i < 16; i++) {
        createRows(i)
    }
    // Create a for loop that continues as long the iterator is smaller than 16, everytime create a 16px long cube
        // Everytime you're done create square, add the class "square" to it.
    // Append to container
}

drawGrid()
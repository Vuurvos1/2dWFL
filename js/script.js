const grid = document.querySelector('.grid')

function setup() {
    // create grid
    for (let i = 0; i < 16; i++) {
        // fill image choises
        for (let j = 0; j < data.length; j++) {
            // data refrence
            str = `<img src="img/${data[j].pic}" alt="${j}">`
            grid.innerHTML += str;
        }              
    }
}

setup ();


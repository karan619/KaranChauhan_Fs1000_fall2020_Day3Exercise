let number = document.getElementById("number")
let container = document.getElementById('container')

function printNumber() {
    for (let i = 1; i <= 100; i++) {

        if (i % 2 === 0) {
            container.innerHTML += `<p>${i} number is even</p>`

        } else {
            container.innerHTML += `<p>${i} number is odd</p>`
        }



    }
}


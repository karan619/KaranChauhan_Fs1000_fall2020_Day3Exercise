let length = document.getElementById('length')
let breadth = document.getElementById('breadth')


function calculateArea() {
    let value1 = length.value
    let value2 = breadth.value

    if (value1 === "" || value2 === "") {
        alert("Please enter the value")
    } else {

        let area = value1 * value2
        alert(`The area is ${area}`)
    }


}


let userVal = document.getElementById('username')
let userPas = document.getElementById('password')

let existUsr = [
    {
        username: "Admin",
        password: "TheMaster"
    }
]


function checkValidation() {

    userVal = username.value.trim()
    userPas = password.value.trim()

    for (let i = 0; i < existUsr.length; i++) {
        if (userVal === "" && userPas === "") {
            alert('Please enter some value')

        }
        else if (userVal === existUsr[i].username && userPas === existUsr[i].password) {
            alert("Welcome")


        }
        else {
            alert("incorrect usnername or password")

        }
    }








}


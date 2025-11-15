let password = document.getElementById('isright').value;
let password2 = document.getElementById('isleft').value;


function passwordvalidator(password) {
    password = document.getElementById('isright').value;

    if (password.length >= 8 && /[A-Z\s]+/.test(password) && /[a-z\s]+/.test(password) && /[0-9\s]+/.test(password)) {
        document.getElementById('passwordlable').style.color = "green";
        document.getElementById('passwordlable').innerText = "Password is valid";


    } else if (/[A-Z\s]+/.test(password) && /[a-z\s]+/.test(password) && /[0-9\s]+/.test(password)) {
        document.getElementById('passwordlable').style.color = "red";

        document.getElementById('passwordlable').innerText = "please enter a 8 digit long password";
    } else if (/[a-z\s]+/.test(password) && /[0-9\s]+/.test(password)) {
        document.getElementById('passwordlable').style.color = "red";



        
        document.getElementById('passwordlable').innerText = "please enter a upper case";
    } else if (/[0-9\s]+/.test(password)) {
        document.getElementById('passwordlable').style.color = "red";

        document.getElementById('passwordlable').innerText = "please enter a lower case";

    } else if (password === "") {
        document.getElementById('passwordlable').innerText = "";

    } else {
        document.getElementById('passwordlable').style.color = "red";

        document.getElementById('passwordlable').innerText = "plese enter a number";

    }
}

function islefta() {
    password = document.getElementById('isright').value;
    password2 = document.getElementById('isleft').value;
    if (password != password2 || password.length<=7  ) {
        document.getElementById('submitbutton').disabled = true;
        document.getElementById('passwordlable2').innerText = "Password does not match";


    } else {
        document.getElementById('submitbutton').disabled = false;
        document.getElementById('passwordlable2').innerText = "";
        
    }
}

// let isloggedin=document.getElementById('isloggedin');
// let get=localStorage.getItem(isloggedin)
// if(isloggedin===get){
//     console.log('absjh');

// }
function isuser() {
    let us = document.getElementById('isloggedin').value;
    let loc = localStorage.getItem(us)
    if (loc) {
        document.getElementById('lable').innerText = "User name is Not available";
        console.log('a');
        document.getElementById('lable').style.color = "red";

    } else if (us === "") {
        document.getElementById('lable').innerText = "";

    } else {
        document.getElementById('lable').innerText = "User name is Availble";
        console.log('b');
        document.getElementById('lable').style.color = "green";

    }

}

document.getElementById('submit').addEventListener("submit", (event) => {
    event.preventDefault(Event)
    let username = document.getElementById('isloggedin').value;
    let get = localStorage.getItem(username)
    // console.log(username);
    // console.log(get);
    let email = document.getElementById('email').value;

    let isemail = localStorage.getItem(get)
    console.log(isemail);
    // let set=localStorage.setItem("userloggedi11",email+1)
    // if (get) {
    // alert("User Already Exist Redirecting To Login Page")
    // location.href="login.html"
    // islefta()
    Toastify({
        text: "Account created successfully",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: true,
        gravity: "top",
        position: "center", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        
    }).showToast();
    Toastify({
        gravity: "top",
        position: "center", 
        text: "Riderecting to Login page",
        
        duration: 3000
        
        }).showToast();
    setTimeout(() => {
        location.href = "login.html"

    }, 2000);
    let set = localStorage.setItem("userloggedi11", email + 1)


    // }
    // else{
    let set1 = localStorage.setItem(username, email)

    // }



});

function password1() {
    let x = document.getElementById('isright')
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('eye1.png').src = "view.png"

    } else {
        x.type = "password";
        document.getElementById('eye1.png').src = "eye.png"


    }

    console.log('aaaa');

}

function password3() {
    let p = document.getElementById('isleft')
    if (p.type === "password") {
        p.type = "text";
        document.getElementById('eye.png').src = "view.png"

    } else {
        p.type = "password";
        document.getElementById('eye.png').src = "eye.png"


    }

    console.log('aaaa');

}
// Toastify({

//     text: "This is a toast",

//     duration: 3000

// }).showToast();
document.getElementById('submit').addEventListener("submit",(Event)=>{
    event.preventDefault(Event);
    let password = document.getElementById('password').value;
    // password2 = document.getElementById('isleft').value;
    if (password.length < 8) {
        document.getElementById('submit').disabled = true;
        // document.getElementById('passwordlable2').innerText="Password is incorrect";
        Toastify({
            text: "Incorrect Password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(23, 29, 28),rgb(185, 201, 61))",
            },
            onClick: function(){} // Callback after click
          }).showToast();

    } else {
        document.getElementById('submit').disabled = false;
        let user=document.getElementById('username').value;
    
    let email=document.getElementById('email').value
    let username=localStorage.getItem(user)
    console.log(user);
    
    console.log(email);
    console.log(username);
    
    if (email===username)
     {
        console.log('useris there');
        setTimeout(() => {
            
            location.href="index.html"
        }, 1500);
        Toastify({
            gravity: "bottom",
        position: "center", 
            text: "Login Successful",
            
            duration: 3000
            
            }).showToast();
        // let userloggedin=localStorage.setItem(email,"userhasloggedin")
        localStorage.setItem("userloggedin",email+user)
        
        

    } else {
        console.log('usernotfound');
        Toastify({
            gravity: "bottom",
        position: "center", 
            text: "Please enter correct details",
            
            duration: 3000
            
            }).showToast();
        console.log(document.getElementById('main'));

    }

    }
    
});

function password1() {
    let x=document.getElementById('password')
    if(x.type==="password"){
        x.type="text";
        document.getElementById('eye.png').src="view.png"

    }else {
        x.type="password";
        document.getElementById('eye.png').src="eye.png"

    }
    console.log('aaaa');
    
}
function islefta() {
   
}


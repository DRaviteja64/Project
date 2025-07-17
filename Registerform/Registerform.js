const body = document.querySelector(".main");
const submit = document.querySelector(".submit-btn");

const empty = document.querySelectorAll(".empty");
const error = document.querySelectorAll(".error");

for (let i = 0; i < empty.length; i++) {
    empty[i].classList.add("display-none");
}

for (let i = 0; i < error.length; i++) {
    error[i].classList.add("display-none");
}

let username = '', email = '', phone = '', password = '';

const namerule = /^[A-Za-z ]+$/;
const emailrule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordrule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]{8,}$/;
const phonerule = /^[0-9]{10}$/;

body.addEventListener("keyup", (event) => {
    event.preventDefault();
    const type = event.target.dataset.key;
    const value = event.target.value;
    switch (type) {
        case "name": {
            username = value;
            break;
        }
        case "email": {
            email = value;
            break;
        }
        case "phone": {
            phone = value;
            break;
        }
        case "password": {
            password = value;
            break;
        }
    }
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);

    if (username === '') {
        empty[0].classList.remove("display-none");
    }else {
        empty[0].classList.add("display-none");
        if (!namerule.test(username)) {
                error[0].classList.remove("display-none");
        } else {
                error[0].classList.add("display-none");
        }
    }
    if(email===''){
        empty[1].classList.remove("display-none");
    }else{
        empty[1].classList.add("display-none");
        if(!emailrule.test(email)){
            error[1].classList.remove("display-none");
        }else{
            error[1].classList.add("display-none");
        }
    }
    if(phone===''){
        empty[2].classList.remove("display-none");
    }else{
        empty[2].classList.add("display-none");
        if(!phonerule.test(phone)){
            error[2].classList.remove("display-none");
        }else{
            error[2].classList.add("display-none");
        }
    }
    if(password===''){
        empty[3].classList.remove("display-none");
    }else{
        empty[3].classList.add("display-none");
        if(!passwordrule.test(password)){
            error[3].classList.remove("display-none");
        }else{
            error[3].classList.add("display-none");
        }
    }
});

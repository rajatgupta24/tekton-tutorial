const submitBtn = document.querySelector(".sub");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let clg = document.getElementById("clg");
    let msg = document.getElementById("msg");

    const fNameRegex = /w/g;
    const lNameRegex = /w/g;
    const clgRegex = /w/g;
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fname.value === ""){
        alert("Please enter first name.");
        fname.focus();
    }

    else if (lname.value === ""){
        alert("Please enter last name.");
        lname.focus();
    }

    else if (email.value === ""){
        alert("Please enter email.");
        email.focus();
    }

    else if (clg.value === ""){
        alert("Please enter institution name.");
        clg.focus();
    }

    else if (msg.value === ""){
        alert("Please enter message.");
        msg.focus();
    }

    else if (fname.value < 3){
        alert("Please enter proper first name.");
        fname.focus();
    }

    else if (lname.value < 3){
        alert("Please enter proper last name.");
        lname.focus();
    }

    else if (email.value < 3){
        alert("Please enter valid email.");
        email.focus();
    }

    else if (msg.value < 3){
        alert("Please enter proper message.");
        msg.focus();
    }

    else if (fNameRegex.test(fname.value)){
        alert("Please enter proper first name.");
        fname.focus();
    }

    else if (lNameRegex.test(lname.value)){
        alert("Please enter proper last name.");
        lname.focus();
    }

    else if (emailRegex.test(email.value)){
        alert("Please enter valid email.");
        email.focus();
    }

    else if (clgRegex.test(clg.value)){
        alert("Please enter proper message.");
        msg.focus();
    }
});

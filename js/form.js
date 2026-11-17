const submit = document.querySelector('button[type="submit"]');
const message = document.getElementById("submitmsg");
const form = document.getElementById("form");

submit.addEventListener("click", function(event) {
    const fields = form.querySelectorAll('[required');
    let isEmpty = false;

    fields.forEach((field) => {
        if (field.value.trim() == '') {
            isEmpty = true;
            //field.style.borderColor = 'red';
        }
    });

    if (isEmpty) {
        event.preventDefault();
        alert("Please fill out all the required fields");
        return;
    }

    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phonenum").value;
    const exp = document.getElementById("exp").value;
    const addtl = document.getElementById("addtl").value;

    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(phone);
    console.log(exp);
    console.log(addtl);
    alert("Thank you for submitting!");

    form.reset();
});
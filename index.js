function validate(response) {
  let firstnameValid = document.getElementById("firstNameValid");
  let firstnameInvalid = document.getElementById("firstNameInvalid");
  let lastNameValid = document.getElementById("lastNameValid");
  let lastNameInvalid = document.getElementById("lastNameInvalid");
  let emailValid = document.getElementById("emailValid");
  let emailInvalid = document.getElementById("emailInvalid");
  let phoneValid = document.getElementById("phoneValid");
  let phoneInvalid = document.getElementById("phoneInvalid");
  let zipCodeValid = document.getElementById("zipCodeValid");
  let zipCodeInvalid = document.getElementById("zipCodeInvalid");
  let tncInvalid = document.getElementById("tncInvalid");
  let stateValid = document.getElementById("stateValid");
  let stateInvalid = document.getElementById("stateInvalid");

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;
  let TnCcheckbox = document.getElementById("TnCcheckbox").checked;
  
  switch (response) {
    case "firstname": {
      if (firstName === "") {
        firstnameInvalid.style.display = "block";
        firstnameValid.style.display = "none";
      } else {
        firstnameInvalid.style.display = "none";
        firstnameValid.style.display = "block";
      }
      break;
    }

    case "lastname": {
      if (lastName === "") {
        lastNameInvalid.style.display = "block";
        lastNameValid.style.display = "none";
      } else {
        lastNameInvalid.style.display = "none";
        lastNameValid.style.display = "block";
      }
      break;
    }

    case "email": {
      if (
        email === "" ||
        !email.includes("@") ||
        email.startsWith("@") ||
        email.slice(email.lastIndexOf(".")).length < 3
      ) {
        emailInvalid.style.display = "block";
        emailValid.style.display = "none";
      } else {
        emailInvalid.style.display = "none";
        emailValid.style.display = "block";
      }
      break;
    }

    case "phone": {
      if (
        phoneNumber === "" ||
        phoneNumber.length !== 10 ||
        phoneNumber[0] < 6
      ) {
        phoneInvalid.style.display = "block";
        phoneValid.style.display = "none";
      } else {
        phoneInvalid.style.display = "none";
        phoneValid.style.display = "block";
      }
      break;
    }

    case "zipcode": {
      if (zipCode === "" || zipCode.length !== 6) {
        zipCodeInvalid.style.display = "block";
        zipCodeValid.style.display = "none";
      } else {
        zipCodeInvalid.style.display = "none";
        zipCodeValid.style.display = "block";
      }
      break;
    }

    case "tnccheckbox": {
      if (!TnCcheckbox) {
        tncInvalid.style.display = "block";
      } else {
        tncInvalid.style.display = "none";
      }
      break;
    }

    case "state": {
      if (state === "") {
        stateInvalid.style.display = "block";
        stateValid.style.display = "none";
      } else {
        stateInvalid.style.display = "none";
        stateValid.style.display = "block";
      }
      break;
    }
  }
}

function validateall() {
    validate('firstname')
    validate('lastname')
    validate('email')
    validate('phone')
    validate('state')
    validate('zipcode')
    validate('tnccheckbox')
    if(document.getElementById("firstNameInvalid").style.display === "none"&&
    document.getElementById("lastNameInvalid").style.display === "none"&&
    document.getElementById("emailInvalid").style.display === "none"&&
    document.getElementById("phoneInvalid").style.display === "none"&&
    document.getElementById("zipCodeInvalid").style.display === "none"&&
    document.getElementById("tncInvalid").style.display === "none"&&
    document.getElementById("stateInvalid").style.display === "none"){
        window.open("thankyou.html","_self");
    }

    

}

function refresh() {
  document.getElementById("firstNameValid").style.display = "none";
  document.getElementById("firstNameInvalid").style.display = "none";
  document.getElementById("lastNameValid").style.display = "none";
  document.getElementById("lastNameInvalid").style.display = "none";
  document.getElementById("emailValid").style.display = "none";
  document.getElementById("emailInvalid").style.display = "none";
  document.getElementById("phoneValid").style.display = "none";
  document.getElementById("phoneInvalid").style.display = "none";
  document.getElementById("zipCodeValid").style.display = "none";
  document.getElementById("zipCodeInvalid").style.display = "none";
  document.getElementById("tncInvalid").style.display = "none";
  document.getElementById("stateValid").style.display = "none";
  document.getElementById("stateInvalid").style.display = "none";

  document.getElementById("firstName").value=''
  document.getElementById("lastName").value=''
  document.getElementById("email").value=''
  document.getElementById("phoneNumber").value=''
  document.getElementById("state").value=''
  document.getElementById("zipCode").value=''
  document.getElementById("TnCcheckbox").checked=false



}

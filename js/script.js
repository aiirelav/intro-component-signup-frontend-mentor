var reg =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var firstName = document.forms["formTrial"]["first-name"];
  var lastName = document.forms["formTrial"]["last-name"];
  var email = document.forms["formTrial"]["email"];
  var password = document.forms["formTrial"]["password"];

  var images = document.querySelectorAll("img[alt=\"error-image\"]");
  var messages = document.querySelectorAll("p.error-message");
  var inputs = [firstName, lastName, email, password];
  var flags = [true, true, true, true];
  
  var form = document.getElementById("form");

  form.addEventListener('submit' , (e)=> {
      if(firstName.value == "") {
         flags[0] = false;
      }
      else {
        flags[0] = true;
      }

      if(lastName.value == ""){
         flags[1] = false;
      }
      else {
        flags[1] = true;
      }

      if(email.value === '' || !reg.test(email.value)){
        flags[2] = false;
      }
      else if(reg.test(email.value)){
        flags[2] = true;
      }

      if(password.value == ""){
        flags[3] = false;
        console.log("here");
      }
      else {
        flags[3] = true;
        console.log("there");
      }

    
   for(var i = 0; i<flags.length; i++) {
        if(!flags[i]) {
          images[i].style.display = "block";
          messages[i].style.display = "block";
          inputs[i].style.border = "2px solid var(--red)";
          e.preventDefault();
        }        
        else {
          images[i].style.display = "none";
          messages[i].style.display = "none";
          inputs[i].style.border = "1px solid var(--dark-blue)";
        }
  }
});
  
$(document).ready(function() {

    // name validation

    $("#nama").on("input", function() {
        let nameInput = $("#nama").val();
        let pesanError = $("#pesanNama");

        if (nameInput.length < 2) { // minimum length validation
            pesanError.text("Minimum 2 character.") // insert a line in pesanError
            pesanError.css("color", "red")  // change the color into red
        } else if (nameInput.length > 30) { // maximum length validation
            pesanError.text("Should be less than 30 character.")
            pesanError.css("color", "red")
        } else {
            pesanError.text("Everything's OK") // message if everything is correct
            pesanError.css("color", "green")
        }
    });

    // password validation & capslock reminder

    $("#password").on({
        input: function(){
            let passwordInput = $("#password").val();
            let pesanError = "";

            if (passwordInput.length < 6) { // minimum length validation
                pesanError += "6 character (minimum), "
            }

            if (passwordInput.length > 30) { // maximum length validation
                pesanError = "less than 30 character, "
            }
        
            if (!/\d/.test(passwordInput)) {
                pesanError += "1 number, "; // number validation
            }
        
            if (!/[a-z]/.test(passwordInput)) { // lowercase validation
                pesanError += "1 lowercase letter, ";
            }
            
            if (!/[A-Z]/.test(passwordInput)) { // uppercase validation
                pesanError += "1 uppercase letter, ";
            }
        
            pesanError = pesanError.slice(0, -2); // delete the last ","
            let pesanPassword = $("#pesanPassword")

            if(pesanError.length < 2) { // respond if password's correct
                pesanPassword.text("Everything's OK")
                pesanPassword.css("color", "green")
            } else { // respond if password isn't correct
                pesanPassword.text("Should be " + pesanError)
                pesanPassword.css("color", "red")
            }
        },
        keydown: function(e){ // capslock reminder
            let pesanCaps = $("#reminderCapslock");
            
            if (event.getModifierState('CapsLock')){
                pesanCaps.text("Your capslock is on");
                pesanCaps.css("color", "orange");
            } else {
                pesanCaps.text(null); // if user doesn't use caps
            }
        }

    });

    // show password
    $("#showPassword").on("change", function() {
        let passwordInput = $("#password");
        let isChecked = $(this).is(":checked");
        passwordInput.attr("type", isChecked ? "text" : "password");
    });


    // form validation

    $("#formLogin").on("submit", function(event){
        event.preventDefault();

        console.log("Form submitted!");

        let nameInput = $("#nama").val();
        let passwordInput = $("#password").val();
        let pesanNama = $("#pesanNama");
        let pesanPassword = $("#pesanPassword");
       
        if(nameInput == ""){ // check name
            pesanNama.text("Please fill your name correctly")
            pesanNama.css("color", "red")
        }

        if(passwordInput == ""){ // check password
            pesanPassword.text("Please fill your password correctly")
            pesanPassword.css("color", "red")
        }

        if(pesanPassword.text() === "Everything's OK" && pesanNama.text() === "Everything's OK"){
            /* let url = "https://dummyjson.com/auth/login"
            $.ajax({
                type: "POST",
                url: url,
                contentType: "application/json",
                data: JSON.stringify ({
                    username: nameInput,
                    password: passwordInput,
                }),
                success: function(response) {  // Status 200, show alert and redirect
                  console.log(response);
                  alert("Welcome to my world," + " " + nameInput);
                  location.replace("../html/AboutMe.html");
                },
                error: function(error) { // status 400
                  console.log(error);
                  alert("Login failed. Please, insert the right username or password");
                }
              }); */

              alert("Welcome to my world," + " " + nameInput);
              location.replace("../html/about.html");
        } 

    });

    // spin logo

    let degree = 0;

    $("#logo").on("click", function(){
        degree += 360; 
        $("#logo").css("transform", `rotate(${degree}deg)`);
    })

    // animation in my photo 

    $("#myphoto").on("click", function() {
        $(this).animate({ opacity: 0 }, 1000, function() { // fade out animation
          // Reset the opacity
          $(this).css("opacity", 1).animate({ opacity: 1 }, 1000);
        });
      });

});

// just checking the list of user
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);


function login() {

    var username = document.getElementById('username-login').value;
    var password = document.getElementById('password-login').value;

    if (username === 'user' && password === 'pass') {
      window.location.href = 'pages-html/index.html';
    } else {
      alert('Login failed. Please check the information again.');
    }
  }

  function register() {

    var username = document.getElementById('username-register').value;
    var mail = document.getElementById('mail-register').value;
    var phone = document.getElementById('phone-register').value;
    var password = document.getElementById('password-register').value;
    var confirmPassword = document.getElementById('confirm-password').value;


    if((username === "") || (mail === "") || (phone === "") || (password === "") || (confirmPassword === "")){
        alert('Please enter all fields.');
    }else{
        if (password === confirmPassword) {
            window.location.href = 'pages-html/index.html';
          } else {
            alert('Confirm passwords do not match. Please check again.');
          }
    }


  }